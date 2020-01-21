package com.common;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@Component
public class Helper {

	private static final Logger logger = LogManager.getLogger("com.mybank");
	
	// -----------------------------------------------------------------------------------------------
	public double myRound(double d, int scale) {
		double roundOff = Math.round(d * Math.pow(10,scale)) / Math.pow(10,scale);
		return roundOff;
	}
	
	// -----------------------------------------------------------------------------------------------
	public String boolToStr(Boolean b){
		if (b)
			return "bəli";
		else
			return "";
	};
	
	//------------------------------------------------------------------------------------------------------
	public String convertBoolToStr(boolean b) {
		if (b)
			return "Y";
		else
			return "N";
	}
	
	// -----------------------------------------------------------------------------------------------
	public String booleanToStr(Boolean b){
		if (b)
			return "Y";
		else
			return "N";
	};		
	
	// -----------------------------------------------------------------------------------------------
	public Boolean strToBool(String s){
		if (s == null)
			return null;
		
		if (s.equals("Y"))
			return true;
		else
			return false;
	};	
	// -----------------------------------------------------------------------------------------------
	public String nvl(String s1, String s2) {
		return s1 == null ? s2 : s1;
	}
	
	// -----------------------------------------------------------------------------------------------
	public String nvl(Object s1, String s2) {
		return s1 == null ? s2 : s1.toString();
	}	

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------		
	public String DateToStr(Date d, String format) throws Exception
	{
		if (d == null)
			return "";
		else
		{
			SimpleDateFormat fm = new SimpleDateFormat(format);	
			String result = fm.format(d);
			return result;
		}
	}	
	// -----------------------------------------------------------------------------------------------
	public static String calcMD5(String text) throws Exception {
		MessageDigest md;
		md = MessageDigest.getInstance("MD5");
		byte[] md5hash = new byte[32];
		md.update(text.getBytes("UTF8"), 0, text.length());
		md5hash = md.digest();
		return convertToHex(md5hash);
	}

	// ---------------------------------------------------------------------------------------------------------
	public static String convertToHex(byte[] data) {
		StringBuffer buf = new StringBuffer();
		for (int i = 0; i < data.length; i++) {
			int halfbyte = (data[i] >>> 4) & 0x0F;
			int two_halfs = 0;
			do {
				if ((0 <= halfbyte) && (halfbyte <= 9))
					buf.append((char) ('0' + halfbyte));
				else
					buf.append((char) ('a' + (halfbyte - 10)));
				halfbyte = data[i] & 0x0F;
			} while (two_halfs++ < 1);
		}
		return buf.toString();
	}

	// -----------------------------------------------------------------------------------------------
	public String getSessionId(String clienIP) throws Exception {
		String sessionID = RequestContextHolder.currentRequestAttributes().getSessionId();
		String hash = calcMD5(sessionID + clienIP);
		return hash;
	}

	// -----------------------------------------------------------------------------------------------
	public Connection getOraConnection() throws SQLException {
		String host = "";
		String dbName = "";
		
		if (Constants.localDb)
			host = "localhost";
		else
			host = "185.96.126.181";
		
		if (Constants.enviroment.equals("PROD"))
			dbName = "pmdb";
		else
			dbName = "mybankdb";
		
		final String connString = "jdbc:oracle:thin:@"+host+":1521:"+dbName;
		Connection conn = DriverManager.getConnection(connString, "mybank", "123qwe");
		debug("Successfully Connected to DataBase");
		return conn;
	}

	// -----------------------------------------------------------------------------------------------
	public void debug(String message) {
		logger.debug(message);
	}

	// -----------------------------------------------------------------------------------------------
	public void info(String message) {
		logger.info(message);
	}

	// -----------------------------------------------------------------------------------------------
	public void error(Exception er) {
		logger.error(er, er);
	}

	// -----------------------------------------------------------------------------------------------
	public void error(Object message) {
		logger.error(message);
	}

	// -----------------------------------------------------------------------------------------------
	@JsonPropertyOrder({ "success", "sessionid", "errorText", "data" })
	public Responce errorResponce(Exception er) {
		logger.error(er, er);

		Responce responce = new Responce();
		// responce.setSessionid(getSessionId());
		responce.setSuccess("false");
		responce.setErrorText(er);
		return responce;
	}

	// -----------------------------------------------------------------------------------------------
	@JsonPropertyOrder({ "success", "sessionid", "errorText", "data" })
	public Responce errorResponce(String er) {
		logger.error(er);

		Responce responce = new Responce();
		// responce.setSessionid(getSessionId());
		responce.setSuccess("false");
		responce.setErrorText(er);
		return responce;
	}

	// -----------------------------------------------------------------------------------------------
	@JsonPropertyOrder({ "success", "sessionid", "errorText", "data" })
	public Responce successResponce(Object data) {
		Responce responce = new Responce();
		// responce.setSessionid(getSessionId());
		responce.setSuccess("true");
		responce.setErrorText("");
		responce.setData(data);
		return responce;
	}

