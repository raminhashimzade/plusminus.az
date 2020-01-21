package rh.service.dao;

import java.io.FileInputStream;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.common.Constants;
import com.common.Helper;
import com.common.MultiLangValue;
import com.jwt.JWTtool;

import oracle.jdbc.OracleTypes;
import rh.request.forms.admin.ReqCardCreditProducts;
import rh.request.forms.admin.ReqCardDebetProducts;
import rh.request.forms.admin.ReqCheckAdminLogin;
import rh.request.forms.admin.ReqDepositProducts;
import rh.request.forms.admin.ReqLoanProducts;
import rh.request.forms.admin.ReqPostFile;
import rh.request.forms.admin.ReqRemoveFile;
import rh.responce.forms.admin.ResCardCreditProducts;
import rh.responce.forms.admin.ResCardDebetProducts;
import rh.responce.forms.admin.ResCheckAdminLogin;
import rh.responce.forms.admin.ResDepositProducts;
import rh.responce.forms.admin.ResLoanProducts;
import rh.responce.forms.admin.ResPostFile;

public class AdminPageDAO {

	// --Check Bank Login
	// -------------------------------------------------------------------------
	public static ResCheckAdminLogin daoCheckAdmin(ReqCheckAdminLogin adminLogin) throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL   ? := pkg_admin.checkloginpassword(p_login    => ?,"
					+ "                                           p_password => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, adminLogin.getLogin());
			cls.setString(3, adminLogin.getPassword());
			cls.execute();
			int ret = cls.getInt(1);
			helper.info("p_login = " + adminLogin.getLogin());
			helper.info("return value = " + ret);

			ResCheckAdminLogin resAdminLogin = new ResCheckAdminLogin();
			if (ret > 0) {
				String token = JWTtool.generateToken(String.valueOf(ret), Constants.jwtTokenIssuer,
						adminLogin.getLogin() + ":" + adminLogin.getPassword(), Constants.jwtTokenExp);
				resAdminLogin.setToken(token);
			} else
				resAdminLogin.setToken(null);

			helper.info(className + " > " + methodName + "  status : success");
			return resAdminLogin;
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

	// --List Loan Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResLoanProducts> daoSelectLoanProduct(ReqLoanProducts reqLoanProducts) throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);
		ArrayList<ResLoanProducts> resLoanProducts = new ArrayList<>();

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL ? := pkg_admin.selectloans(p_lnId => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, reqLoanProducts.getLnId());
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			while (rs.next()) {
				ResLoanProducts rsLoanProducts = new ResLoanProducts();
				rsLoanProducts.setDateTime(rs.getDate("DATE_TIME"));
				rsLoanProducts.setLnId(rs.getInt("LN_ID"));
				rsLoanProducts.setBankId(rs.getInt("BANK_ID"));
				rsLoanProducts.setBankName(rs.getString("BANK_NAME"));
				rsLoanProducts.setLoanType(rs.getString("LOAN_TYPE"));
				rsLoanProducts.setLoanName(new MultiLangValue(helper.nvl(rs.getString("AZ_LOAN_NAME"), ""),
						helper.nvl(rs.getString("RU_LOAN_NAME"), ""), helper.nvl(rs.getString("EN_LOAN_NAME"), "")));
				rsLoanProducts.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				rsLoanProducts.setProdStatus(rs.getInt("PROD_STATUS"));
				rsLoanProducts.setPriority(rs.getInt("PRIORITY"));
				rsLoanProducts.setWithEmpReference(helper.strToBool(rs.getString("WITH_EMP_REFERENCE")));
				rsLoanProducts.setWithCollateral(helper.strToBool(rs.getString("WITH_COLLATERAL")));
				rsLoanProducts.setWithGracePeriod(rs.getInt("WITH_GRACE_PERIOD"));
				rsLoanProducts.setAuditorium(rs.getString("AUDITORIUM"));
				rsLoanProducts.setComissionCash(rs.getDouble("COMISSION_CASH"));
				rsLoanProducts.setComissionLoan(rs.getDouble("COMISSION_LOAN"));
				rsLoanProducts.setMinAge(rs.getInt("MIN_AGE"));
				rsLoanProducts.setMaxAge(rs.getInt("MAX_AGE"));
				rsLoanProducts.setMinAmount(rs.getDouble("MIN_AMOUNT"));
				rsLoanProducts.setMaxAmount(rs.getDouble("MAX_AMOUNT"));
				rsLoanProducts.setMinPeriod(rs.getDouble("MIN_PERIOD"));
				rsLoanProducts.setMaxPeriod(rs.getDouble("MAX_PERIOD"));
				rsLoanProducts.setMinRate(rs.getDouble("MIN_RATE"));
				rsLoanProducts.setMaxRate(rs.getDouble("MAX_RATE"));
				rsLoanProducts.setMinEffectiveRate(rs.getDouble("MIN_EFFECTIVE_RATE"));
				rsLoanProducts.setMaxEffectiveRate(rs.getDouble("MAX_EFFECTIVE_RATE"));
				rsLoanProducts.setInsurance(rs.getString("INSURANCE"));
				rsLoanProducts.setMinSalary(rs.getDouble("MIN_SALARY"));
				rsLoanProducts.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				rsLoanProducts.setDescriptionPD(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCPD_NAME"), "")));
				rsLoanProducts.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				rsLoanProducts.setAnunitet(rs.getString("ANUNITET"));

				resLoanProducts.add(rsLoanProducts);
			}
			helper.info(className + " > " + methodName + " status : success");
			return resLoanProducts;
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

	// --List Deposit Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResDepositProducts> daoSelectDepositProduct(ReqDepositProducts reqDepositProducts)
			throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);
		ArrayList<ResDepositProducts> resDepositProducts = new ArrayList<>();

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL ? := pkg_admin.selectDeposits(p_dpId => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, reqDepositProducts.getDpId());
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			while (rs.next()) {
				ResDepositProducts rsDepositProducts = new ResDepositProducts();
				rsDepositProducts.setDateTime(rs.getDate("DATE_TIME"));
				rsDepositProducts.setDpId(rs.getInt("DP_ID"));
				rsDepositProducts.setBankId(rs.getInt("BANK_ID"));
				rsDepositProducts.setBankName(rs.getString("BANK_NAME"));
				rsDepositProducts.setDepositName(new MultiLangValue(helper.nvl(rs.getString("AZ_DEPOSIT_NAME"), ""),
						helper.nvl(rs.getString("RU_DEPOSIT_NAME"), ""),
						helper.nvl(rs.getString("EN_DEPOSIT_NAME"), "")));
				rsDepositProducts.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				rsDepositProducts.setProdStatus(rs.getInt("PROD_STATUS"));
				rsDepositProducts.setPriority(rs.getInt("PRIORITY"));
				rsDepositProducts.setMinAmount(rs.getDouble("MIN_AMOUNT"));
				rsDepositProducts.setMaxAmount(rs.getDouble("MAX_AMOUNT"));
				rsDepositProducts.setMinPeriod(rs.getDouble("MIN_PERIOD"));
				rsDepositProducts.setMaxPeriod(rs.getDouble("MAX_PERIOD"));
				rsDepositProducts.setMinRate(rs.getDouble("MIN_RATE"));
				rsDepositProducts.setMaxRate(rs.getDouble("MAX_RATE"));
				rsDepositProducts.setLiqType(rs.getString("LIQ_TYPE_ID"));

				rsDepositProducts.setWithCapitalisation(helper.strToBool(rs.getString("WITH_CAPITALISATION")));
				rsDepositProducts.setWithWithDraw(helper.strToBool(rs.getString("WITH_WITHDRAW")));
				rsDepositProducts.setWithRefill(helper.strToBool(rs.getString("WITH_REFILL")));
				rsDepositProducts.setWithAutoProlongation(helper.strToBool(rs.getString("WITH_AUTO_PROLONGATION")));

				rsDepositProducts.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				rsDepositProducts.setPresent(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_PRESENT_NAME"), ""),
						helper.nvl(rs.getString("EN_DESC_PRESENT_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_PRESENT_NAME"), "")));

				resDepositProducts.add(rsDepositProducts);
			}
			helper.info(className + " > " + methodName + " status : success");
			return resDepositProducts;
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

