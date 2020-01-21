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

import rh.request.forms.admin.ReqCardCreditProducts;
import rh.request.forms.admin.ReqCardDebetProducts;
import rh.request.forms.admin.ReqCheckAdminLogin;
import rh.request.forms.admin.ReqDepositProducts;
import rh.request.forms.admin.ReqLoanProducts;
import rh.request.forms.admin.ReqPostFile;
import rh.request.forms.admin.ReqRemoveFile;
import rh.request.forms.admin.enumCommandTypes;
import rh.responce.forms.admin.ResCardCreditProducts;
import rh.responce.forms.admin.ResCardDebetProducts;
import rh.responce.forms.admin.ResCheckAdminLogin;
import rh.responce.forms.admin.ResDepositProducts;
import rh.responce.forms.admin.ResLoanProducts;
import rh.responce.forms.admin.ResPostFile;
import rh.service.dao.AdminPageDAO;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class AdminPage {
	
	@Autowired
	private Helper helper;
	
	//Check Authorisation
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/checkAdmin")
	public Responce checkAdmin(@RequestBody ReqCheckAdminLogin json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+ className +" > " + methodName);
		Responce res = null;
		ResCheckAdminLogin resCheckAdminLogin = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			resCheckAdminLogin = AdminPageDAO.daoCheckAdmin(json);
			if (resCheckAdminLogin.getToken() != null)
				res = helper.successResponce(resCheckAdminLogin);
			else
				res = helper.errorResponce(Constants.errorAccessDenied);
			
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Get Bank Loan Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/loanProduct")
	public Responce loanProduct(@RequestBody ReqLoanProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);		
			
			ArrayList<ResLoanProducts> rs = null;
			if (json.getCommandType() == enumCommandTypes.SELECT)
				rs = AdminPageDAO.daoSelectLoanProduct(json);
			else
				rs = AdminPageDAO.daoUpdateLoanProduct(json);
			res = helper.successResponce(rs);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Get Bank Deposit Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/depositProduct")
	public Responce depositProduct(@RequestBody ReqDepositProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);
			
			ArrayList<ResDepositProducts> rs = null;
			if (json.getCommandType() == enumCommandTypes.SELECT)
				rs = AdminPageDAO.daoSelectDepositProduct(json);
			else
				rs = AdminPageDAO.daoUpdateDepositProduct(json);
			res = helper.successResponce(rs);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	//Get Bank Credit Card Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/cardCreditProduct")
	public Responce cardCreditProduct(@RequestBody ReqCardCreditProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);
			
			ArrayList<ResCardCreditProducts> rs = null;
			if (json.getCommandType() == enumCommandTypes.SELECT)
				rs = AdminPageDAO.daoSelectCardCreditProduct(json);
			else
				rs = AdminPageDAO.daoUpdateCardCreditProduct(json);
			res = helper.successResponce(rs);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	//Get Bank Debet Card Product List
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/cardDebetProduct")
	public Responce cardDebetProduct(@RequestBody ReqCardDebetProducts json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);
			
			ArrayList<ResCardDebetProducts> rs = null;
			if (json.getCommandType() == enumCommandTypes.SELECT)
				rs = AdminPageDAO.daoSelectCardDebetProduct(json);
			else
				rs = AdminPageDAO.daoUpdateCardDebetProduct(json);
			res = helper.successResponce(rs);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}
	
	//Post File
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/postFile")
	public Responce postFile(@RequestBody ReqPostFile json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);
			
			ResPostFile rs = AdminPageDAO.daoPostFile(json);
			res = helper.successResponce(rs);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", rs.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}

	//Delete File
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/crud/removeFile")
	public Responce removeFile(@RequestBody ReqRemoveFile json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			
			String adminId = JWTtool.verifyToken(json.getAdminToken(), Constants.jwtTokenIssuer);
			helper.info("adminId = " + adminId);
			
			AdminPageDAO.daoRemoveFile(json);
			res = helper.successResponce(null);
			helper.info(className+" > "+methodName+" status : success");
			helper.traceLog(json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			return res;
		}catch (TokenExpiredException e) {
			res = helper.errorResponce(Constants.errorAccessDenied);
			return res;
		}catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(json.getToken(), methodName, "outError", e.toString(), helper.getIpAddress(request));
			res = helper.errorResponce(e);
			return res;
		}
	}	
}
