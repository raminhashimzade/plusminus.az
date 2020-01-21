package rh.service;

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

import rh.gateway.Gateway;
import rh.request.forms.loan.ReqListLoanProducts;
import rh.request.forms.loan.ReqLoanOrder;
import rh.request.forms.loan.ReqLoanOrderComplete;
import rh.request.forms.loan.ReqLoanSchedule;
import rh.responce.forms.loan.ResListLoanPeriod;
import rh.responce.forms.loan.ResListLoanProducts;
import rh.responce.forms.loan.ResListLoanProductsG;
import rh.responce.forms.loan.ResLoanOrder;
import rh.responce.forms.loan.ResLoanSchedule;
import rh.service.dao.LoanPageDAO;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class LoanPage {

	@Autowired
	private Helper helper;
	
	@Autowired
	private Gateway gateway;	

	// Post - Customer Request
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanOrder")
	public Responce postLoanOrder(@RequestBody ReqLoanOrder json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;

		json.setRequestType("LOAN");
		json.setRequestProductId("LN_ID");
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			ResLoanOrder resLoanRequest = LoanPageDAO.daoNewLoanOrder(json);
			res = helper.successResponce(resLoanRequest);

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			
			Responce smsRes = gateway.sendSms(json.getCusMobilePhone(), Constants.smsApproveText, "APPROVE", "");
			helper.info(className+" > "+methodName+" send Approve SMS : " + smsRes.toString());			
			helper.traceLog(json.getToken(), methodName, "sendApprove SMS", smsRes.toString(), helper.getIpAddress(request));
			

			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(),
					helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Post - Calculate Loan Schedule
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanSchedule")
	public Responce postLoanSchedule(@RequestBody ReqLoanSchedule json, HttpServletRequest request)
			throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(),
					helper.getIpAddress(request));

			double loanAmount = json.getLoanAmount();
			int period = json.getLoanPeriod();
			double annualInterestRate = json.getLoanInt();
			double monthlyInterestRate = annualInterestRate / 1200;
			double monthlyPayment = LoanPageDAO.calcMonthlyPayment(loanAmount, period, monthlyInterestRate);
			double balance = loanAmount;
			double interest;
			double principal;
			double totalPayed = monthlyPayment * period;
		    
		    
			ArrayList<ResLoanSchedule> resLoanSchedule = new ArrayList<>();
			for (int i = 1; i <= period; i++) {
				interest = monthlyInterestRate * balance * 100 / 100.0;
				principal = monthlyPayment - interest * 100 / 100.0;
				balance = balance - principal * 100 / 100.0;
				
				resLoanSchedule.add(new ResLoanSchedule(i, helper.myRound(interest,2),
														   helper.myRound(principal,2), 
														   helper.myRound(balance,2),
														   helper.myRound(monthlyPayment,2),
														   helper.myRound(totalPayed,2)
														   )
						);
			}

			res = helper.successResponce(resLoanSchedule);

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(),
					helper.getIpAddress(request));

			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(),
					helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}

	}
	
	// Post - Customer Complete Order
	// ---------------------------------------------------------------------------
	// TODO generate linkhash Code for postLoanOrderComplete : orderId + password then re check - heleki qalsin sonra baxaciq
	@PostMapping("/" + Constants.projectName + "/postLoanOrderComplete")
	public Responce postLoanOrderComplete(@RequestBody ReqLoanOrderComplete json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(),helper.getIpAddress(request));

			LoanPageDAO.daoLoanOrderComplete(json);
			res = helper.successResponce(null);

			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));

			return res;
		} catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	
	
	//Get Bank Loan Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listLoanProduct")
	public Responce listLoanProduct(@RequestBody ReqListLoanProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListLoanProducts> rs = LoanPageDAO.daoListLoanProduct(json);
			res = helper.successResponce(rs);
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
	
	//Get Bank Loan Product List Group by Bank
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listGLoanProduct")
	public Responce listGLoanProduct(@RequestBody ReqListLoanProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListLoanProductsG> rs = LoanPageDAO.daoListLoanProductByBank(json);
			res = helper.successResponce(rs);
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
	
	//Get Bank Loan Product Periods
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listLoanPeriod")
	public Responce listLoanPeriod(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > " + methodName);
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
			rs.add(new ResListLoanPeriod(120, "10 İL"));
			rs.add(new ResListLoanPeriod(180, "15 İL"));
			rs.add(new ResListLoanPeriod(300, "25 İL"));			
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
}