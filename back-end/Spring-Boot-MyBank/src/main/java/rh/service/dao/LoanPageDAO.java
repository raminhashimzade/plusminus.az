package rh.service.dao;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

import com.common.Helper;
import com.common.MultiLangValue;

import oracle.jdbc.OracleTypes;
import rh.request.forms.loan.ReqListLoanProducts;
import rh.request.forms.loan.ReqLoanOrder;
import rh.request.forms.loan.ReqLoanOrderComplete;
import rh.responce.forms.loan.ResListLoanProducts;
import rh.responce.forms.loan.ResListLoanProductsG;
import rh.responce.forms.loan.ResLoanOrder;

public class LoanPageDAO {
	
	// ----------------------------------------------------------------------------------------------------------------
	public static double calcMonthlyPayment(double loanAmount, int period, double monthlyInterestRate) {
		double monthlyPayment = loanAmount
				* monthlyInterestRate / (1 - (Math.pow(1 / (1 + monthlyInterestRate), period)));
		return monthlyPayment;
	}
	
	//-------------------------------------------------------------------------------------------
	//--DAO METHOD LIST--------------------------------------------------------------------------
	//-------------------------------------------------------------------------------------------	
	//--New Customer Order-----------------------------------------------------------------------
	public static ResLoanOrder daoNewLoanOrder(ReqLoanOrder loanRequest) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();		
		
		
		Helper helper = new Helper();
		helper.info("------- just called  : "+className+" > "+methodName);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL   ? := pkg_service_list.newcustomerrequest(p_cus_mobile_phone  	 => ?," + 
							"                                        p_cus_email         	 => ?," + 
							"                                        p_cus_first_name    	 => ?," + 
							"                                        p_cus_last_name     	 => ?," + 
							"                                        p_cus_middle_name   	 => ?," + 
							"                                        p_cus_birth_date    	 => ?," + 
							"                                        p_cus_official_income   => ?," + 
							"                                        p_cus_voen_income       => ?," + 
							"                                        p_cus_unofficial_income => ?," + 
							"                                        p_cus_income_amt        => ?," + 
							"                                        p_cus_guarantor_amt 	 => ?," + 
							"                                        p_request_type      	 => ?," +
							"                                        p_request_product_id    => ?," +
							"                                        p_request_currency   	 => ?," + 
							"                                        p_request_amt       	 => ?," + 
							"                                        p_request_period    	 => ?," +
							"                                        p_request_card_system   => ?," +
							"                                        p_request_card_product  => ?," +							
							"                                        p_bank_id           	 => ?," +
							"										 p_monthly_payment		 => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, loanRequest.getCusMobilePhone());
			cls.setString(3, loanRequest.getCusEmail());
			cls.setString(4, loanRequest.getCusFirstName());
			cls.setString(5, loanRequest.getCusLastName());
			cls.setString(6, loanRequest.getCusMiddleName());
			cls.setString(7, loanRequest.getCusBirthDate());
			cls.setString(8, String.valueOf(loanRequest.isCusOfficialIncome()));
			cls.setString(9, String.valueOf(loanRequest.isCusVoen()));
			cls.setString(10, String.valueOf(loanRequest.isCusUnOfficialIncome()));
			cls.setDouble(11, loanRequest.getCusIncomeAmt());
			cls.setDouble(12, loanRequest.getCusGuarantorAmt());
			cls.setString(13, loanRequest.getRequestType());
			cls.setString(14, loanRequest.getRequestProductId());			
			cls.setString(15, loanRequest.getRequestLoanCurencyCode());			
			cls.setDouble(16, loanRequest.getRequestLoanAmt());
			cls.setDouble(17, loanRequest.getRequestLoanPeriod());
			cls.setString(18, loanRequest.getRequestCardSystem());
			cls.setString(19, loanRequest.getRequestCardProduct());
			cls.setString(20, Arrays.toString(loanRequest.getRequestBankId()));
			cls.setDouble(21, loanRequest.getMonthlyPayment());
			cls.execute();
			
			helper.info(className+" > "+methodName+"  status : success");
			ResLoanOrder resLoanRequest = new ResLoanOrder();
			resLoanRequest.setOrderId(cls.getInt(1));
			return resLoanRequest;
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

	//--Show Order Info -------------------------------------------------------------------------
	public static void daoLoanOrderComplete(ReqLoanOrderComplete loanOrderComplete) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called  : "+className+" > "+methodName);
		
		String sql = "";
		CallableStatement cls = null;
		try {			
			sql = "{ CALL pkg_service_list.completeloanrequest(p_orderid   => ?," + 
				  "                                 		   p_status    => ?," + 
				  "                                       	   p_partnerid => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setInt(1, loanOrderComplete.getOrderId());
			cls.setInt(2, loanOrderComplete.getStatus());
			cls.setInt(3, loanOrderComplete.getPartnerId());
			cls.execute();
			
			helper.info(className+" > "+methodName+"  status : success");
		}catch (Exception e) {
			helper.info(className + " > "+methodName+"  status : error");
			helper.error(e);
			throw e;
		}finally{
			if (cls != null) {			
				cls.getConnection().close();
				cls.close();
			}						
		}
	}	
	
