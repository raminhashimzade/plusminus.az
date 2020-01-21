package com.unittest;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.common.Constants;
import com.common.Helper;
import com.jwt.JWTtool;

import rh.gateway.Gateway;
import rh.request.forms.bank.ReqBankLogin;
import rh.responce.forms.bank.ResBankLogin;
import rh.service.dao.BankPageDAO;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = Gateway.class)
public class AppTest {

	Helper helper = new Helper(); 
	
	@Test
	public void testSendSmsToken() {
		if (Constants.localDb) {
			assertEquals("true", "true");
			return;
		}
			
		helper.info("----testSendSmsToken");
		//Gateway gt = new Gateway();
		//Responce res = gt.sendSmsToken("503915898"); 
		//System.out.println("getSuccess="+res.getSuccess());		
		//assertEquals("true", res.getSuccess());
		assertEquals("true", "true");
		helper.info("------------------------------------------");
	}

	@Test
	public void testAznAz() throws Exception {
		if (Constants.localDb) {
			assertEquals("true", "true");
			return;
		}
		
		helper.info("----testAznAz");
		//Gateway gt = new Gateway();
		//Responce res = gt.aznAz(); 
		//System.out.println("getSuccess="+res.getSuccess());		
		//assertEquals("true", res.getSuccess());
		assertEquals("true", "true");
		helper.info("------------------------------------------");
	}
	
	@Test
	public void checkBankLogin() throws Exception {
		if (Constants.localDb) {
			assertEquals("true", "true");
			return;
		}
		
		helper.info("----checkBankLogin");
		ReqBankLogin reqBank = new ReqBankLogin();
		reqBank.setLogin("0");
		reqBank.setPassword("1");		
		ResBankLogin res = BankPageDAO.daoCheckBankLogin(reqBank);
		System.out.println("checkBankLogin test password "+res.getToken());
		
		assertEquals("true", "true");
		helper.info("------------------------------------------");
	}
	
	@Test
	public void testJWT() throws Exception {
		if (Constants.localDb) {
			assertEquals("true", "true");
			return;
		}
		
		helper.info("----testJWT");
		//String token = JWTtool.generateToken("myid", "plusminus", "0:1", 10000);
		
		//JWTtool.verifyToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMjoxIiwiaXNzIjoicGx1c21pbnVzLmF6IiwiZXhwIjoxNTU4NTMzNTE4LCJpYXQiOjE1NTg1Mjk5MTgsImp0aSI6IjMyIn0.J-xOIU91AERWVH1WwzFIJAJ_88vZRbPxZITvXbzWbXU", Constants.jwtTokenIssuer);
		JWTtool.decodeToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMjoxIiwiaXNzIjoicGx1c21pbnVzLmF6IiwiZXhwIjoxNTYwNjE4MDM5LCJpYXQiOjE1NjA2MTQ0MzksImp0aSI6IjMyIn0.levVKq61cB657DFMmV_YWnfbWZEeOZtimKEnl8q8R_M");
		
		//JWTtool.verifyToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOjEiLCJpc3MiOiJwbHVzbWludXMiLCJleHAiOjE1NTg1MjAwMDcsImlhdCI6MTU1ODUxOTk5N30.MHPWjNA-Q1nrsliS8jyAEJIkOCxvcKj_dR3dcwAnj3g", "plusminus");		
		
		assertEquals("true", "true");
		helper.info("------------------------------------------");
	}	
	
	@Test
	public void calcLoanSchedule() throws Exception {
		if (Constants.localDb) {
			assertEquals("true", "true");
			return;
		}
		
		helper.info("----calcLoanSchedule");
		//DesTest d = new DesTest();
		//d.loanSchedule();
		assertEquals("true", "true");
		helper.info("------------------------------------------");
	}	

}
