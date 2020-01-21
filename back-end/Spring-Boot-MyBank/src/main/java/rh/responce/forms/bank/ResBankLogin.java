package rh.responce.forms.bank;

public class ResBankLogin {
	private String token;
	private int bankId;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public int getBankId() {
		return bankId;
	}

	public void setBankId(int bankId) {
		this.bankId = bankId;
	}

	@Override
	public String toString() {
		return "ResBankLogin [token=" + token + ", bankId=" + bankId + "]";
	}

}
