package rh.request.forms.bank;

import com.common.Request;

public class ReqLoanOrderCheckLink extends Request {
	private String linkHash;
	private String orderID;
	private int bankID;
	private String bankToken;

	public String getLinkHash() {
		return linkHash;
	}

	public void setLinkHash(String linkHash) {
		this.linkHash = linkHash;
	}

	public String getOrderID() {
		return orderID;
	}

	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}

	public int getBankID() {
		return bankID;
	}

	public void setBankID(int bankID) {
		this.bankID = bankID;
	}

	public String getBankToken() {
		return bankToken;
	}

	public void setBankToken(String bankToken) {
		this.bankToken = bankToken;
	}

	@Override
	public String toString() {
		return "ReqLoanOrderCheckLink [linkHash=" + linkHash + ", orderID=" + orderID + ", bankID=" + bankID
				+ ", bankToken=" + bankToken + "]";
	}

}
