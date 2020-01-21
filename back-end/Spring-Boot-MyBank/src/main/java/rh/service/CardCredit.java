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

import rh.request.forms.card.ReqListCardCredit;
import rh.responce.forms.card.ResListCardCreditG;
import rh.responce.forms.loan.ResListLoanPeriod;
import rh.service.dao.CardDAO;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class CardCredit {

	@Autowired
	private Helper helper;
	
	//Get Bank Credit Card Product List Group by Bank
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listGCardCreditProduct")
	public Responce listGCardCreditProduct(@RequestBody ReqListCardCredit json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListCardCreditG> rs = CardDAO.daoListCardCreditProductByBank(json);
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
	
	//Get Bank Credit Card Product Periods
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listCardCreditPeriod")
	public Responce listCardCreditPeriod(@RequestBody Request json, HttpServletRequest request) throws SQLException {
		
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
