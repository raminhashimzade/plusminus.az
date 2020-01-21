package ztemp;

import java.sql.Date;

import com.common.Standart;


public class BankCard extends Standart {
	
	public BankCard(Date dateTime, int status, Date dateFrom, Date dateUntil) {
		super(dateTime, status, dateFrom, dateUntil);
	}

	private int cdID;
	private int bankID;
	private String CardNameKey;
	private int currencyCode;
	private String cardSystem;
	private String cardProduct;
	private String cardType;
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
	public String getCardNameKey() {
		return CardNameKey;
	}
	public void setCardNameKey(String cardNameKey) {
		CardNameKey = cardNameKey;
	}
	public int getCurrencyCode() {
		return currencyCode;
	}
	public void setCurrencyCode(int currencyCode) {
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
	
	@Override
	public String toString() {
		return "BankCard [cdID=" + cdID + 
					   ", bankID=" + bankID + 
					   ", CardNameKey=" + CardNameKey + 
					   ", currencyCode=" + currencyCode + 
					   ", cardSystem=" + cardSystem + 
					   ", cardProduct=" + cardProduct + 
					   ", cardType=" + cardType + "]";
	}
	
	

}
