package rh.service.dao;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.common.Constants;
import com.common.Helper;
import com.common.Responce;
import com.jwt.JWTtool;

import oracle.jdbc.OracleTypes;
import rh.request.forms.bank.ReqBankChangePsw;
import rh.request.forms.bank.ReqBankLogin;
import rh.request.forms.bank.ReqBankOrderCalled;
import rh.request.forms.bank.ReqBankOrderShowInfo;
import rh.request.forms.bank.ReqLoanOrderCheckLink;
import rh.responce.forms.bank.ResBankLogin;
import rh.responce.forms.bank.ResBankOrderList;
import rh.responce.forms.bank.ResOrderStats;
import rh.responce.forms.loan.ResLoanOrderCheckLink;
import rh.responce.forms.loan.ResLoanOrderShowInfo;

public class BankPageDAO {
	// -------------------------------------------------------------------------------------------
	// --DAO METHOD
	// LIST--------------------------------------------------------------------------
	// -------------------------------------------------------------------------------------------

	// --Check Bank
	// Login-------------------------------------------------------------------------
	public static ResBankLogin daoCheckBankLogin(ReqBankLogin bankLogin) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL   ? := pkg_partner.checkbanklogin(p_login    => ?,"
					+ "                                     p_password => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, bankLogin.getLogin());
			cls.setString(3, bankLogin.getPassword());
			cls.execute();
			int ret = cls.getInt(1);
			helper.info("p_login = " + bankLogin.getLogin());
			helper.info("return value = " + ret);

			ResBankLogin resBankLogin = new ResBankLogin();
			if (ret > 0) {
				String token = JWTtool.generateToken(String.valueOf(ret), Constants.jwtTokenIssuer,
						bankLogin.getLogin() + ":" + bankLogin.getPassword(), Constants.jwtTokenExp);
				resBankLogin.setToken(token);
				resBankLogin.setBankId(ret);
			} else
				resBankLogin.setToken(null);

			helper.info(className + " > " + methodName + "  status : success");
			return resBankLogin;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}
	
	// --Partner Change Password
	// Customer---------------------------------------------------------------
	public static Responce daoChangePassword(ReqBankChangePsw reqBankChangePsw) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL ? := pkg_partner.changePassword(p_id   	   => ?, " 
					+ "			 				     	  p_oldPassword => ?,"
					+ "							     	  p_newPassword => ?)}";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setInt(2, reqBankChangePsw.getBankID());
			cls.setString(3, reqBankChangePsw.getOldPassword());
			cls.setString(4, reqBankChangePsw.getNewPassword());
			cls.execute();
			int ret = cls.getInt(1);			
			
			helper.info("change password return value > " + ret);
			
			Responce responce = null;
			if (ret == 1)
				responce = helper.successResponce(null);
			else
				responce = helper.errorResponce(Constants.errorAccessDenied);

			helper.info(className + " > " + methodName + "  status : success");
			return responce;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}	

