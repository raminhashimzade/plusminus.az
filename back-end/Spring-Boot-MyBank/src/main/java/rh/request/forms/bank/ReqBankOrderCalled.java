package rh.request.forms.bank;

import com.common.Request;

public class ReqBankOrderCalled extends Request {
	private String bankToken;
	private int bankID;
	private int orderId;
	private String bankNote;

	public String getBankToken() {
		return bankToken;
	}

	public void setBankToken(String bankToken) {
		this.bankToken = bankToken;
	}

	public int getBankID() {
		return bankID;
	}

	public void setBankID(int bankID) {
		this.bankID = bankID;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getBankNote() {
		return bankNote;
	}

	public void setBankNote(String bankNote) {
		this.bankNote = bankNote;
	}

	@Override
	public String toString() {
		return "ReqBankOrderCalled [bankToken=" + bankToken + ", bankID=" + bankID + ", orderId=" + orderId
				+ ", bankNote=" + bankNote + "]";
	}

}
