package rh.responce.forms.card;

import com.common.MultiLangValue;

public class ResListCardDebet {
	private int cdID;
	private int bankID;
	private String bankName;
	private MultiLangValue cardName;
	private String currencyCode;
	private String cardSystem;
	private String cardProduct;
	private String cardType;
	private String cardPeriod;
	private Double sellAmount;
	private Boolean withCashBack;
	private Boolean withBonus;
	private Boolean withMiles;
	private Double withDepositRate;
	private String auditorium;
	private Double comissionSMS;
	private Double comissionCashInhouseOwn;
	private Double comissionCashInhouseOther;
	private Double comissionCashFCountry;
	private Double comissionCardToCard;
	private Double comissionQuasiCash;
	private MultiLangValue description;
	private MultiLangValue descriptionDOC;
	private int cardImageId;
	private String website;

	public int getCdID() {
		return cdID;
	}

	public void setCdID(int cdID) {
		this.cdID = cdID;
	}

	public int getBankID() {
		return bankID;
	}

	public void setBankID(int bankID) {
		this.bankID = bankID;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
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

	public Boolean getWithCashBack() {
		return withCashBack;
	}

	public void setWithCashBack(Boolean withCashBack) {
		this.withCashBack = withCashBack;
	}

	public Boolean getWithBonus() {
		return withBonus;
	}

	public void setWithBonus(Boolean withBonus) {
		this.withBonus = withBonus;
	}

	public Boolean getWithMiles() {
		return withMiles;
	}

	public void setWithMiles(Boolean withMiles) {
		this.withMiles = withMiles;
	}

	public Double getWithDepositRate() {
		return withDepositRate;
	}

	public void setWithDepositRate(Double withDepositRate) {
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

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	@Override
	public String toString() {
		return "ResListCardDebet [cdID=" + cdID + ", bankID=" + bankID + ", bankName=" + bankName + ", cardName="
				+ cardName + ", currencyCode=" + currencyCode + ", cardSystem=" + cardSystem + ", cardProduct="
				+ cardProduct + ", cardType=" + cardType + ", cardPeriod=" + cardPeriod + ", sellAmount=" + sellAmount
				+ ", withCashBack=" + withCashBack + ", withBonus=" + withBonus + ", withMiles=" + withMiles
				+ ", withDepositRate=" + withDepositRate + ", auditorium=" + auditorium + ", comissionSMS="
				+ comissionSMS + ", comissionCashInhouseOwn=" + comissionCashInhouseOwn + ", comissionCashInhouseOther="
				+ comissionCashInhouseOther + ", comissionCashFCountry=" + comissionCashFCountry
				+ ", comissionCardToCard=" + comissionCardToCard + ", comissionQuasiCash=" + comissionQuasiCash
				+ ", description=" + description + ", descriptionDOC=" + descriptionDOC + ", cardImageId=" + cardImageId
				+ ", website=" + website + "]";
	}

}
