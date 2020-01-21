package rh.service;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.common.Constants;
import com.common.Helper;
import com.common.MultiLangValue;
import com.common.Responce;

import oracle.jdbc.OracleTypes;
import rh.request.forms.ReqCompare;
import rh.request.forms.deposit.ReqCompareDeposit;
import rh.responce.forms.card.ResListCardCredit;
import rh.responce.forms.card.ResListCardDebet;
import rh.responce.forms.deposit.ResListDepositProducts;
import rh.responce.forms.loan.ResListLoanProducts;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class ComparePage {
	
	@Autowired
	private Helper helper;
	
	//Compare Bank Loan Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/compareLoanProducts")
	public Responce compareLoanProducts(@RequestBody ReqCompare json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			//---LOAN COMPARE
			if (json.getProdType().equals("loan")) {
				ArrayList<ResListLoanProducts> rs = daoLoanProduct(json);
				res = helper.successResponce(rs);
				helper.info(className + " > "+methodName+" status : success");
				helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			}
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Compare Bank Deposit Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/compareDepositProducts")
	public Responce compareDepositProducts(@RequestBody ReqCompareDeposit json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListDepositProducts> rs = daoDepositProduct(json);
			res = helper.successResponce(rs);
			helper.info(className + " > "+methodName+" status : success");
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
	
	//Compare Bank Deposit Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/compareCreditCards")
	public Responce compareCreditCards(@RequestBody ReqCompare json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListCardCredit> rs = daoCardCreditProduct(json);
			res = helper.successResponce(rs);
			helper.info(className + " > "+methodName+" status : success");
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
	
	//Compare Bank Deposit Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/compareDebetCards")
	public Responce compareDebetCards(@RequestBody ReqCompare json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListCardDebet> rs = daoCardDebetProduct(json);
			res = helper.successResponce(rs);
			helper.info(className + " > "+methodName+" status : success");
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
	
	//TODO extract methods to DAO class
	//--Compare Loan Products----------------------------------------------------------------------------------
	public ArrayList<ResListLoanProducts> daoLoanProduct(ReqCompare json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : "+className+" > "+methodName);
		
		helper.info("Arrays.toString(json.getProdId()) : " + Arrays.toString(json.getProdId()));
		ArrayList<ResListLoanProducts> listLoanProducts = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		
		try {			
			sql = "{ CALL ? := pkg_service_list.compareloanlist(p_prodids => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, Arrays.toString(json.getProdId()));
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			
			while (rs.next()) {
				listLoanProducts.add(new ResListLoanProducts(rs.getInt("LN_ID"),
															 rs.getInt("BANK_ID"),
															 rs.getString("BANK_NAME"),
															 new MultiLangValue(helper.nvl(rs.getString("AZ_LOAN_NAME"),""),
																	 helper.nvl(rs.getString("RU_LOAN_NAME"),""),
																	 helper.nvl(rs.getString("EN_LOAN_NAME"),"")
																	 ),
															 rs.getString("CURRENCY_CODE"),
															 rs.getInt("PRIORITY"),
															 rs.getString("WITH_EMP_REFERENCE"),															 
															 rs.getString("WITH_COLLATERAL"),
															 rs.getString("WITH_GRACE_PERIOD"),
															 rs.getString("AUDITORIUM"),
															 rs.getDouble("COMISSION_CASH"),
															 rs.getDouble("COMISSION_LOAN"),
															 rs.getDouble("MIN_AGE"),
															 rs.getDouble("MAX_AGE"),
															 rs.getDouble("MIN_AMOUNT"),
															 rs.getDouble("MAX_AMOUNT"),
															 rs.getDouble("MIN_PERIOD"),
															 rs.getDouble("MAX_PERIOD"),
															 rs.getDouble("MIN_RATE"),
															 rs.getDouble("MAX_RATE"),
															 rs.getDouble("MIN_EFFECTIVE_RATE"),
															 rs.getDouble("MAX_EFFECTIVE_RATE"),
															 rs.getString("INSURANCE"),
															 rs.getDouble("MIN_SALARY"),
															 new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"),""),
																	 helper.nvl(rs.getString("RU_DESC_NAME"),""),
																	 helper.nvl(rs.getString("EN_DESC_NAME"),"")
																	 ),
															 new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"),""),
																	 helper.nvl(rs.getString("RU_DESCPD_NAME"),""),
																	 helper.nvl(rs.getString("EN_DESCPD_NAME"),"")
																	 ),
															 new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"),""),
																	 helper.nvl(rs.getString("RU_DESCDOC_NAME"),""),
																	 helper.nvl(rs.getString("EN_DESCDOC_NAME"),"")
																	 ),
															 rs.getString("ANUNITET"),
															 null,
															 null,
															 rs.getString("BANK_WEBSITE"))
						);
			}
			helper.info(className+" > "+methodName+" status : success");
			return listLoanProducts;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}		
	}

	//--Compare Deposit Products----------------------------------------------------------------------------------
	public ArrayList<ResListDepositProducts> daoDepositProduct(ReqCompareDeposit json) throws SQLException {		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : "+className+" > " + methodName);
		
		helper.info("Arrays.toString(json.getProdId()) : " + Arrays.toString(json.getProdId()));
		ArrayList<ResListDepositProducts> listDepositProducts = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		
		try {			
			sql = "{ CALL ? := pkg_service_list.CompareDepositList(p_prodids => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, Arrays.toString(json.getProdId()));
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			Double income = null;
			
			while (rs.next()) {
				
				income = helper.myRound(json.getDepositAmount()*rs.getDouble("MIN_RATE")/100/12*json.getDepositPeriod(),2);
				
				listDepositProducts.add(new ResListDepositProducts(rs.getInt("DP_ID"),
																   rs.getInt("BANK_ID"),
																   rs.getString("BANK_NAME"),
																   new MultiLangValue(helper.nvl(rs.getString("AZ_DEPOSIT_NAME"),""),
																				      helper.nvl(rs.getString("RU_DEPOSIT_NAME"),""),
																				      helper.nvl(rs.getString("EN_DEPOSIT_NAME"),"")
																			 		 ),
																   rs.getString("CURRENCY_CODE"),
																   rs.getInt("PRIORITY"),
																   rs.getDouble("MIN_AMOUNT"),															 
																   rs.getDouble("MAX_AMOUNT"),
																   rs.getDouble("MIN_RATE"),
																   rs.getDouble("MAX_RATE"),
																   rs.getDouble("MIN_PERIOD"),
																   rs.getDouble("MAX_PERIOD"),
																   rs.getString("LIQ_TYPE"),
																   rs.getString("WITH_CAPITALISATION"),
																   rs.getString("WITH_WITHDRAW"),
																   rs.getString("WITH_REFILL"),
																   rs.getString("WITH_AUTO_PROLONGATION"),															 
																   new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"),""),
																					  helper.nvl(rs.getString("RU_DESC_NAME"),""),
																					  helper.nvl(rs.getString("EN_DESC_NAME"),"")
																					  ),
																   new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_PRESENT_NAME"),""),
																					  helper.nvl(rs.getString("RU_DESC_PRESENT_NAME"),""),
																					  helper.nvl(rs.getString("EN_DESC_PRESENT_NAME"),"")
																					  ),
																   rs.getString("BANK_WEBSITE"),
																   income)
						);
			}
			helper.info(className + " > "+methodName+" status : success");
			
			return listDepositProducts;
		}catch (Exception e) {
			helper.info(className + " > "+methodName+" status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}		
	}
	
	//--Compare Credit Card Products----------------------------------------------------------------------------------
	public ArrayList<ResListCardCredit> daoCardCreditProduct(ReqCompare json) throws SQLException {		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : "+className+" > " + methodName);
		
		helper.info("Arrays.toString(json.getProdId()) : " + Arrays.toString(json.getProdId()));
		ArrayList<ResListCardCredit> resListCardCreditArray = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		
		try {			
			sql = "{ CALL ? := pkg_service_list.comparecardlist(p_prodids => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, Arrays.toString(json.getProdId()));
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			
			while (rs.next()) {
				
				ResListCardCredit resListCardCredit = new ResListCardCredit();
				resListCardCredit.setCdId(rs.getInt("CD_ID"));
				resListCardCredit.setBankId(rs.getInt("BANK_ID"));
				resListCardCredit.setBankName(rs.getString("BANK_NAME"));
				resListCardCredit.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), 
						helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				resListCardCredit.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				resListCardCredit.setCardSystem(rs.getString("CARD_SYSTEM"));
				resListCardCredit.setCardProduct(rs.getString("CARD_PRODUCT"));
				resListCardCredit.setCardType(rs.getString("CARD_TYPE"));
				resListCardCredit.setCardPeriod(rs.getString("CARD_PERIOD"));
				resListCardCredit.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				resListCardCredit.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				resListCardCredit.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				resListCardCredit.setWithEmpReference(helper.strToBool(rs.getString("WITH_EMP_REFERENCE")));
				resListCardCredit.setWithCollateral(helper.strToBool(rs.getString("WITH_COLLATERAL")));
				resListCardCredit.setWithGracePeriod(rs.getInt("WITH_GRACE_PERIOD"));
				resListCardCredit.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				resListCardCredit.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				resListCardCredit.setAuditorium(rs.getString("AUDITORIUM"));
				resListCardCredit.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				resListCardCredit.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				resListCardCredit.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				resListCardCredit.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				resListCardCredit.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				resListCardCredit.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				resListCardCredit.setComissionLoan(rs.getDouble("COMISSION_LOAN"));
				resListCardCredit.setMinRate(rs.getDouble("MIN_RATE"));
				resListCardCredit.setMaxRate(rs.getDouble("MAX_RATE"));
				resListCardCredit.setMinAmount(rs.getDouble("MIN_AMOUNT"));
				resListCardCredit.setMaxAmount(rs.getDouble("MAX_AMOUNT"));
				resListCardCredit.setMinPeriod(rs.getDouble("MIN_PERIOD"));
				resListCardCredit.setMaxPeriod(rs.getDouble("MAX_PERIOD"));
				resListCardCredit.setMinEffectiveRate(rs.getDouble("MIN_EFFECTIVE_RATE"));
				resListCardCredit.setMaxEffectiveRate(rs.getDouble("MAX_EFFECTIVE_RATE"));
				resListCardCredit.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), 
						helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				resListCardCredit.setDescriptionPD(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCPD_NAME"), "")));
				resListCardCredit.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				resListCardCredit.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				
				resListCardCreditArray.add(resListCardCredit);	
			}
			helper.info(className + " > "+methodName+" status : success");
			
			return resListCardCreditArray;
		}catch (Exception e) {
			helper.info(className + " > "+methodName+" status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}		
	}
	
	//--Compare Credit Card Products----------------------------------------------------------------------------------
	public ArrayList<ResListCardDebet> daoCardDebetProduct(ReqCompare json) throws SQLException {		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : "+className+" > " + methodName);
		
		helper.info("Arrays.toString(json.getProdId()) : " + Arrays.toString(json.getProdId()));
		ArrayList<ResListCardDebet> resListCardDebetArray = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		
		try {			
			sql = "{ CALL ? := pkg_service_list.comparecardlist(p_prodids => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, Arrays.toString(json.getProdId()));
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			
			while (rs.next()) {
				
				ResListCardDebet resListCardDebet = new ResListCardDebet();
				resListCardDebet.setCdID(rs.getInt("CD_ID"));
				resListCardDebet.setBankID(rs.getInt("BANK_ID"));
				resListCardDebet.setBankName(rs.getString("BANK_NAME"));
				resListCardDebet.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), 
						helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				resListCardDebet.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				resListCardDebet.setCardSystem(rs.getString("CARD_SYSTEM"));
				resListCardDebet.setCardProduct(rs.getString("CARD_PRODUCT"));
				resListCardDebet.setCardType(rs.getString("CARD_TYPE"));
				resListCardDebet.setCardPeriod(rs.getString("CARD_PERIOD"));
				resListCardDebet.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				resListCardDebet.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				resListCardDebet.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				resListCardDebet.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				resListCardDebet.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				resListCardDebet.setAuditorium(rs.getString("AUDITORIUM"));
				resListCardDebet.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				resListCardDebet.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				resListCardDebet.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				resListCardDebet.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				resListCardDebet.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				resListCardDebet.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				resListCardDebet.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), 
						helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				resListCardDebet.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				resListCardDebet.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				
				resListCardDebetArray.add(resListCardDebet);	
			}
			helper.info(className + " > "+methodName+" status : success");
			
			return resListCardDebetArray;
		}catch (Exception e) {
			helper.info(className + " > "+methodName+" status : error");
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