	//--List Loan Products-----------------------------------------------------------------------
	public static ArrayList<ResListLoanProducts> daoListLoanProduct(ReqListLoanProducts json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called : "+className+" > "+methodName);
		ArrayList<ResListLoanProducts> listLoanProducts = new ArrayList<>();
		
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.getloanlist(p_withempreference => ?," + 
														   "p_withcollateral   => ?," + 
														   "p_withgraceperiod  => ?," + 
														   "p_commissioncash   => ?," + 
														   "p_comissionloan    => ?," + 
														   "p_loanamount       => ?," + 
														   "p_loancurrency     => ?," + 
														   "p_loanperiod       => ?," +
														   "p_loanType		   => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithEmpReference()));
			cls.setString(3, helper.convertBoolToStr(json.isWithCollateral()));
			cls.setString(4, helper.convertBoolToStr(json.isWithGracePeriod()));
			cls.setString(5, helper.convertBoolToStr(json.isComissionCash()));
			cls.setString(6, helper.convertBoolToStr(json.isComissionLoan()));
			cls.setDouble(7, json.getLoanAmount());
			cls.setString(8, json.getLoanCurrency());
			cls.setDouble(9, json.getLoanPeriod());
			if (json.isMortgage())
				cls.setString(10, "IPOTEKA");
			else
				cls.setString(10, null);
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			Double minMonthlyPayment;
			Double maxMonthlyPayment;
			
			while (rs.next()) {
				
				helper.info("getLoanAmount : " + json.getLoanAmount());
				helper.info("getLoanPeriod : " + json.getLoanPeriod());
				helper.info("MIN_RATE : " + rs.getDouble("MIN_RATE"));
				helper.info("MAX_RATE : " + rs.getDouble("MAX_RATE"));

				minMonthlyPayment = calcMonthlyPayment(json.getLoanAmount(), json.getLoanPeriod(), rs.getDouble("MIN_RATE") / 1200);
				minMonthlyPayment = helper.myRound(minMonthlyPayment,2);
				minMonthlyPayment = minMonthlyPayment == 0 ? null : minMonthlyPayment;
				
				maxMonthlyPayment = calcMonthlyPayment(json.getLoanAmount(), json.getLoanPeriod(), rs.getDouble("MAX_RATE") / 1200);
				maxMonthlyPayment = helper.myRound(maxMonthlyPayment,2);
				maxMonthlyPayment = maxMonthlyPayment == 0 ? null : maxMonthlyPayment;
				
				helper.info("minMonthlyPayment : " + helper.nvl(minMonthlyPayment,""));
				helper.info("maxMonthlyPayment : " + helper.nvl(maxMonthlyPayment,""));
				
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
															 minMonthlyPayment,
															 maxMonthlyPayment,
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
	
	//--List Loan Products-------------------------------------------------------------------------------------
	public static ArrayList<ResListLoanProductsG> daoListLoanProductByBank(ReqListLoanProducts json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called : "+className+" > "+methodName);
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL ? := pkg_service_list.getloanlist(p_withempreference => ?," + 
														   "p_withcollateral   => ?," + 
														   "p_withgraceperiod  => ?," + 
														   "p_commissioncash   => ?," + 
														   "p_comissionloan    => ?," + 
														   "p_loanamount       => ?," + 
														   "p_loancurrency     => ?," + 
														   "p_loanperiod       => ?," +
														   "p_loanType		   => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithEmpReference()));
			cls.setString(3, helper.convertBoolToStr(json.isWithCollateral()));
			cls.setString(4, helper.convertBoolToStr(json.isWithGracePeriod()));
			cls.setString(5, helper.convertBoolToStr(json.isComissionCash()));
			cls.setString(6, helper.convertBoolToStr(json.isComissionLoan()));
			cls.setDouble(7, json.getLoanAmount());
			cls.setString(8, json.getLoanCurrency());
			cls.setDouble(9, json.getLoanPeriod());
			if (json.isMortgage())
				cls.setString(10, "IPOTEKA");
			else
				cls.setString(10, null);			
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			Double minMonthlyPayment;
			Double maxMonthlyPayment;
			
			ArrayList<ResListLoanProducts> listLoanProducts = new ArrayList<>();
			ArrayList<ResListLoanProductsG> listGLoanProducts = new ArrayList<>();
			
			while (rs.next()) {
				
				helper.info("getLoanAmount : " + json.getLoanAmount());
				helper.info("getLoanPeriod : " + json.getLoanPeriod());
				helper.info("MIN_RATE : " + rs.getDouble("MIN_RATE"));
				helper.info("MAX_RATE : " + rs.getDouble("MAX_RATE"));

				minMonthlyPayment = calcMonthlyPayment(json.getLoanAmount(), json.getLoanPeriod(), rs.getDouble("MIN_RATE") / 1200);
				minMonthlyPayment = helper.myRound(minMonthlyPayment,2);
				minMonthlyPayment = minMonthlyPayment == 0 ? null : minMonthlyPayment;
				
				maxMonthlyPayment = calcMonthlyPayment(json.getLoanAmount(), json.getLoanPeriod(), rs.getDouble("MAX_RATE") / 1200);
				maxMonthlyPayment = helper.myRound(maxMonthlyPayment,2);
				maxMonthlyPayment = maxMonthlyPayment == 0 ? null : maxMonthlyPayment;
				
				helper.info("minMonthlyPayment : " + helper.nvl(minMonthlyPayment,""));
				helper.info("maxMonthlyPayment : " + helper.nvl(maxMonthlyPayment,""));
				
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
															 minMonthlyPayment,
															 maxMonthlyPayment,
															 rs.getString("BANK_WEBSITE"))
						);
				
				if (rs.getString("LEADID") == null) {
					helper.info(rs.getString("BANK_NAME") + " LEADID is null");					
					helper.info("listDepositProducts.size = " + listLoanProducts.size());
					
					listGLoanProducts.add(new ResListLoanProductsG(rs.getInt("BANK_ID"), 
																   rs.getString("BANK_NAME"), 
																   listLoanProducts));
					listLoanProducts = new ArrayList<>();
				}				
			}
			helper.info(className+" > "+methodName+" status : success");
			return listGLoanProducts;
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