	// ----------------------------------------------------------------------------------------------------------------	
	public void traceLog(Connection conn, String sessionId, String messageName, String messageType, String messageData,
			String clientIP) throws SQLException {
		info("traceLog started");

		info("sessionId  : " + sessionId + " messageName : " + messageName + " messageType : " + messageType
				+ " messageData : " + messageData + " clientIP    : " + clientIP);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL tracelog(p_sessin_id    => ?," + " p_message_name => ?," + " p_message_type => ?,"
					+ " p_message_data => ?," + " p_client_ip	  => ?) }";

			cls = conn.prepareCall(sql);
			cls.setString(1, sessionId);
			cls.setString(2, messageName);
			cls.setString(3, messageType);
			cls.setString(4, messageData);
			cls.setString(5, clientIP);
			cls.execute();

			info("traceLog status : success");
		} catch (Exception e) {
			info("traceLog status : error");
			error(e);
		} finally {
			if (cls != null) {
				cls.close();				
			}	
		}
	}
	
	// ----------------------------------------------------------------------------------------------------------------
	public void traceLog(String sessionId, String messageName, String messageType, String messageData, String clientIP)
			throws SQLException {
		info("traceLog started");

		info("sessionId  : " + sessionId + " messageName : " + messageName + " messageType : " + messageType
				+ " clientIP    : " + clientIP);

		String sql = "";
		CallableStatement cls = null;
		Connection conn = null;
		try {
			sql = "{ CALL tracelog(p_sessin_id    => ?," + " p_message_name => ?," + " p_message_type => ?,"
					+ " p_message_data => ?," + " p_client_ip	  => ?) }";
			conn = getOraConnection();
			cls = conn.prepareCall(sql);
			cls.setString(1, sessionId);
			cls.setString(2, messageName);
			cls.setString(3, messageType);
			cls.setString(4, messageData);
			cls.setString(5, clientIP);
			cls.execute();

			info("traceLog status : success");
		} catch (Exception e) {
			info("traceLog status : error");
			error(e);
		} finally {
			conn.close();
			if (cls != null) {	
				cls.close();				
			}
			
		}
	}	
	//----------------------------------------------------------------------------------------------------------------
	public void partnerLog(String partnerType, int partnerId, String sessionId, 
			String jwtKey, String logType, String logJSON) throws SQLException {
		info("partnerLog started");

		info("partnerType  : " + partnerType + " partnerId : " + partnerId + 
			  " sessionId : " + sessionId + " jwtKey    : " + jwtKey + "  logType     :" + logType + 
			  " logJSON : " + logJSON);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL pkg_partner.partnerlog(p_partnertype => ?, " + 
				  " 							 p_partnerid   => ?, " + 
				  "								 p_sessionid   => ?, " + 
				  "								 p_jwtkey      => ?," +
				  "								 p_logType     => ?," +
				  "								 p_logJson     => ?)}";

			cls = getOraConnection().prepareCall(sql);
			cls.setString(1, partnerType);
			cls.setInt(2, partnerId);
			cls.setString(3, sessionId);
			cls.setString(4, jwtKey);
			cls.setString(5, logType);
			cls.setString(6, logJSON);
			cls.execute();

			info("partnerLog status : success");
		} catch (Exception e) {
			info("partnerLog status : error");
			error(e);
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();				
			}	
		}
	}
	//----------------------------------------------------------------------------------------------------------------
	public String base64FileTodisc(String name, String data) {
		String fName = Constants.fileStorePath + name;
		try {
			 String fileData = data; 
			 FileOutputStream fos = new FileOutputStream(fName);
			 fos.write(Base64.getDecoder().decode(fileData)); 
			 fos.close();
			 
			 return fName;
		}catch (Exception e) {
			info("partnerLog status : error");
			error(e);
			return "";
		}		
	}
	
	//----------------------------------------------------------------------------------------------------------------
    public String convertInputStreamToString(InputStream inputStream) throws IOException {

        ByteArrayOutputStream result = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int length;
        while ((length = inputStream.read(buffer)) != -1) {
            result.write(buffer, 0, length);
        }

        return result.toString(StandardCharsets.US_ASCII.name());
    }
    
    //----------------------------------------------------------------------------------------------------------------
    public String convertInputStreamToBase64(InputStream inputStream) throws IOException {
        byte[] imageBytes = inputStream.readAllBytes();

    	inputStream.read(imageBytes, 0, imageBytes.length);
    	inputStream.close();
    	String str = Base64.getEncoder().encodeToString(imageBytes);
    	return str;
	}

    //----------------------------------------------------------------------------------------------------------------
    public String getIpAddress(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-FORWARDED-FOR");
        //return (xForwardedFor == null ? "" : xForwardedFor + ",") + request.getRemoteAddr();
        return xForwardedFor == null ? "" : xForwardedFor;
    }    
	
}
