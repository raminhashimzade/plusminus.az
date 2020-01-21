package rh.service;

import java.sql.SQLException;
import java.util.ArrayList;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.common.Constants;
import com.common.Helper;
import com.common.Responce;
import com.jwt.JWTtool;

import rh.request.forms.bank.ReqBankChangePsw;
import rh.request.forms.bank.ReqBankLogin;
import rh.request.forms.bank.ReqBankOrderCalled;
import rh.request.forms.bank.ReqBankOrderList;
import rh.request.forms.bank.ReqBankOrderShowInfo;
import rh.request.forms.bank.ReqLoanOrderCheckLink;
import rh.request.forms.bank.ReqOrderStats;
import rh.responce.forms.bank.ResBankLogin;
import rh.responce.forms.bank.ResBankOrderList;
import rh.responce.forms.bank.ResOrderStats;
import rh.responce.forms.loan.ResLoanOrderCheckLink;
import rh.responce.forms.loan.ResLoanOrderShowInfo;
import rh.service.dao.BankPageDAO;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class BankPage {

	@Autowired
	private Helper helper;
	
	// Check Authorisation
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/checkBankLogin")
	public Responce checkBankLogin(@RequestBody ReqBankLogin json, HttpServletRequest request) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;
		ResBankLogin resBankLogin = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			resBankLogin = BankPageDAO.daoCheckBankLogin(json);
			if (resBankLogin.getToken() != null) {
				res = helper.successResponce(resBankLogin);
				helper.partnerLog("BANK", resBankLogin.getBankId(), json.getToken(), resBankLogin.getToken(), "LOGON",
						json.toString());
			} else
				res = helper.errorResponce(Constants.errorAccessDenied);

			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	// Change Password
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/changeBankLoginPassword")
	public Responce changeBankLoginPassword(@RequestBody ReqBankChangePsw json, HttpServletRequest request) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			json.setBankID(Integer.parseInt(bankId));			
			res = BankPageDAO.daoChangePassword(json);

			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	

	// Customer Order List For Banks
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/getOrderList")
	public Responce getOrderList(@RequestBody ReqBankOrderList json, HttpServletRequest request) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			helper.info("jwtId = " + bankId);

			ArrayList<ResBankOrderList> rs = BankPageDAO.daoListBankLoanOrders(Integer.parseInt(bankId), json.isCalled(), json.isCancelled());
			res = helper.successResponce(rs);

			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		} catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Get - Order Stats
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/getOrderStats")
	public Responce getOrderStats(@RequestBody ReqOrderStats json, HttpServletRequest request) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			helper.info("jwtId = " + bankId);

			ArrayList<ResOrderStats> rs = BankPageDAO.daoOrderStats(Integer.parseInt(bankId));
			res = helper.successResponce(rs);

			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		} catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Post - Bank Interested in Order
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanOrderShowInfo")
	public Responce postLoanOrderShowInfo(@RequestBody ReqBankOrderShowInfo json, HttpServletRequest request)
			throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			helper.info("bankId = " + bankId);

			helper.partnerLog("BANK", Integer.valueOf(bankId), json.getToken(), json.getBankToken(), "ORDERINFO",
					json.toString());

			if (bankId.equals(String.valueOf(json.getBankID()))) {
				ResLoanOrderShowInfo resLoanOrderCheckLink = BankPageDAO.daoLoanOrderShowInfo(json);
				res = helper.successResponce(resLoanOrderCheckLink);
			} else {
				res = helper.errorResponce(Constants.errorAccessDenied);
			}

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));

			return res;
		} catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Post - Check Link For Order Data
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanOrderCheckLink")
	public Responce postLoanOrderCheckLink(@RequestBody ReqLoanOrderCheckLink json, HttpServletRequest request)
			throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			helper.partnerLog("BANK", json.getBankID(), json.getToken(), json.getBankToken(), "ORDERINFO",
					json.toString());

			ResLoanOrderCheckLink resLoanOrderCheckLink = BankPageDAO.daoLoanOrderCheckLink(json);
			res = helper.successResponce(resLoanOrderCheckLink);

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));

			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Post - Bank Called
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanOrderCalled")
	public Responce postLoanOrderCalled(@RequestBody ReqBankOrderCalled json, HttpServletRequest request)
			throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			helper.info("jwtId = " + bankId);

			helper.partnerLog("BANK", Integer.valueOf(bankId), json.getToken(), json.getBankToken(), "ORDERCALL",
					json.toString());

			if (bankId.equals(String.valueOf(json.getBankID()))) {
				res = BankPageDAO.daoLoanOrderCalled(json);
			} else {
				res = helper.errorResponce(Constants.errorAccessDenied);
			}

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));

			return res;
		} catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	// Post - Bank Called
	// ---------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/postLoanOrderCancel")
	public Responce postLoanOrderCancel(@RequestBody ReqBankOrderCalled json, HttpServletRequest request)
			throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		helper.info("------- just called service : " + className + " > " + methodName);
		Responce res = null;

		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			String bankId = JWTtool.verifyToken(json.getBankToken(), Constants.jwtTokenIssuer);
			helper.info("jwtId = " + bankId);

			helper.partnerLog("BANK", Integer.valueOf(bankId), json.getToken(), json.getBankToken(), "ORDERCANCEL",
					json.toString());

			json.setBankNote("CANCEL");
			if (bankId.equals(String.valueOf(json.getBankID()))) {
				res = BankPageDAO.daoLoanOrderCanceled(json);
			} else {
				res = helper.errorResponce(Constants.errorAccessDenied);
			}

			helper.info(className + " > " + methodName + " status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));

			return res;
		} catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

}
