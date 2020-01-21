package rh.request.forms.bank;

import com.common.Request;

public class ReqBankOrderShowInfo extends Request {
	private String bankToken;
	private int bankID;
	private int orderId;
	
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


	@Override
	public String toString() {
		return "ReqBankOrderShowInfo [bankToken=" + bankToken 
				+ ", bankID=" + bankID + ", orderId=" + orderId + "]";
	}

}