	// --Show Order Info
	// -------------------------------------------------------------------------
	public static ResLoanOrderShowInfo daoLoanOrderShowInfo(ReqBankOrderShowInfo reqBankOrderShowInfo) throws Exception {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();		
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL   ? := pkg_partner.showorderinfo(p_orderid   => ?) }";

			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, reqBankOrderShowInfo.getOrderId());
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			ResLoanOrderShowInfo resLoanOrderShowInfo = null;

			while (rs.next()) {
				helper.info("resLoanOrderShowInfo CUS_MOBILE_PHONE : " + rs.getString("CUS_MOBILE_PHONE"));

				resLoanOrderShowInfo = new ResLoanOrderShowInfo(rs.getInt("RQ_ID"), rs.getString("CUS_MOBILE_PHONE"),
						rs.getString("CUS_EMAIL"), helper.DateToStr(rs.getDate("CUS_BIRTH_DATE"), "dd.MM.yyyy"));
			}

			helper.info(className + " > " + methodName + "  status : success");
			return resLoanOrderShowInfo;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}

	// --Partner Called to
	// Customer---------------------------------------------------------------
	public static Responce daoLoanOrderCalled(ReqBankOrderCalled reqBankOrderCalled) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL pkg_partner.ordercalled(p_orderid   => ?, " + "							  p_partnerid => ?,"
					+ "							  p_Note 	  => ?)}";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setInt(1, reqBankOrderCalled.getOrderId());
			cls.setInt(2, reqBankOrderCalled.getBankID());
			cls.setString(3, reqBankOrderCalled.getBankNote());
			cls.execute();

			Responce responce = helper.successResponce(null);

			helper.info(className + " > " + methodName + "  status : success");
			return responce;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}

	
	
	// --Partner Called to
	// Customer---------------------------------------------------------------
	public static Responce daoLoanOrderCanceled(ReqBankOrderCalled reqBankOrderCalled) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL pkg_partner.ordercalled(p_orderid   => ?, " + "							  p_partnerid => ?,"
					+ "							  p_Note 	  => ?)}";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setInt(1, reqBankOrderCalled.getOrderId());
			cls.setInt(2, reqBankOrderCalled.getBankID());
			cls.setString(3, reqBankOrderCalled.getBankNote());
			cls.execute();

			Responce responce = helper.successResponce(null);

			helper.info(className + " > " + methodName + "  status : success");
			return responce;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}

	// --List Loan
	// Orders-------------------------------------------------------------------------------------
	public static ArrayList<ResBankOrderList> daoListBankLoanOrders(int bankId, Boolean called, Boolean canceled)
			throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();
		
		Helper helper = new Helper();		
		helper.info("------- just called : " + className + " > " + methodName);
		ArrayList<ResBankOrderList> resBankOrderList = new ArrayList<>();

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL ? := pkg_partner.getorderlist(p_bankid => ?, "
					+ "									p_called => ?, "
					+ "									p_canceled => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, bankId);
			cls.setString(3, helper.booleanToStr(called));
			cls.setString(4, helper.booleanToStr(canceled));
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			while (rs.next()) {

				resBankOrderList.add(new ResBankOrderList(rs.getString("DATE_TIME"), rs.getInt("RQ_ID"),
						rs.getString("REQUEST_CURRENCY"), rs.getDouble("REQUEST_AMT"), rs.getDouble("REQUEST_PERIOD"),
						rs.getString("CUS_LAST_NAME") + " " + rs.getString("CUS_FIRST_NAME"), rs.getInt("CUS_AGE"),
						Boolean.valueOf(rs.getString("OFFICIAL_INCOME")), Boolean.valueOf(rs.getString("VOEN_INCOME")),
						Boolean.valueOf(rs.getString("UNOFFICIAL_INCOME")), rs.getDouble("INCOME_AMT"),
						rs.getDouble("CUS_GUARANTOR_AMT"), rs.getDouble("MONTHLY_PAYMENT"),
						helper.strToBool(rs.getString("CALLED")), rs.getString("NOTE")));
			}
			helper.info(className + " > " + methodName + " status : success");
			return resBankOrderList;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + " status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}

	// --Check Link For Loan Order
	// Data-------------------------------------------------------------------------
	public static ResLoanOrderCheckLink daoLoanOrderCheckLink(ReqLoanOrderCheckLink loanOrderCheckLink) throws SQLException {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL   ? := pkg_partner.checklinkfororderdata(p_linkhash => ?,"
					+ "                                              p_orderid  => ?,"
					+ "                                              p_bankid   => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, loanOrderCheckLink.getLinkHash());
			cls.setString(3, loanOrderCheckLink.getOrderID());
			cls.setInt(4, loanOrderCheckLink.getBankID());
			cls.execute();

			ResLoanOrderCheckLink resLoanOrderCheckLink = new ResLoanOrderCheckLink();
			resLoanOrderCheckLink.setStatus(cls.getInt(1));

			helper.info(className + " > " + methodName + "  status : success");
			return resLoanOrderCheckLink;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}

	// --Order Statistics
	// -------------------------------------------------------------------------
	public static ArrayList<ResOrderStats> daoOrderStats(int bankId) throws Exception {
		String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String className = new Object() {
		}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL   ? := pkg_partner.getorderstats(p_bankid => ?) }";

			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, bankId);
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			ArrayList<ResOrderStats> resOrderStats = new ArrayList<>();

			while (rs.next()) {
				resOrderStats.add(
						new ResOrderStats(rs.getInt("TOTAL_ORDERS"), rs.getInt("CONTACTED"), rs.getInt("CANCELED")));
			}

			helper.info(className + " > " + methodName + "  status : success");
			return resOrderStats;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}
}
