package rh.request.forms.bank;

import com.common.Request;

public class ReqOrderStats extends Request {
	private String bankToken;

	public String getBankToken() {
		return bankToken;
	}

	public void setBankToken(String bankToken) {
		this.bankToken = bankToken;
	}

	@Override
	public String toString() {
		return "ReqOrderStats [bankToken=" + bankToken + "]";
	}

}
