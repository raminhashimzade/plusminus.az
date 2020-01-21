package rh.service;

import java.sql.CallableStatement;
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

import oracle.jdbc.OracleTypes;
import rh.gateway.Gateway;
import rh.request.forms.ReqBestOffers;
import rh.request.forms.ReqContactUs;
import rh.request.forms.ReqDiBankList;
import rh.request.forms.ReqRateCompany;
import rh.responce.forms.ResBestOffers;
import rh.responce.forms.ResDiBankList;
import rh.responce.forms.ResStatistics;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class MainPage {

	@Autowired
	private Helper helper;

	@Autowired
	private Gateway gateway;	
	
	//Get Banks List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/banklist")
	public Responce banklist(@RequestBody ReqDiBankList json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : MainPage > banklist");
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), "listBank", "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResDiBankList> rs = daoBankList(json);
			res = helper.successResponce(rs);
			helper.info("MainPage > banklist status : success");
			helper.traceLog(json.getToken(), "listBank", "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info("MainPage > banklist status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "listBank", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Get Best Offers
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/bestOffers")
	public Responce bestOffers(@RequestBody ReqBestOffers json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : MainPage > bestOffers");
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), "bestOffers", "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResBestOffers> rs = daoBestOffers(json);
			res = helper.successResponce(rs);
			helper.info("MainPage > bestOffers status : success");
			helper.traceLog(json.getToken(), "bestOffers", "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info("MainPage > bestOffers status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "bestOffers", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	
	
	//Get Order Statistics
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/orderstats")
	public Responce orderstats(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : MainPage > orderstats");
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), "orderstats", "in", json.toString(), helper.getIpAddress(request));
			ResStatistics rs = daoOrderStatistic();
			res = helper.successResponce(rs);
			helper.info("MainPage > orderstats status : success");
			helper.traceLog(json.getToken(), "orderstats", "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info("MainPage > orderstats status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), "orderstats", "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	

	//Vote plusminus.az order
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/voteMe")
	public Responce voteMe(@RequestBody ReqRateCompany json, HttpServletRequest request) throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();		
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			Responce rs = daoRateCompany(json);
			res = rs;
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	//Vote plusminus.az order
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/postCustomerMessage")
	public Responce postCustomerMessage(@RequestBody ReqContactUs json, HttpServletRequest request) throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();		
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			Responce rs = daoContactUs(json);
			res = rs;
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			
			Responce smsRes = gateway.sendSms(json.getCusMobilePhone(), Constants.smsContactUsText, "CONTACTUS", "");
			helper.info(className+" > "+methodName+" send CONTACTUS SMS : " + smsRes.toString());			
			helper.traceLog(json.getToken(), methodName, "sendContactUsSMS", smsRes.toString(), helper.getIpAddress(request));
			
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	
	
	//-------------------------------------------------------------------------------------------
	//--DAO METHOD LIST--------------------------------------------------------------------------
	//-------------------------------------------------------------------------------------------	
	//--Order Statistics------------------------------------------------------------------------------------
	public ResStatistics daoOrderStatistic() throws SQLException {
		helper.info("------- just called  : BankDAO > orderStatistic");
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;	
		try {			
			sql = "{ CALL   ? := pkg_service_list.getorderstatistics";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			ResStatistics stats = new ResStatistics();
			while (rs.next()) {
				stats.setTotalCustomers(rs.getInt("TOTALCUSTOMERS"));
				stats.setTotalCreditCardOrders(rs.getInt("TOTALCREDITCARDORDERS"));
				stats.setTotalDebetCardOrders(rs.getInt("TOTALDEBETCARDORDERS"));
				stats.setTotalLoanOrders(rs.getInt("TOTALLOANORDERS"));
				stats.setTotalDepositOrders(rs.getInt("TOTALDEPOSITORDERS"));
			}
			
			helper.info("BankDAO > orderStatistic  status : success");
			return stats;
		}catch (Exception e) {
			helper.info("BankDAO > orderStatistic  status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}					
		}
	}
	
	//--List Bank-------------------------------------------------------------------------------------------
	public ArrayList<ResDiBankList> daoBankList(ReqDiBankList json) throws SQLException {
		helper.info("------- just called : BankDAO > listBank");
		ArrayList<ResDiBankList> listBank = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.getbanklist(p_partner => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			if (json.isPartner())
				cls.setInt(2, 1);
			else
				cls.setInt(2, 0);
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			while (rs.next()) {
				listBank.add(new ResDiBankList(rs.getString("BANK_ID"),
											   rs.getString("BANK_NAME"),
											   rs.getString("BANK_PHONE"),
											   rs.getString("BANK_EMAIL"),
											   rs.getString("BANK_CALL_CENTER"),
											   rs.getString("BANK_WEBSITE"),
											   rs.getString("BANK_MAP_LINK")));
			}
			helper.info("BankDAO > listBank status : success");
			return listBank;
		}catch (Exception e) {
			helper.info("BankDAO > listBank status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}		
	}
	
	//--Rate Company-------------------------------------------------------------------------------------------
	public Responce daoRateCompany(ReqRateCompany rateCompany) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called  : "+className+" > " + methodName);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL   pkg_service_list.ratecompany(p_session_id => ?," + 
													   " p_company_id => ?," + 
													   " p_vote       => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setString(1, rateCompany.getToken());
			cls.setString(2, rateCompany.getCompanyId());
			cls.setInt(3, rateCompany.getVote());
			cls.execute();
			
			Responce responce = helper.successResponce(null);
			
			helper.info(className+" > "+methodName+"  status : success");
			return responce;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+"  status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}
	}
	
	//--Contact Us-------------------------------------------------------------------------------------------
	public Responce daoContactUs(ReqContactUs reqContactUs) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called  : "+className+" > " + methodName);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL   pkg_service_list.contactus(p_mobile_phone => ?," + 
					"                             	   p_subject      => ?," + 
					"                             	   p_body         => ?," + 
					"                                  p_session_id   => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setString(1, reqContactUs.getCusMobilePhone());
			cls.setString(2, reqContactUs.getMessageSubject());
			cls.setString(3, reqContactUs.getMessageBody());
			cls.setString(4, reqContactUs.getToken());
			cls.execute();
			
			Responce responce = helper.successResponce(null);
			
			helper.info(className+" > "+methodName+"  status : success");
			return responce;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+"  status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}
	}

	//--List Bank-------------------------------------------------------------------------------------------
	public ArrayList<ResBestOffers> daoBestOffers(ReqBestOffers json) throws SQLException {
		helper.info("------- just called : MainPage > daoBestOffers");
		ArrayList<ResBestOffers> resBestOffers = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.bestoffers(p_type => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, json.getOfferType());
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			while (rs.next()) {
				ResBestOffers bestOffer = new ResBestOffers();
				bestOffer.setBankName(rs.getString("BANK_NAME"));
				bestOffer.setOfferName(rs.getString("OFFER_NAME"));
				bestOffer.setLeftTop(rs.getString("LEFT_TOP"));
				bestOffer.setRightTop(rs.getString("RIGHT_TOP"));
				bestOffer.setLeftButtom(rs.getString("LEFT_BUTTOM"));
				bestOffer.setRightButtom(rs.getString("RIGHT_BUTTOM"));
				bestOffer.setWebLink(rs.getString("WEB_LINK"));
				
				resBestOffers.add(bestOffer);
			}
			helper.info("MainPage > daoBestOffers status : success");
			
			return resBestOffers;
			
		}catch (Exception e) {
			helper.info("MainPage > daoBestOffers status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}		
	}	
		
}
