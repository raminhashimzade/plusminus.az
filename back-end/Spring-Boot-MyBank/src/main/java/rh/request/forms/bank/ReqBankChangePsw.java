package rh.request.forms.bank;

import com.common.Request;

public class ReqBankChangePsw extends Request{
	private String bankToken;
	private int bankID;
	private String oldPassword;
	private String newPassword;

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

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "ReqBankChangePsw [bankToken=" + bankToken + ", bankID=" + bankID + ", oldPassword=" + oldPassword
				+ ", newPassword=" + newPassword + "]";
	}

}
