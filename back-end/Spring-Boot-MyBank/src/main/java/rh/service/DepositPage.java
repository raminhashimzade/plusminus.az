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
import com.common.MultiLangValue;
import com.common.Request;
import com.common.Responce;

import oracle.jdbc.OracleTypes;
import rh.request.forms.deposit.ReqListDepositProducts;
import rh.responce.forms.deposit.ResListDepositProducts;
import rh.responce.forms.deposit.ResListDepositProductsG;
import rh.responce.forms.loan.ResListLoanPeriod;


@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class DepositPage {
	
	@Autowired
	private Helper helper;

	//Get Bank Deposit Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listDepositProduct")
	public Responce listDepositProduct(@RequestBody ReqListDepositProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListDepositProducts> rs = daoListDepositProduct(json);
			res = helper.successResponce(rs);
			helper.info(className + " > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Get Bank Deposit Product List Group by Bank
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listGDepositProduct")
	public Responce listGDepositProduct(@RequestBody ReqListDepositProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListDepositProductsG> rs = daoListDepositProductByBank(json);
			res = helper.successResponce(rs);
			helper.info(className + " > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	
	
	//Get Bank Loan Product Periods
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listDepositPeriod")
	public Responce listDepositPeriod(@RequestBody Request json, HttpServletRequest request) throws SQLException {		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListLoanPeriod> rs = new ArrayList<>();
			rs.add(new ResListLoanPeriod(6, "6AY"));
			rs.add(new ResListLoanPeriod(12, "12AY"));
			rs.add(new ResListLoanPeriod(18, "1 İL 6 AY"));
			rs.add(new ResListLoanPeriod(24, "2 İL"));
			rs.add(new ResListLoanPeriod(36, "3 İL"));
			rs.add(new ResListLoanPeriod(48, "4 İL"));
			rs.add(new ResListLoanPeriod(60, "5 İL"));
			res = helper.successResponce(rs);
			helper.info(className + " > " + methodName +" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info(className + " > "+ methodName +" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	//-------------------------------------------------------------------------------------------
	//--DAO METHOD LIST--------------------------------------------------------------------------
	//-------------------------------------------------------------------------------------------	
	//--List Deposit Products--------------------------------------------------------------------
	public ArrayList<ResListDepositProducts> daoListDepositProduct(ReqListDepositProducts json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : " + className + " > " + methodName);
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.getDepositList(p_withCapitalisation => ?," + 
															  "p_withWithdraw   	=> ?," + 
															  "p_withRefill  		=> ?," + 
															  "p_withAutoProloing   => ?," + 
															  "p_depositAmount    	=> ?," + 
															  "p_depositCurrency    => ?," + 
															  "p_depositPeriod     	=> ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithCapitalisation()));
			cls.setString(3, helper.convertBoolToStr(json.isWithWithdraw()));
			cls.setString(4, helper.convertBoolToStr(json.isWithRefill()));
			cls.setString(5, helper.convertBoolToStr(json.isWithAutoProloing()));			
			cls.setDouble(6, json.getDepositAmount());
			cls.setString(7, json.getDepositCurrency());
			cls.setDouble(8, json.getDepositPeriod());
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			Double income = null;
			ArrayList<ResListDepositProducts> listDepositProducts = new ArrayList<>();
			
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
			helper.info(className+" > "+methodName+" status : success");
			return listDepositProducts;
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
	
	//--List Deposit Products Group by BANK---------------------------------------------------------------------
	public ArrayList<ResListDepositProductsG> daoListDepositProductByBank(ReqListDepositProducts json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called : " + className + " > " + methodName);
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.getDepositList(p_withCapitalisation => ?," + 
															  "p_withWithdraw   	=> ?," + 
															  "p_withRefill  		=> ?," + 
															  "p_withAutoProloing   => ?," + 
															  "p_depositAmount    	=> ?," + 
															  "p_depositCurrency    => ?," + 
															  "p_depositPeriod     	=> ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithCapitalisation()));
			cls.setString(3, helper.convertBoolToStr(json.isWithWithdraw()));
			cls.setString(4, helper.convertBoolToStr(json.isWithRefill()));
			cls.setString(5, helper.convertBoolToStr(json.isWithAutoProloing()));			
			cls.setDouble(6, json.getDepositAmount());
			cls.setString(7, json.getDepositCurrency());
			cls.setDouble(8, json.getDepositPeriod());
			cls.execute();
			rs = (ResultSet)cls.getObject(1);
			
			Double income = null;
			
			ArrayList<ResListDepositProducts> listDepositProducts = new ArrayList<>();
			ArrayList<ResListDepositProductsG> listGDepositProducts = new ArrayList<>();
			
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
				
				if (rs.getString("LEADID") == null) {
					helper.info(rs.getString("BANK_NAME") + " LEADID is null");					
					helper.info("listDepositProducts.size = " + listDepositProducts.size());
					
					listGDepositProducts.add(new ResListDepositProductsG(rs.getInt("BANK_ID"), 
																		 rs.getString("BANK_NAME"), 
																		 listDepositProducts)
							);
					listDepositProducts = new ArrayList<>();
				}				
			}
			helper.info(className+" > "+methodName+" status : success");
			return listGDepositProducts;
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

}
