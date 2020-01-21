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
import com.common.Responce;

import rh.request.forms.card.ReqCardPeriod;
import rh.request.forms.card.ReqListCardDebet;
import rh.responce.forms.card.ResCardPeriod;
import rh.responce.forms.card.ResListCardDebetG;
import rh.service.dao.CardDAO;

@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class CardDebet {
	
	@Autowired
	private Helper helper;	
	
	//Get Bank Credit Card Product List Group by Bank
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listGCardDebetProduct")
	public Responce listGCardDebetProduct(@RequestBody ReqListCardDebet json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResListCardDebetG> rs = CardDAO.daoListCardDebetProductByBank(json);
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

	//Get Bank Card Period
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/listCardPeriod")
	public Responce listCardPeriod(@RequestBody ReqCardPeriod json, HttpServletRequest request) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();	
		
		helper.info("------- just called service : "+className+" > "+methodName);
		Responce res = null;
		try {
			helper.traceLog(json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));
			ArrayList<ResCardPeriod> rs = new ArrayList<>();
			rs.add(new ResCardPeriod(12, "1 il"));
			rs.add(new ResCardPeriod(24, "2 il"));
			rs.add(new ResCardPeriod(36, "3 il"));
			//rs.add(new ResCardPeriod(48, "4 il"));
			//rs.add(new ResCardPeriod(60, "5 il"));			
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
}