	// --List Credit Card Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResCardCreditProducts> daoSelectCardCreditProduct(ReqCardCreditProducts reqCardProducts)
			throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);
		ArrayList<ResCardCreditProducts> resCardProducts = new ArrayList<>();

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL ? := pkg_admin.selectCards(p_cdId => ?, p_card_type => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, reqCardProducts.getCdId());
			cls.setString(3, "C");
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			while (rs.next()) {
				ResCardCreditProducts rsCardProducts = new ResCardCreditProducts();
				rsCardProducts.setDateTime(rs.getDate("DATE_TIME"));
				rsCardProducts.setCdId(rs.getInt("CD_ID"));
				rsCardProducts.setBankId(rs.getInt("BANK_ID"));
				rsCardProducts.setBankName(rs.getString("BANK_NAME"));
				rsCardProducts.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				rsCardProducts.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				rsCardProducts.setProdStatus(rs.getInt("PROD_STATUS"));
				rsCardProducts.setPriority(rs.getInt("PRIORITY"));
				rsCardProducts.setCardSystem(rs.getString("CARD_SYSTEM"));
				rsCardProducts.setCardProduct(rs.getString("CARD_PRODUCT"));
				rsCardProducts.setCardType(rs.getString("CARD_TYPE"));
				rsCardProducts.setCardPeriod(rs.getString("CARD_PERIOD"));
				rsCardProducts.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				rsCardProducts.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				rsCardProducts.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				rsCardProducts.setWithEmpReference(helper.strToBool(rs.getString("WITH_EMP_REFERENCE")));
				rsCardProducts.setWithCollateral(helper.strToBool(rs.getString("WITH_COLLATERAL")));
				rsCardProducts.setWithGracePeriod(rs.getInt("WITH_GRACE_PERIOD"));
				rsCardProducts.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				rsCardProducts.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				rsCardProducts.setAuditorium(rs.getString("AUDITORIUM"));
				rsCardProducts.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				rsCardProducts.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				rsCardProducts.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				rsCardProducts.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				rsCardProducts.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				rsCardProducts.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				rsCardProducts.setComissionLoan(rs.getDouble("COMISSION_LOAN"));
				rsCardProducts.setMinRate(rs.getDouble("MIN_RATE"));
				rsCardProducts.setMaxRate(rs.getDouble("MAX_RATE"));
				rsCardProducts.setMinAmount(rs.getDouble("MIN_AMOUNT"));
				rsCardProducts.setMaxAmount(rs.getDouble("MAX_AMOUNT"));
				rsCardProducts.setMinPeriod(rs.getDouble("MIN_PERIOD"));
				rsCardProducts.setMaxPeriod(rs.getDouble("MAX_PERIOD"));
				rsCardProducts.setMinEffectiveRate(rs.getDouble("MIN_EFFECTIVE_RATE"));
				rsCardProducts.setMaxEffectiveRate(rs.getDouble("MAX_EFFECTIVE_RATE"));
				rsCardProducts.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				rsCardProducts.setDescriptionPD(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCPD_NAME"), "")));
				rsCardProducts.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				rsCardProducts.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				resCardProducts.add(rsCardProducts);
			}
			helper.info(className + " > " + methodName + " status : success");
			return resCardProducts;
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

	// --List Credit Card Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResCardDebetProducts> daoSelectCardDebetProduct(ReqCardDebetProducts reqCardProducts)
			throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);
		ArrayList<ResCardDebetProducts> resCardProducts = new ArrayList<>();

		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {
			sql = "{ CALL ? := pkg_admin.selectCards(p_cdId => ?, p_card_type => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setInt(2, reqCardProducts.getCdId());
			cls.setString(3, "D");
			cls.execute();
			rs = (ResultSet) cls.getObject(1);

			while (rs.next()) {
				ResCardDebetProducts rsCardProducts = new ResCardDebetProducts();
				rsCardProducts.setDateTime(rs.getDate("DATE_TIME"));
				rsCardProducts.setCdId(rs.getInt("CD_ID"));
				rsCardProducts.setBankId(rs.getInt("BANK_ID"));
				rsCardProducts.setBankName(rs.getString("BANK_NAME"));
				rsCardProducts.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				rsCardProducts.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				rsCardProducts.setProdStatus(rs.getInt("PROD_STATUS"));
				rsCardProducts.setPriority(rs.getInt("PRIORITY"));
				rsCardProducts.setCardSystem(rs.getString("CARD_SYSTEM"));
				rsCardProducts.setCardProduct(rs.getString("CARD_PRODUCT"));
				rsCardProducts.setCardType(rs.getString("CARD_TYPE"));
				rsCardProducts.setCardPeriod(rs.getString("CARD_PERIOD"));
				rsCardProducts.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				rsCardProducts.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				rsCardProducts.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				rsCardProducts.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				rsCardProducts.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				rsCardProducts.setAuditorium(rs.getString("AUDITORIUM"));
				rsCardProducts.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				rsCardProducts.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				rsCardProducts.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				rsCardProducts.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				rsCardProducts.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				rsCardProducts.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				rsCardProducts.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				rsCardProducts.setDescriptionPD(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCPD_NAME"), "")));
				rsCardProducts.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				rsCardProducts.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				resCardProducts.add(rsCardProducts);
			}
			helper.info(className + " > " + methodName + " status : success");
			return resCardProducts;
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

	// --Update Loan Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResLoanProducts> daoUpdateLoanProduct(ReqLoanProducts reqLoanProducts) throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL ? := pkg_admin.crudloans(p_operation           => ?,"
					+ "                            p_ln_id               => ?,"
					+ "                            p_bank_id             => ?,"
					+ "                            p_loan_type           => ?,"
					+ "                            p_loan_name_az        => ?,"
					+ "                            p_currency_code       => ?,"
					+ "                            p_prod_status         => ?,"
					+ "                            p_priority            => ?,"
					+ "                            p_with_emp_reference  => ?,"
					+ "                            p_with_collateral     => ?,"
					+ "                            p_with_grace_period   => ?,"
					+ "                            p_auditorium          => ?,"
					+ "                            p_comission_cash      => ?,"
					+ "                            p_comission_loan      => ?,"
					+ "                            p_min_age             => ?,"
					+ "                            p_max_age             => ?,"
					+ "                            p_min_amount          => ?,"
					+ "                            p_max_amount          => ?,"
					+ "                            p_min_period          => ?,"
					+ "                            p_max_period          => ?,"
					+ "                            p_min_rate            => ?,"
					+ "                            p_max_rate            => ?,"
					+ "                            p_min_effective_rate  => ?,"
					+ "                            p_max_effective_rate  => ?,"
					+ "                            p_insurance           => ?,"
					+ "                            p_min_salary          => ?,"
					+ "                            p_description_az      => ?,"
					+ "                            p_description_pd_az   => ?,"
					+ "                            p_description_doc_az  => ?,"
					+ "                            p_anunitet            => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, reqLoanProducts.getCommandType().toString());
			cls.setInt(3, reqLoanProducts.getLnId());
			cls.setInt(4, reqLoanProducts.getBankId());
			cls.setString(5, reqLoanProducts.getLoanType());
			cls.setString(6, reqLoanProducts.getLoanName().getAz());
			cls.setString(7, reqLoanProducts.getCurrencyCode());
			cls.setInt(8, reqLoanProducts.getProdStatus());
			cls.setInt(9, reqLoanProducts.getPriority());
			cls.setString(10, helper.booleanToStr(reqLoanProducts.isWithEmpReference()));
			cls.setString(11, helper.booleanToStr(reqLoanProducts.isWithCollateral()));
			cls.setInt(12, reqLoanProducts.getWithGracePeriod());
			cls.setString(13, reqLoanProducts.getAuditorium());
			cls.setDouble(14, reqLoanProducts.getComissionCash());
			cls.setDouble(15, reqLoanProducts.getComissionLoan());
			cls.setObject(16, reqLoanProducts.getMinAge());
			cls.setObject(17, reqLoanProducts.getMaxAge());
			cls.setDouble(18, reqLoanProducts.getMinAmount());
			cls.setDouble(19, reqLoanProducts.getMaxAmount());
			cls.setDouble(20, reqLoanProducts.getMinPeriod());
			cls.setDouble(21, reqLoanProducts.getMaxPeriod());
			cls.setDouble(22, reqLoanProducts.getMinRate());
			cls.setDouble(23, reqLoanProducts.getMaxRate());
			cls.setObject(24, reqLoanProducts.getMinEffectiveRate());
			cls.setObject(25, reqLoanProducts.getMaxEffectiveRate());
			cls.setString(26, reqLoanProducts.getInsurance());
			cls.setObject(27, reqLoanProducts.getMinSalary());
			cls.setString(28, reqLoanProducts.getDescription().getAz());
			cls.setString(29, reqLoanProducts.getDescriptionPD().getAz());
			cls.setString(30, reqLoanProducts.getDescriptionDOC().getAz());
			cls.setString(31, reqLoanProducts.getAnunitet());
			cls.execute();
			int ret = cls.getInt(1);
			ReqLoanProducts rq = new ReqLoanProducts();
			rq.setLnId(ret);
			helper.info(className + " > " + methodName + " status : success");

			return daoSelectLoanProduct(rq);
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

	// --Update Product Products
	// -----------------------------------------------------------------------
	public static ArrayList<ResDepositProducts> daoUpdateDepositProduct(ReqDepositProducts reqDepositProducts)
			throws SQLException {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL   ? := pkg_admin.cruddeposit(p_operation         		=> ?,\r\n"
					+ "                                p_dp_id                  => ?,\r\n"
					+ "                                p_bank_id                => ?,\r\n"
					+ "                                p_deposit_name_az        => ?,\r\n"
					+ "                                p_currency_code          => ?,\r\n"
					+ "                                p_prod_status            => ?,\r\n"
					+ "                                p_priority               => ?,\r\n"
					+ "                                p_min_amount             => ?,\r\n"
					+ "                                p_max_amount             => ?,\r\n"
					+ "                                p_min_period             => ?,\r\n"
					+ "                                p_max_period             => ?,\r\n"
					+ "                                p_min_rate               => ?,\r\n"
					+ "                                p_max_rate               => ?,\r\n"
					+ "                                p_liq_type               => ?,\r\n"
					+ "                                p_with_capitalisation    => ?,\r\n"
					+ "                                p_with_withdraw          => ?,\r\n"
					+ "                                p_with_refill            => ?,\r\n"
					+ "                                p_with_auto_prolongation => ?,\r\n"
					+ "                                p_description_az         => ?,\r\n"
					+ "                                p_present_az             => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, reqDepositProducts.getCommandType().toString());
			cls.setInt(3, reqDepositProducts.getDpId());
			cls.setInt(4, reqDepositProducts.getBankId());
			cls.setString(5, reqDepositProducts.getDepositName().getAz());
			cls.setString(6, reqDepositProducts.getCurrencyCode());
			cls.setInt(7, reqDepositProducts.getProdStatus());
			cls.setInt(8, reqDepositProducts.getPriority());
			cls.setDouble(9, reqDepositProducts.getMinAmount());
			cls.setDouble(10, reqDepositProducts.getMaxAmount());
			cls.setDouble(11, reqDepositProducts.getMinPeriod());
			cls.setDouble(12, reqDepositProducts.getMaxPeriod());
			cls.setDouble(13, reqDepositProducts.getMinRate());
			cls.setDouble(14, reqDepositProducts.getMaxRate());
			cls.setString(15, reqDepositProducts.getLiqType());
			cls.setString(16, helper.booleanToStr(reqDepositProducts.isWithCapitalisation()));
			cls.setString(17, helper.booleanToStr(reqDepositProducts.isWithWithDraw()));
			cls.setString(18, helper.booleanToStr(reqDepositProducts.isWithRefill()));
			cls.setString(19, helper.booleanToStr(reqDepositProducts.isWithAutoProlongation()));
			cls.setString(20, reqDepositProducts.getDescription().getAz());
			cls.setString(21, reqDepositProducts.getPresent().getAz());
			cls.execute();
			int ret = cls.getInt(1);
			ReqDepositProducts rq = new ReqDepositProducts();
			rq.setDpId(ret);
			helper.info(className + " > " + methodName + " status : success");

			return daoSelectDepositProduct(rq);
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

	// --Update Credit Card
	// -----------------------------------------------------------------------
	public static ArrayList<ResCardCreditProducts> daoUpdateCardCreditProduct(
			ReqCardCreditProducts reqCardCreditProducts) throws Exception {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL ? := pkg_admin.crudcards(p_operation                    => ?,\n"
					+ "                              p_cd_id                        => ?,\n"
					+ "                              p_bank_id                      => ?,\n"
					+ "                              p_prod_status                  => ?,\n"
					+ "                              p_priority                     => ?,\n"
					+ "                              p_card_name_az                 => ?,\n"
					+ "                              p_currency_code                => ?,\n"
					+ "                              p_card_system                  => ?,\n"
					+ "                              p_card_product                 => ?,\n"
					+ "                              p_card_type                    => ?,\n"
					+ "                              p_card_period                  => ?,\n"
					+ "                              p_sell_amount                  => ?,\n"
					+ "                              p_with_cashback                => ?,\n"
					+ "                              p_with_bonus                   => ?,\n"
					+ "                              p_with_emp_reference           => ?,\n"
					+ "                              p_with_collateral              => ?,\n"
					+ "                              p_with_grace_period            => ?,\n"
					+ "                              p_with_deposit_rate            => ?,\n"
					+ "                              p_with_miles                   => ?,\n"
					+ "                              p_auditorium                   => ?,\n"
					+ "                              p_comission_sms_amount         => ?,\n"
					+ "                              p_comission_cash_inhouse_own   => ?,\n"
					+ "                              p_comission_cash_inhouse_other => ?,\n"
					+ "                              p_comission_cash_f_country     => ?,\n"
					+ "                              p_comission_card_to_card       => ?,\n"
					+ "                              p_comission_quasi_cash         => ?,\n"
					+ "                              p_comission_loan               => ?,\n"
					+ "                              p_min_age                      => ?,\n"
					+ "                              p_max_age                      => ?,\n"
					+ "                              p_min_amount                   => ?,\n"
					+ "                              p_max_amount                   => ?,\n"
					+ "                              p_min_period                   => ?,\n"
					+ "                              p_max_period                   => ?,\n"
					+ "                              p_min_rate                     => ?,\n"
					+ "                              p_max_rate                     => ?,\n"
					+ "                              p_min_effective_rate           => ?,\n"
					+ "                              p_max_effective_rate           => ?,\n"
					+ "                              p_description_az               => ?,\n"
					+ "                              p_description_pd_az            => ?,\n"
					+ "                              p_description_doc_az           => ?,\n"
					+ "                              p_card_image_id                => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, reqCardCreditProducts.getCommandType().toString());
			cls.setInt(3, reqCardCreditProducts.getCdId());
			cls.setInt(4, reqCardCreditProducts.getBankId());
			cls.setInt(5, reqCardCreditProducts.getProdStatus());
			cls.setInt(6, reqCardCreditProducts.getPriority());
			cls.setString(7, reqCardCreditProducts.getCardName().getAz());
			cls.setString(8, reqCardCreditProducts.getCurrencyCode());
			cls.setString(9, reqCardCreditProducts.getCardSystem());
			cls.setString(10, reqCardCreditProducts.getCardProduct());
			cls.setString(11, reqCardCreditProducts.getCardType());
			cls.setString(12, reqCardCreditProducts.getCardPeriod());
			cls.setDouble(13, reqCardCreditProducts.getSellAmount());
			cls.setString(14, helper.booleanToStr(reqCardCreditProducts.isWithCashBack()));
			cls.setString(15, helper.booleanToStr(reqCardCreditProducts.isWithBonus()));
			cls.setString(16, helper.booleanToStr(reqCardCreditProducts.isWithEmpReference()));
			cls.setString(17, helper.booleanToStr(reqCardCreditProducts.isWithCollateral()));
			cls.setInt(18, reqCardCreditProducts.getWithGracePeriod());
			cls.setDouble(19, reqCardCreditProducts.getWithDepositRate());
			cls.setString(20, helper.booleanToStr(reqCardCreditProducts.isWithMiles()));
			cls.setString(21, reqCardCreditProducts.getAuditorium());
			cls.setDouble(22, reqCardCreditProducts.getComissionSMS());
			cls.setDouble(23, reqCardCreditProducts.getComissionCashInhouseOwn());
			cls.setDouble(24, reqCardCreditProducts.getComissionCashInhouseOther());
			cls.setDouble(25, reqCardCreditProducts.getComissionCashFCountry());
			cls.setDouble(26, reqCardCreditProducts.getComissionCardToCard());
			cls.setDouble(27, reqCardCreditProducts.getComissionQuasiCash());
			cls.setDouble(28, reqCardCreditProducts.getComissionLoan());
			cls.setInt(29, java.sql.Types.INTEGER);
			cls.setInt(30, java.sql.Types.INTEGER);
			cls.setDouble(31, reqCardCreditProducts.getMinAmount());
			cls.setDouble(32, reqCardCreditProducts.getMaxAmount());
			cls.setDouble(33, reqCardCreditProducts.getMinPeriod());
			cls.setDouble(34, reqCardCreditProducts.getMaxPeriod());
			cls.setDouble(35, reqCardCreditProducts.getMinRate());
			cls.setDouble(36, reqCardCreditProducts.getMaxRate());
			cls.setObject(37, reqCardCreditProducts.getMinEffectiveRate());
			cls.setObject(38, reqCardCreditProducts.getMaxEffectiveRate());
			cls.setString(39, reqCardCreditProducts.getDescription().getAz());
			cls.setString(40, reqCardCreditProducts.getDescriptionPD().getAz());
			cls.setString(41, reqCardCreditProducts.getDescriptionDOC().getAz());
			cls.setInt(42, reqCardCreditProducts.getCardImageId());
			cls.execute();

			int ret = cls.getInt(1);
			ReqCardCreditProducts rq = new ReqCardCreditProducts();
			rq.setCdId(ret);
			helper.info(className + " > " + methodName + " status : success");

			return daoSelectCardCreditProduct(rq);
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

	// --Update Debet Card
	// -----------------------------------------------------------------------
	public static ArrayList<ResCardDebetProducts> daoUpdateCardDebetProduct(ReqCardDebetProducts reqCardDebetProducts)
			throws Exception {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL ? := pkg_admin.crudcards(p_operation                    => ?,\n"
					+ "                              p_cd_id                        => ?,\n"
					+ "                              p_bank_id                      => ?,\n"
					+ "                              p_prod_status                  => ?,\n"
					+ "                              p_priority                     => ?,\n"
					+ "                              p_card_name_az                 => ?,\n"
					+ "                              p_currency_code                => ?,\n"
					+ "                              p_card_system                  => ?,\n"
					+ "                              p_card_product                 => ?,\n"
					+ "                              p_card_type                    => ?,\n"
					+ "                              p_card_period                  => ?,\n"
					+ "                              p_sell_amount                  => ?,\n"
					+ "                              p_with_cashback                => ?,\n"
					+ "                              p_with_bonus                   => ?,\n"
					+ "                              p_with_emp_reference           => ?,\n"
					+ "                              p_with_collateral              => ?,\n"
					+ "                              p_with_grace_period            => ?,\n"
					+ "                              p_with_deposit_rate            => ?,\n"
					+ "                              p_with_miles                   => ?,\n"
					+ "                              p_auditorium                   => ?,\n"
					+ "                              p_comission_sms_amount         => ?,\n"
					+ "                              p_comission_cash_inhouse_own   => ?,\n"
					+ "                              p_comission_cash_inhouse_other => ?,\n"
					+ "                              p_comission_cash_f_country     => ?,\n"
					+ "                              p_comission_card_to_card       => ?,\n"
					+ "                              p_comission_quasi_cash         => ?,\n"
					+ "                              p_comission_loan               => ?,\n"
					+ "                              p_min_age                      => ?,\n"
					+ "                              p_max_age                      => ?,\n"
					+ "                              p_min_amount                   => ?,\n"
					+ "                              p_max_amount                   => ?,\n"
					+ "                              p_min_period                   => ?,\n"
					+ "                              p_max_period                   => ?,\n"
					+ "                              p_min_rate                     => ?,\n"
					+ "                              p_max_rate                     => ?,\n"
					+ "                              p_min_effective_rate           => ?,\n"
					+ "                              p_max_effective_rate           => ?,\n"
					+ "                              p_description_az               => ?,\n"
					+ "                              p_description_pd_az            => ?,\n"
					+ "                              p_description_doc_az           => ?,\n"
					+ "                              p_card_image_id                => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setString(2, reqCardDebetProducts.getCommandType().toString());
			cls.setInt(3, reqCardDebetProducts.getCdId());
			cls.setInt(4, reqCardDebetProducts.getBankId());
			cls.setInt(5, reqCardDebetProducts.getProdStatus());
			cls.setInt(6, reqCardDebetProducts.getPriority());
			cls.setString(7, reqCardDebetProducts.getCardName().getAz());
			cls.setString(8, reqCardDebetProducts.getCurrencyCode());
			cls.setString(9, reqCardDebetProducts.getCardSystem());
			cls.setString(10, reqCardDebetProducts.getCardProduct());
			cls.setString(11, reqCardDebetProducts.getCardType());
			cls.setString(12, reqCardDebetProducts.getCardPeriod());
			cls.setDouble(13, reqCardDebetProducts.getSellAmount());
			cls.setString(14, helper.booleanToStr(reqCardDebetProducts.isWithCashBack()));
			cls.setString(15, helper.booleanToStr(reqCardDebetProducts.isWithBonus()));
			cls.setString(16, null);
			cls.setString(17, null);
			cls.setInt(18, java.sql.Types.INTEGER);
			cls.setDouble(19, reqCardDebetProducts.getWithDepositRate());
			cls.setString(20, helper.booleanToStr(reqCardDebetProducts.isWithMiles()));
			cls.setString(21, reqCardDebetProducts.getAuditorium());
			cls.setDouble(22, reqCardDebetProducts.getComissionSMS());
			cls.setDouble(23, reqCardDebetProducts.getComissionCashInhouseOwn());
			cls.setDouble(24, reqCardDebetProducts.getComissionCashInhouseOther());
			cls.setDouble(25, reqCardDebetProducts.getComissionCashFCountry());
			cls.setDouble(26, reqCardDebetProducts.getComissionCardToCard());
			cls.setDouble(27, reqCardDebetProducts.getComissionQuasiCash());
			cls.setDouble(28, java.sql.Types.DOUBLE);
			cls.setInt(29, java.sql.Types.INTEGER);
			cls.setInt(30, java.sql.Types.INTEGER);
			cls.setDouble(31, java.sql.Types.DOUBLE);
			cls.setDouble(32, java.sql.Types.DOUBLE);
			cls.setDouble(33, java.sql.Types.DOUBLE);
			cls.setDouble(34, java.sql.Types.DOUBLE);
			cls.setDouble(35, java.sql.Types.DOUBLE);
			cls.setDouble(36, java.sql.Types.DOUBLE);
			cls.setObject(37, java.sql.Types.DOUBLE);
			cls.setDouble(38, java.sql.Types.DOUBLE);
			cls.setString(39, reqCardDebetProducts.getDescription().getAz());
			cls.setString(40, reqCardDebetProducts.getDescriptionPD().getAz());
			cls.setString(41, reqCardDebetProducts.getDescriptionDOC().getAz());
			cls.setInt(42, reqCardDebetProducts.getCardImageId());
			cls.execute();

			int ret = cls.getInt(1);
			ReqCardDebetProducts rq = new ReqCardDebetProducts();
			rq.setCdId(ret);
			helper.info(className + " > " + methodName + " status : success");

			return daoSelectCardDebetProduct(rq);
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

	// --Upload File
	// -----------------------------------------------------------------------
	public static ResPostFile daoPostFile(ReqPostFile reqPostFile) throws Exception {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			String filePath = helper.base64FileTodisc("cardCredit.png", reqPostFile.getFile());
			FileInputStream fin = new FileInputStream(filePath);

			sql = "{ CALL ? := pkg_file_store.uploadfile(p_file      => ?,\n"
					+ "                                	 p_file_name => ?,\n"
					+ "                                	 p_module    => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.NUMBER);
			cls.setBinaryStream(2, fin, fin.available());
			cls.setString(3, reqPostFile.getFileName());
			cls.setString(4, reqPostFile.getModule());
			cls.execute();

			int ret = cls.getInt(1);
			ResPostFile rs = new ResPostFile();
			rs.setFileId(ret);

			helper.info(className + " > " + methodName + " status : success");
			return rs;
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
	
	// --Remove File
	// -----------------------------------------------------------------------
	public static void daoRemoveFile(ReqRemoveFile reqRemoveFile) throws Exception {
		String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		String className = new Object() {}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {

			sql = "{ CALL pkg_file_store.deletefile(p_file_id => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.setInt(1, reqRemoveFile.getFileID());
			cls.execute();

			helper.info(className + " > " + methodName + " status : success");
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
}
