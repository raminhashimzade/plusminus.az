package rh.service.dao;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.common.Helper;
import com.common.MultiLangValue;

import oracle.jdbc.OracleTypes;
import rh.request.forms.card.ReqListCardCredit;
import rh.request.forms.card.ReqListCardDebet;
import rh.responce.forms.card.ResListCardCredit;
import rh.responce.forms.card.ResListCardCreditG;
import rh.responce.forms.card.ResListCardDebet;
import rh.responce.forms.card.ResListCardDebetG;

public class CardDAO {

	//--List Loan Products-------------------------------------------------------------------------------------
	public static ArrayList<ResListCardCreditG> daoListCardCreditProductByBank(ReqListCardCredit json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called : "+className+" > "+methodName);
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL   ? := pkg_service_list.getcardcreditlist(p_withempreference => ?,\r\n" + 
					"                                         		p_withgraceperiod  => ?,\r\n" + 
					"                                          		p_withmiles        => ?,\r\n" + 
					"                                          		p_withdepositrate  => ?,\r\n" + 
					"                                          		p_withcashback     => ?,\r\n" + 
					"                                          		p_commissioncash   => ?,\r\n" + 
					"                                          		p_currencycode     => ?,\r\n" + 
					"                                          		p_loanamount       => ?,\r\n" + 
					"                                          		p_loanperiod       => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithEmpReference()));
			cls.setString(3, helper.convertBoolToStr(json.isWithGracePeriod()));
			cls.setString(4, helper.convertBoolToStr(json.isWithMiles()));
			cls.setString(5, helper.convertBoolToStr(json.isWithDepositRate()));
			cls.setString(6, helper.convertBoolToStr(json.isWithCashBack()));
			cls.setString(7, helper.convertBoolToStr(json.isComissionCash()));
			cls.setString(8, json.getCurrencyCode());
			cls.setDouble(9, json.getLoanAmount());			
			cls.setDouble(10, json.getLoanPeriod());			
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			ArrayList<ResListCardCredit> resListCardCreditArray = new ArrayList<>();
			ArrayList<ResListCardCreditG> resListCardCreditG = new ArrayList<>();
			
			while (rs.next()) {
				
				ResListCardCredit resListCardCredit = new ResListCardCredit();
				resListCardCredit.setCdId(rs.getInt("CD_ID"));
				resListCardCredit.setBankId(rs.getInt("BANK_ID"));
				resListCardCredit.setBankName(rs.getString("BANK_NAME"));
				resListCardCredit.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), 
						helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				resListCardCredit.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				resListCardCredit.setCardSystem(rs.getString("CARD_SYSTEM"));
				resListCardCredit.setCardProduct(rs.getString("CARD_PRODUCT"));
				resListCardCredit.setCardType(rs.getString("CARD_TYPE"));
				resListCardCredit.setCardPeriod(rs.getString("CARD_PERIOD"));
				resListCardCredit.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				resListCardCredit.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				resListCardCredit.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				resListCardCredit.setWithEmpReference(helper.strToBool(rs.getString("WITH_EMP_REFERENCE")));
				resListCardCredit.setWithCollateral(helper.strToBool(rs.getString("WITH_COLLATERAL")));
				resListCardCredit.setWithGracePeriod(rs.getInt("WITH_GRACE_PERIOD"));
				resListCardCredit.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				resListCardCredit.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				resListCardCredit.setAuditorium(rs.getString("AUDITORIUM"));
				resListCardCredit.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				resListCardCredit.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				resListCardCredit.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				resListCardCredit.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				resListCardCredit.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				resListCardCredit.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				resListCardCredit.setComissionLoan(rs.getDouble("COMISSION_LOAN"));
				resListCardCredit.setMinRate(rs.getDouble("MIN_RATE"));
				resListCardCredit.setMaxRate(rs.getDouble("MAX_RATE"));
				resListCardCredit.setMinAmount(rs.getDouble("MIN_AMOUNT"));
				resListCardCredit.setMaxAmount(rs.getDouble("MAX_AMOUNT"));
				resListCardCredit.setMinPeriod(rs.getDouble("MIN_PERIOD"));
				resListCardCredit.setMaxPeriod(rs.getDouble("MAX_PERIOD"));
				resListCardCredit.setMinEffectiveRate(rs.getDouble("MIN_EFFECTIVE_RATE"));
				resListCardCredit.setMaxEffectiveRate(rs.getDouble("MAX_EFFECTIVE_RATE"));
				resListCardCredit.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), 
						helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				resListCardCredit.setDescriptionPD(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCPD_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCPD_NAME"), "")));
				resListCardCredit.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				resListCardCredit.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				resListCardCredit.setWebsite(helper.nvl(rs.getString("BANK_WEBSITE"), ""));
				
				resListCardCreditArray.add(resListCardCredit);				
				
				if (rs.getString("LEADID") == null) {
					helper.info(rs.getString("BANK_NAME") + " LEADID is null");					
					helper.info("listDepositProducts.size = " + resListCardCreditArray.size());
					
					resListCardCreditG.add(new ResListCardCreditG(rs.getInt("BANK_ID"), 
																  rs.getString("BANK_NAME"), 
																  resListCardCreditArray));
					resListCardCreditArray = new ArrayList<>();
				}				
			}
			helper.info(className+" > "+methodName+" status : success");
			return resListCardCreditG;
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
	public static ArrayList<ResListCardDebetG> daoListCardDebetProductByBank(ReqListCardDebet json) throws SQLException {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		Helper helper = new Helper();
		helper.info("------- just called : "+className+" > "+methodName);
		String sql = "";
		CallableStatement cls = null;
		ResultSet rs = null;
		try {			
			sql = "{ CALL   ? := pkg_service_list.getCardDebetList(p_withmiles        => ?,\r\n" + 
					"                                          	   p_withdepositrate  => ?,\r\n" + 
					"                                          	   p_withcashback     => ?,\r\n" + 
					"                                          	   p_commissioncash   => ?,\r\n" +
					"                                          	   p_period   		  => ?,\r\n" +
					"                                          	   p_currencycode     => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.CURSOR);
			cls.setString(2, helper.convertBoolToStr(json.isWithMiles()));
			cls.setString(3, helper.convertBoolToStr(json.isWithDepositRate()));
			cls.setString(4, helper.convertBoolToStr(json.isWithCashBack()));
			cls.setString(5, helper.convertBoolToStr(json.isComissionCash()));
			cls.setInt(6, json.getPeriod());
			cls.setString(7, json.getCurrencyCode());
			cls.execute();
			rs = (ResultSet)cls.getObject(1);

			ArrayList<ResListCardDebet> resListCardDebetArray = new ArrayList<>();
			ArrayList<ResListCardDebetG> resListCardDebetG = new ArrayList<>();
			
			while (rs.next()) {
				
				ResListCardDebet resListCardDebet = new ResListCardDebet();
				resListCardDebet.setCdID(rs.getInt("CD_ID"));
				resListCardDebet.setBankID(rs.getInt("BANK_ID"));
				resListCardDebet.setBankName(rs.getString("BANK_NAME"));
				resListCardDebet.setCardName(new MultiLangValue(helper.nvl(rs.getString("AZ_CARD_NAME"), ""),
						helper.nvl(rs.getString("RU_CARD_NAME"), ""), 
						helper.nvl(rs.getString("EN_CARD_NAME"), "")));
				resListCardDebet.setCurrencyCode(rs.getString("CURRENCY_CODE"));
				resListCardDebet.setCardSystem(rs.getString("CARD_SYSTEM"));
				resListCardDebet.setCardProduct(rs.getString("CARD_PRODUCT"));
				resListCardDebet.setCardType(rs.getString("CARD_TYPE"));
				resListCardDebet.setCardPeriod(rs.getString("CARD_PERIOD"));
				resListCardDebet.setSellAmount(rs.getDouble("SELL_AMOUNT"));
				resListCardDebet.setWithCashBack(helper.strToBool(rs.getString("WITH_CASHBACK")));
				resListCardDebet.setWithBonus(helper.strToBool(rs.getString("WITH_BONUS")));
				resListCardDebet.setWithDepositRate(rs.getDouble("WITH_DEPOSIT_RATE"));
				resListCardDebet.setWithMiles(helper.strToBool(rs.getString("WITH_MILES")));
				resListCardDebet.setAuditorium(rs.getString("AUDITORIUM"));
				resListCardDebet.setComissionSMS(rs.getDouble("COMISSION_SMS_AMOUNT"));
				resListCardDebet.setComissionCashInhouseOwn(rs.getDouble("COMISSION_CASH_INHOUSE_OWN"));
				resListCardDebet.setComissionCashInhouseOther(rs.getDouble("COMISSION_CASH_INHOUSE_OTHER"));
				resListCardDebet.setComissionCashFCountry(rs.getDouble("COMISSION_CASH_F_COUNTRY"));
				resListCardDebet.setComissionCardToCard(rs.getDouble("COMISSION_CARD_TO_CARD"));
				resListCardDebet.setComissionQuasiCash(rs.getDouble("COMISSION_QUASI_CASH"));
				resListCardDebet.setDescription(new MultiLangValue(helper.nvl(rs.getString("AZ_DESC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESC_NAME"), ""), 
						helper.nvl(rs.getString("EN_DESC_NAME"), "")));
				resListCardDebet.setDescriptionDOC(new MultiLangValue(helper.nvl(rs.getString("AZ_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("RU_DESCDOC_NAME"), ""),
						helper.nvl(rs.getString("EN_DESCDOC_NAME"), "")));
				resListCardDebet.setCardImageId(rs.getInt("CARD_IMAGE_ID"));
				resListCardDebet.setWebsite(helper.nvl(rs.getString("BANK_WEBSITE"), ""));
				
				resListCardDebetArray.add(resListCardDebet);				
				
				if (rs.getString("LEADID") == null) {
					helper.info(rs.getString("BANK_NAME") + " LEADID is null");					
					helper.info("listDepositProducts.size = " + resListCardDebetArray.size());
					
					resListCardDebetG.add(new ResListCardDebetG(rs.getInt("BANK_ID"), 
																rs.getString("BANK_NAME"), 
																resListCardDebetArray));
					resListCardDebetArray = new ArrayList<>();
				}				
			}
			helper.info(className+" > "+methodName+" status : success");
			return resListCardDebetG;
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
