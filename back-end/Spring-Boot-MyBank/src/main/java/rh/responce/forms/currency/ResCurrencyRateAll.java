package rh.responce.forms.currency;

public class ResCurrencyRateAll {

	private int bankId;
	private String bankName;
	private Object bankCurrRate;

	public ResCurrencyRateAll(int bankId, String bankName, Object bankCurrRate) {
		super();
		this.bankId = bankId;
		this.bankName = bankName;
		this.bankCurrRate = bankCurrRate;
	}

	public ResCurrencyRateAll() {
		super();
	}

	public int getBankId() {
		return bankId;
	}

	public void setBankId(int bankId) {
		this.bankId = bankId;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public Object getBankCurrRate() {
		return bankCurrRate;
	}

	public void setBankCurrRate(Object bankCurrRate) {
		this.bankCurrRate = bankCurrRate;
	}

	@Override
	public String toString() {
		return "BankCurrency [bankCurrRate=" + bankCurrRate + "]";
	}

}
