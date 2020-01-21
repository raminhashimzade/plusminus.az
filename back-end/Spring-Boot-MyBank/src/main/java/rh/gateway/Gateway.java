package rh.gateway;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;
import java.util.Random;

import javax.activation.DataHandler;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.common.Constants;
import com.common.Helper;
import com.common.Responce;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import oracle.jdbc.OracleTypes;
import rh.model.bank.aznaz.AznAz;

@Component
public class Gateway {
	
	Helper helper = new Helper();
	
	//Send Email
	//--------------------------------------------------------------------------------------------------------
	public void sendEmail() throws SQLException{

		//-------------------------------------------------------------------------------------------------------
		//--------- Prepare Message------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------------------------				
		
		Connection conn = helper.getOraConnection();
		String sql = "{ CALL pkg_gateway.getlisttosendmail(p_outcursor => ?) }";
		CallableStatement cls = null;
		try {
			helper.info("Gateway > sendEmail getlisttosendmail");
			cls = conn.prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);				
			cls.execute();
			
			
			String id = "";
			String from = "";
			String to = "";
			String cc = "";
			//String bcc = "";
			String mailSubject = "";
			String mailBody = "";
			String packId = "";
			
			try(ResultSet rs = (ResultSet)cls.getObject(1)){
				while(rs.next()){
					id = rs.getString(1);
					packId = rs.getString(2);
					from = rs.getString(5);
					to = rs.getString(6);
					cc = rs.getString(7);
					//bcc = rs.getString(8);
					mailSubject = rs.getString(9);
					mailBody = rs.getString(10);
					
					
					helper.info("Gateway > sendEmail message_id : " + id);
					helper.info("Gateway > sendEmail packId : " + packId);
					//-------------------------------------------------------------------------------------------------------
					//--------- Send Mail------------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------------------------------					
					helper.info("Gateway > sendEmail prepare server");
					final String username = "order@plusminus.az";
				    final String password = "X1YcWpQkVDBsTHzRPcet";
				    Properties props = new Properties();
				    props.put("mail.smtp.host", "mail.plusminus.az");
				    props.put("mail.smtp.port", "25");
				    props.put("mail.smtp.auth", "true");
				    props.put("mail.smtp.starttls.enable", "true"); //TLS
			        
				    
				    helper.info("Gateway > sendEmail prepare session");
				    Session session = Session.getInstance(props,
				            new javax.mail.Authenticator() {
				                protected PasswordAuthentication getPasswordAuthentication() {
				                    return new PasswordAuthentication(username, password);
				                }
				            });
				    
				    
				    helper.info("Gateway > sendEmail prepare from/to/cc/bcc");
			        Message message = new MimeMessage(session);
			        message.setFrom(new InternetAddress(from));
			        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			        if (cc != null && !cc.equals("null"))
			        	message.setRecipients(Message.RecipientType.CC, InternetAddress.parse(cc));
			        message.setSubject(mailSubject);
			        
			        helper.info("Gateway > sendEmail prepare message");
			        MimeBodyPart messageBodyPart = new MimeBodyPart();
			        messageBodyPart.setContent(message, "text/html; charset=utf-8");
			        messageBodyPart.setText(mailBody);			        
			        messageBodyPart.setHeader("Content-Type", "text/html");			        
			        Multipart multipart = new MimeMultipart();
			        multipart.addBodyPart(messageBodyPart);
			        
			        
			        //-------------------------------
			        //---------------get attachments
			        //--------------------------------
			        helper.info("Gateway > sendEmail prepare attachments");
			        String sqlA = "{ CALL pkg_gateway.getmailattachments(p_packId => ?, p_outcursor => ?) }";
					CallableStatement clsA = null;
					try {
						clsA = conn.prepareCall(sqlA);
						clsA.setString(1, packId);
						clsA.registerOutParameter(2, OracleTypes.CURSOR);				
						clsA.execute();
						
						String fileName = "";
						ByteArrayDataSource rawData;
						try(ResultSet rsA = (ResultSet)clsA.getObject(2)){
							while(rsA.next()){
								byte[] bytes = rsA.getBytes(5);
								fileName = rsA.getString(3);
								
								helper.info("Gateway > sendEmail attachment fileName : " + fileName);
								messageBodyPart = new MimeBodyPart();
								rawData = new ByteArrayDataSource(bytes, "application/octet-stream");										
								messageBodyPart.setDataHandler(new DataHandler(rawData));
								messageBodyPart.setFileName(fileName);
								multipart.addBodyPart(messageBodyPart);
						        
							}
						}
					} catch (Exception e) {
						helper.error("Gateway > sendEmail attachment exception : " + e);
					} finally {
						if (clsA != null)
							clsA.close();					
					}
			        //-------------------------------
			        //---------------/get attachments
			        //--------------------------------					
					message.setContent(multipart);
					helper.info("Gateway > sendEmail sending...");				
					Transport.send(message);			        
			        helper.info("Gateway > sendEmail mail sended");
					//-------------------------------------------------------------------------------------------------------
					//---------/Send Mail------------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------------------------------						    						    
					//-------------------------------------------------------------------------------------------------------
					//---------Update Status---------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------------------------------						    
				    String sqlUpdate = "{ CALL pkg_gateway.setstatus(p_mailid => ?, pstatus => ?) }";
					CallableStatement clsUpdate = null;
					try {						
						clsUpdate = conn.prepareCall(sqlUpdate);
						clsUpdate.setString(1, id);
						clsUpdate.setString(2, "1");
						clsUpdate.execute();
						helper.info("id = "+id+"; Gateway > updated SUCCESS");
					} catch (Exception e) {
						helper.error("Gateway > sendEmail update Status exception : " + e);
					} finally {
						if (clsUpdate != null)
							clsUpdate.close();					
					}
					//-------------------------------------------------------------------------------------------------------
					//---------/Update Status---------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------------------------------							
				}								
			}
		
		} catch (Exception e) {
			helper.error("Gateway > sendEmail Exception : " + e);							

		} finally {
			if (cls != null)
				cls.close();	
			conn.close();
		}				
	}
			
	//Send SMS
	//--------------------------------------------------------------------------------------------------------
	public Responce sendSms(String gsm, String text, String source, String packId) throws SQLException{
		final String url = Constants.msmURL;
		
		// HTTP request to msm.az
		String post_data = url+"?user="+Constants.msmUser+"&password="+Constants.msmPsw+"&gsm="+gsm+"&from="+Constants.msmSenderName+"&text="+text;		
		RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(post_data, String.class);
	    helper.debug(result);
	    
	    GatewayDAO gatewayDao = new GatewayDAO();
	    // analyze responce and return
	    if (result.contains("errno=100&errtext=OK")) {
	    	gatewayDao.SaveSMS(packId, source, gsm, text, 1);
		    Responce responce = helper.successResponce(null);
		    return responce;
	    }	    	
	    else {
	    	gatewayDao.SaveSMS(packId, source, gsm, text, -1);
		    Responce responce = helper.errorResponce(result); 
		    return responce;
	    }	    	
	}
	
	//Send SMS Token
	//--------------------------------------------------------------------------------------------------------	
	public Responce sendOTP(String gsm, String channel) throws SQLException{		
		//generate random four digit number
		int min = 1001;
	    int max = 9999;
	    Random random = new Random();
	    int randomNumber = random.nextInt(max + 1 - min) + min;
	    helper.info("randomNumber generated : "+String.valueOf(randomNumber));
	    
	    String text = "Sizin SMS kodunuz : " + randomNumber;	    
	    
	    //send SMS
		Responce res = sendSms(gsm, text, "OTP", "");
		int status = 0;
		if (res.getSuccess().equals("true"))
			status = 1;
		else
			status = -1;
		GatewayDAO gatewayDao = new GatewayDAO();
		gatewayDao.cusOTP(gsm, channel, randomNumber, status);

		//return
		return res;
	}
	
	//www.azn.az
	//--------------------------------------------------------------------------------------------------------	
	public Responce aznAz() throws Exception{
		final String urlaznaz = "https://www.azn.az/data/data.json";
		Connection con = helper.getOraConnection();
		
		try {
			// HTTP request
			RestTemplate restTemplate = new RestTemplate();
		    String result = restTemplate.getForObject(urlaznaz, String.class);
		    helper.info(result);
		    
		    // Deserialize JSON to class
		    ObjectMapper mapper = new ObjectMapper();
		    mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false); 
		    ArrayList<AznAz> aznaz = mapper.readValue(result, new TypeReference<ArrayList<AznAz>>(){});
		    GatewayDAO gtDao = new GatewayDAO();
		    
		    for (AznAz row : aznaz) {
		    	helper.info(";" + row.getId() + ";" +row.getName() + ";" + row.getLink() + ";" + row.getMaplink());
				
				//--CASH----------------------------------------
				if (row.getCash() != null) {
					if (row.getCash().getEur() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "EUR", 
								 "CASH",
								 helper.nvl(row.getCash().getEur().getSell(),"0"), 
								 helper.nvl(row.getCash().getEur().getBuy(),"0")
								 );
					}
					if (row.getCash().getUsd() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "USD", 
								 "CASH",
								 helper.nvl(row.getCash().getUsd().getSell(),"0"), 
								 helper.nvl(row.getCash().getUsd().getBuy(),"0")
								 );
					}
					if (row.getCash().getGbp() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "GBP", 
								 "CASH",
								 helper.nvl(row.getCash().getGbp().getSell(),"0"), 
								 helper.nvl(row.getCash().getGbp().getBuy(),"0")
								 );
					}
					if (row.getCash().getRub() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "RUB", 
								 "CASH",
								 helper.nvl(row.getCash().getRub().getSell(),"0"), 
								 helper.nvl(row.getCash().getRub().getBuy(),"0")
								 );							
					}
					if (row.getCash().get_try() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "TRY", 
								 "CASH",
								 helper.nvl(row.getCash().get_try().getSell(),"0"), 
								 helper.nvl(row.getCash().get_try().getBuy(),"0")
								 );
										 
					}
					if (row.getCash().getGold() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "GOLD", 
								 "CASH",
								 helper.nvl(row.getCash().getGold().getData(),"0"), 
								 helper.nvl(row.getCash().getGold().getData(),"0")
								 );						
					}
					if (row.getCash().getOil() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "OIL", 
								 "CASH",
								 helper.nvl(row.getCash().getOil().getData(),"0"), 
								 helper.nvl(row.getCash().getOil().getData(),"0")
								 );						
					}					
				}
				//--NONCASH----------------------------------------
				if (row.getNocash() != null) {				
					if (row.getNocash().getEur() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "EUR", 
								 "NONCASH",
								 helper.nvl(row.getNocash().getEur().getSell(),"0"), 
								 helper.nvl(row.getNocash().getEur().getBuy(),"0")
								 );
					}
					if (row.getNocash().getUsd() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "USD", 
								 "NONCASH",
								 helper.nvl(row.getNocash().getUsd().getSell(),"0"), 
								 helper.nvl(row.getNocash().getUsd().getBuy(),"0")
								 );
					}
					if (row.getNocash().getGbp() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "GBP", 
								 "NONCASH",
								 helper.nvl(row.getNocash().getGbp().getSell(),"0"), 
								 helper.nvl(row.getNocash().getGbp().getBuy(),"0")
								 );
					}
					if (row.getNocash().getRub() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "RUB", 
								 "NONCASH",
								 helper.nvl(row.getNocash().getRub().getSell(),"0"), 
								 helper.nvl(row.getNocash().getRub().getBuy(),"0")
								 );							
					}
					if (row.getNocash().get_try() != null) {
						gtDao.insertCurrRate(con,
								 row.getName(), 
								 "TRY", 
								 "NONCASH",
								 helper.nvl(row.getNocash().get_try().getSell(),"0"), 
								 helper.nvl(row.getNocash().get_try().getBuy(),"0")
								 );						
					}
				}
			}		    
		    //return
		    Responce responce = helper.successResponce(null);
		    return responce;
		} catch (Exception e) {
			helper.error(e);
			Responce responce = helper.errorResponce(e);
		    return responce;			
		} finally {
			con.close();
		}
		
	}
}
