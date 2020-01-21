package rh.request.forms.bank;

import com.common.Request;

public class ReqBankOrderList extends Request {
	private String bankToken;
	private boolean called;
	private boolean cancelled;

	public String getBankToken() {
		return bankToken;
	}

	public void setBankToken(String bankToken) {
		this.bankToken = bankToken;
	}

	public boolean isCalled() {
		return called;
	}

	public void setCalled(boolean called) {
		this.called = called;
	}

	public boolean isCancelled() {
		return cancelled;
	}

	public void setCancelled(boolean cancelled) {
		this.cancelled = cancelled;
	}

	@Override
	public String toString() {
		return "ReqBankOrderList [bankToken=" + bankToken + ", called=" + called + ", cancelled=" + cancelled + "]";
	}

}
