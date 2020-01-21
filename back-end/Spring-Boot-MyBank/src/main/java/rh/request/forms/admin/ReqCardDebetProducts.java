package rh.request.forms.admin;

import com.common.MultiLangValue;
import com.common.Request;

public class ReqCardDebetProducts extends Request {
	private String adminToken;
	private enumCommandTypes commandType;
	private int cdId;
	private int bankId;
	private MultiLangValue cardName;
	private String currencyCode;
	private int prodStatus;
	private int priority;
	private String cardSystem;
	private String cardProduct;
	private String cardType;
	private String cardPeriod;
	private Double sellAmount;
	private boolean withCashBack;
	private boolean withBonus;
	private boolean withMiles;
	private int withDepositRate;
	private String auditorium;
	private Double comissionSMS;
	private Double comissionCashInhouseOwn;
	private Double comissionCashInhouseOther;
	private Double comissionCashFCountry;
	private Double comissionCardToCard;
	private Double comissionQuasiCash;
	private MultiLangValue description;
	private MultiLangValue descriptionPD;
	private MultiLangValue descriptionDOC;
	private int cardImageId;

	public String getAdminToken() {
		return adminToken;
	}

	public void setAdminToken(String adminToken) {
		this.adminToken = adminToken;
	}

	public enumCommandTypes getCommandType() {
		return commandType;
	}

	public void setCommandType(enumCommandTypes commandType) {
		this.commandType = commandType;
	}

	public int getCdId() {
		return cdId;
	}

	public void setCdId(int cdId) {
		this.cdId = cdId;
	}

	public int getBankId() {
		return bankId;
	}

	public void setBankId(int bankId) {
		this.bankId = bankId;
	}

	public MultiLangValue getCardName() {
		return cardName;
	}

	public void setCardName(MultiLangValue cardName) {
		this.cardName = cardName;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public int getProdStatus() {
		return prodStatus;
	}

	public void setProdStatus(int prodStatus) {
		this.prodStatus = prodStatus;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getCardSystem() {
		return cardSystem;
	}

	public void setCardSystem(String cardSystem) {
		this.cardSystem = cardSystem;
	}

	public String getCardProduct() {
		return cardProduct;
	}

	public void setCardProduct(String cardProduct) {
		this.cardProduct = cardProduct;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public String getCardPeriod() {
		return cardPeriod;
	}

	public void setCardPeriod(String cardPeriod) {
		this.cardPeriod = cardPeriod;
	}

	public Double getSellAmount() {
		return sellAmount;
	}

	public void setSellAmount(Double sellAmount) {
		this.sellAmount = sellAmount;
	}

	public boolean isWithCashBack() {
		return withCashBack;
	}

	public void setWithCashBack(boolean withCashBack) {
		this.withCashBack = withCashBack;
	}

	public boolean isWithBonus() {
		return withBonus;
	}

	public void setWithBonus(boolean withBonus) {
		this.withBonus = withBonus;
	}

	public boolean isWithMiles() {
		return withMiles;
	}

	public void setWithMiles(boolean withMiles) {
		this.withMiles = withMiles;
	}

	public int getWithDepositRate() {
		return withDepositRate;
	}

	public void setWithDepositRate(int withDepositRate) {
		this.withDepositRate = withDepositRate;
	}

	public String getAuditorium() {
		return auditorium;
	}

	public void setAuditorium(String auditorium) {
		this.auditorium = auditorium;
	}

	public Double getComissionSMS() {
		return comissionSMS;
	}

	public void setComissionSMS(Double comissionSMS) {
		this.comissionSMS = comissionSMS;
	}

	public Double getComissionCashInhouseOwn() {
		return comissionCashInhouseOwn;
	}

	public void setComissionCashInhouseOwn(Double comissionCashInhouseOwn) {
		this.comissionCashInhouseOwn = comissionCashInhouseOwn;
	}

	public Double getComissionCashInhouseOther() {
		return comissionCashInhouseOther;
	}

	public void setComissionCashInhouseOther(Double comissionCashInhouseOther) {
		this.comissionCashInhouseOther = comissionCashInhouseOther;
	}

	public Double getComissionCashFCountry() {
		return comissionCashFCountry;
	}

	public void setComissionCashFCountry(Double comissionCashFCountry) {
		this.comissionCashFCountry = comissionCashFCountry;
	}

	public Double getComissionCardToCard() {
		return comissionCardToCard;
	}

	public void setComissionCardToCard(Double comissionCardToCard) {
		this.comissionCardToCard = comissionCardToCard;
	}

	public Double getComissionQuasiCash() {
		return comissionQuasiCash;
	}

	public void setComissionQuasiCash(Double comissionQuasiCash) {
		this.comissionQuasiCash = comissionQuasiCash;
	}

	public MultiLangValue getDescription() {
		return description;
	}

	public void setDescription(MultiLangValue description) {
		this.description = description;
	}

	public MultiLangValue getDescriptionPD() {
		return descriptionPD;
	}

	public void setDescriptionPD(MultiLangValue descriptionPD) {
		this.descriptionPD = descriptionPD;
	}

	public MultiLangValue getDescriptionDOC() {
		return descriptionDOC;
	}

	public void setDescriptionDOC(MultiLangValue descriptionDOC) {
		this.descriptionDOC = descriptionDOC;
	}

	public int getCardImageId() {
		return cardImageId;
	}

	public void setCardImageId(int cardImageId) {
		this.cardImageId = cardImageId;
	}

	@Override
	public String toString() {
		return "ReqCardDebetProducts [adminToken=" + adminToken + ", commandType=" + commandType + ", cdId=" + cdId
				+ ", bankId=" + bankId + ", cardName=" + cardName + ", currencyCode=" + currencyCode + ", prodStatus="
				+ prodStatus + ", priority=" + priority + ", cardSystem=" + cardSystem + ", cardProduct=" + cardProduct
				+ ", cardType=" + cardType + ", cardPeriod=" + cardPeriod + ", sellAmount=" + sellAmount
				+ ", withCashBack=" + withCashBack + ", withBonus=" + withBonus + ", withMiles=" + withMiles
				+ ", withDepositRate=" + withDepositRate + ", auditorium=" + auditorium + ", comissionSMS="
				+ comissionSMS + ", comissionCashInhouseOwn=" + comissionCashInhouseOwn + ", comissionCashInhouseOther="
				+ comissionCashInhouseOther + ", comissionCashFCountry=" + comissionCashFCountry
				+ ", comissionCardToCard=" + comissionCardToCard + ", comissionQuasiCash=" + comissionQuasiCash
				+ ", description=" + description + ", descriptionPD=" + descriptionPD + ", descriptionDOC="
				+ descriptionDOC + ", cardImageId=" + cardImageId + "]";
	}

}
