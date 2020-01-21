package rh.service;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.common.Constants;
import com.common.Helper;
import com.common.Request;
import com.common.Responce;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import oracle.jdbc.OracleTypes;
import rh.request.forms.ReqCurrencyArchiveRate;
import rh.request.forms.ReqDiCurrList;
import rh.responce.forms.currency.ResCurrencyArchiveRate;
import rh.responce.forms.currency.ResCurrencyRateAll;
import rh.responce.forms.currency.ResCurrencyRateBest;
import rh.responce.forms.currency.ResDiCurrList;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class CurrencyPage {
	@Autowired
	private Helper helper;
	
	//Get CurrencyCode List
	//---------------------------------------------------------------------------
	@PostMapping("/"+Constants.projectName+"/currCodeList")
	public Responce currCodeList(@RequestBody ReqDiCurrList json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();			
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;		
		Connection con = helper.getOraConnection();
		Responce res = null;
		try {			
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			sql = "{ CALL ? := pkg_service_list.getcurrencylist(p_page => ?) }";
			cls = con.prepareCall(sql);			
			cls.clearParameters();
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, json.getPageName());
			cls.execute();			
			
			rs = (ResultSet)cls.getObject(1);
			
			ArrayList<ResDiCurrList> resDiCurrList = new ArrayList<ResDiCurrList>();
			ArrayList<String> currCodes = new ArrayList<String>();
			while (rs.next()) {
				helper.info("curr code = "+rs.getString("CURR_CODE"));
				currCodes.add(rs.getString("CURR_CODE"));
			}
			
			resDiCurrList.add(new ResDiCurrList(currCodes));
			res = helper.successResponce(resDiCurrList);			

			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}							
		}
		
	}
		
	//Get All Rates
	//---------------------------------------------------------------------------
	@PostMapping("/"+Constants.projectName+"/currRateList")
	public Responce currRateList(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : CurrencyPage > currRateList");
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		Responce res = null;
		Connection con = helper.getOraConnection();
		
		try {
			helper.traceLog(con, json.getToken(), "currRateList", "in", json.toString(), helper.getIpAddress(request));
			sql = "{ CALL ? := pkg_service_list.getCurRateList() }";
			cls = con.prepareCall(sql);			
			cls.clearParameters();
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.execute();
			
			rs = (ResultSet) cls.getObject(1);
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);			
			ArrayList<ResCurrencyRateAll> listBanksCurrency = new ArrayList<ResCurrencyRateAll>();
			while (rs.next()) {
				listBanksCurrency.add(mapper.readValue(rs.getString("JSON_VAL"), ResCurrencyRateAll.class));
				helper.info("json value : " + rs.getString("JSON_VAL"));
			}			
			res = helper.successResponce(listBanksCurrency);			
			
		    helper.traceLog(con, json.getToken(), "currRateList", "out", res.toString(), helper.getIpAddress(request));
			helper.info("CurrencyPage > currRateList status : success");
			return res;			
		}catch (Exception e) {
			helper.info("CurrencyPage > currRateList status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "currRateList", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}finally{
			con.close();
			if (cls != null) {	
				cls.close();
			}			
		}
		
	}
	
	//Get ATB All Rates
	//---------------------------------------------------------------------------
	@PostMapping("/"+Constants.projectName+"/currAtbRateList")
	public Responce currAtbRateList(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : CurrencyPage > currRateList");
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		Responce res = null;
		Connection conn = helper.getOraConnection();
		
		try {
			helper.traceLog(conn, json.getToken(), "currRateList", "in", json.toString(), helper.getIpAddress(request));
			sql = "{ CALL ? := pkg_service_list.getCurRateList(1) }";
			cls = conn.prepareCall(sql);			
			cls.clearParameters();
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.execute();
			
			rs = (ResultSet) cls.getObject(1);
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);			
			ArrayList<ResCurrencyRateAll> listBanksCurrency = new ArrayList<ResCurrencyRateAll>();
			while (rs.next()) {
				listBanksCurrency.add(mapper.readValue(rs.getString("JSON_VAL"), ResCurrencyRateAll.class));
				helper.info("json value : " + rs.getString("JSON_VAL"));
			}			
			res = helper.successResponce(listBanksCurrency);			
			
		    helper.traceLog(conn, json.getToken(), "currRateList", "out", res.toString(), helper.getIpAddress(request));
			helper.info("CurrencyPage > currRateList status : success");
			return res;			
		}catch (Exception e) {
			helper.info("CurrencyPage > currRateList status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "currRateList", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}finally{
			conn.close();
			if (cls != null) {				
				cls.close();
			}			
		}
		
	}	
	
	//Get Best Rates from all banks
	//---------------------------------------------------------------------------
	@PostMapping("/"+Constants.projectName+"/currBestRateList")
	public Responce currBestRateList(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : CurrencyPage > currBestRateList");
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		Responce res = null;

		Connection con = helper.getOraConnection();
		
		try {
			helper.traceLog(con, json.getToken(), "currBestRateList", "in", json.toString(), helper.getIpAddress(request));
			sql = "{ CALL ? := pkg_service_list.getBestCurRateList() }";
			cls = con.prepareCall(sql);			
			cls.clearParameters();
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.execute();
			
			rs = (ResultSet) cls.getObject(1);
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);			
			ArrayList<ResCurrencyRateBest> listBestCurrencyRate = new ArrayList<ResCurrencyRateBest>();
			while (rs.next()) {
				listBestCurrencyRate.add(mapper.readValue(rs.getString("JSON_VAL"), ResCurrencyRateBest.class));
				helper.info("json value : " + rs.getString("JSON_VAL"));
			}			
			res = helper.successResponce(listBestCurrencyRate);
			
		    helper.traceLog(con, json.getToken(), "currBestRateList", "out", res.toString(), helper.getIpAddress(request));
			helper.info("CurrencyPage > currBestRateList status : success");
			return res;			
		}catch (Exception e) {
			helper.info("CurrencyPage > currBestRateList status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "currBestRateList", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}finally{
			con.close();
			if (cls != null) {				
				cls.close();
			}			
		}		
	}
	
	//Get Best Rates from all banks
	//---------------------------------------------------------------------------
	@PostMapping("/"+Constants.projectName+"/currRateArchive")
	public Responce currRateArchive(@RequestBody ReqCurrencyArchiveRate json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : CurrencyPage > currRateArchive");
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		Responce res = null;
		Connection con = helper.getOraConnection();
		
		try {
			helper.traceLog(con, json.getToken(), "currRateArchive", "in", json.toString(), helper.getIpAddress(request));
			sql = "{ CALL ? := pkg_service_list.getcurratearchive(p_currencycode => ?," + 
																" p_date_from    => ?," + 
																" p_date_until   => ?) }";
			cls = con.prepareCall(sql);			
			cls.clearParameters();
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, json.getCurrencyCode());
			cls.setString(3, json.getDatefrom());
			cls.setString(4, json.getDateUntil());
			cls.execute();
			
			rs = (ResultSet) cls.getObject(1);
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);			
			ArrayList<ResCurrencyArchiveRate> listArchiveCurrencyRate = new ArrayList<ResCurrencyArchiveRate>();
			while (rs.next()) {
				listArchiveCurrencyRate.add(new ResCurrencyArchiveRate(rs.getDouble(2), rs.getDate(1)));
				helper.info("getDouble value : " + rs.getDouble(2));
				helper.info("getDate value : " + rs.getDate(1));
			}			
			res = helper.successResponce(listArchiveCurrencyRate);
			
		    helper.traceLog(con, json.getToken(), "currRateArchive", "out", res.toString(), helper.getIpAddress(request));
			helper.info("CurrencyPage > currRateArchive status : success");
			return res;			
		}catch (Exception e) {
			helper.info("CurrencyPage > currRateArchive status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "currRateArchive", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}finally{
			con.close();
			if (cls != null) {				
				cls.close();
			}			
		}
		
	}	
}
