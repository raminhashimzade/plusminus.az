package rh.gateway;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import com.common.Helper;

import oracle.jdbc.OracleTypes;

public class GatewayDAO {
	
	Helper helper = new Helper();
	
	//-----------------------------------------------------------------------------------------------------------------------------------
	public void insertCurrRate(Connection conn, String bankName, String currencyCode, String rateType, String sellRate, String buyRate) throws SQLException {
		helper.info("------- just called  : insertCurrRate");
		
		helper.info("------- bankName  : " + bankName + " currencyCode : " + currencyCode +
							" sellRate : " + sellRate + " buyRate : " + buyRate);
		
		String sql = "";
		String srate = helper.nvl(sellRate,"").replace(",", "");
		String brate = helper.nvl(buyRate,"").replace(",", "");		
		CallableStatement cls = null;
		try {			
			sql = "{ CALL pkg_service_list.insertcurrrate(p_bank_name => ?, "
													   + "p_currency_code => ?, "
													   + "p_rate_type => ?,"
													   + "p_sell_rate => ?,"
													   + "p_buy_rate => ?) }";
			cls = conn.prepareCall(sql);
			cls.setString(1, bankName);
			cls.setString(2, currencyCode);
			cls.setString(3, rateType);
			cls.setDouble(4, Double.parseDouble(srate));
			cls.setDouble(5, Double.parseDouble(brate));
			cls.execute();

			helper.info("insertCurrRate status : success");
		}catch (Exception e) {
			helper.info("insertCurrRate status : error");
			helper.error(e);
			//throw e;
		}finally{
			if (cls != null) {
				cls.close();				
			}						
		}
	}
	
	//-----------------------------------------------------------------------------------------------------------------------------------
	public void SaveSMS(String packId, String srs, String gsm, String text, int status) throws SQLException {
		helper.info("------- just called  : GatewayDAO > SaveSMS");		
		helper.info("------- packId  : " + packId + " srs : " + srs + " gsm : " + gsm + " text : "+ text + " status : "+ status);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL pkg_gateway.savesms(p_smspackid => ?," + 
					"                      	  p_source 	  => ?," + 
					"                      	  p_gsm 	  => ?," + 
					"                      	  p_smstest   => ?," + 
					"                      	  p_status 	  => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setString(1, packId);
			cls.setString(2, srs);
			cls.setString(3, gsm);
			cls.setString(4, text);
			cls.setInt(5, status);
			cls.execute();

			helper.info("GatewayDAO > SaveSMS status : success");
		}catch (Exception e) {
			helper.info("GatewayDAO > SaveSMS status : error");
			helper.error(e);
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}							
		}
	}	
	
	//-----------------------------------------------------------------------------------------------------------------------------------
	public void cusOTP(String gsm, String channel, int otpCode, int status) throws SQLException {
		helper.info("------- just called  : GatewayDAO > cusOTP");		
		helper.info("------- gsm  : " + gsm + " channel : " + channel + " otpCode : " + otpCode);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL pkg_service_list.cusotp(p_cus_mobile_phone => ?," + 
					"                          	  p_channel          => ?," + 
					"                          	  p_otp_code         => ?," +
					"							  p_status			 => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setString(1, gsm);
			cls.setString(2, channel);
			cls.setInt(3, otpCode);
			cls.setInt(4, status);
			cls.execute();

			helper.info("GatewayDAO > cusOTP status : success");
		}catch (Exception e) {
			helper.info("GatewayDAO > cusOTP status : error");
			helper.error(e);
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}
	}

	//-----------------------------------------------------------------------------------------------------------------------------------
	public int checkOTP(String gsm, int otpCode) throws SQLException {
		helper.info("------- just called  : GatewayDAO > checkOTP");		
		helper.info("------- gsm  : " + gsm + " otpCode : " + otpCode);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.cuscheckotp(p_cus_mobile_phone => ?," + 
					"                                       p_otp_code         => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, gsm);
			cls.setInt(3, otpCode);
			cls.execute();
			
			helper.info("GatewayDAO > checkOTP status : success");
			
			return cls.getInt(1);
		}catch (Exception e) {
			helper.info("GatewayDAO > checkOTP status : error");
			helper.error(e);
			return -1;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}							
		}
	}	
	
}
