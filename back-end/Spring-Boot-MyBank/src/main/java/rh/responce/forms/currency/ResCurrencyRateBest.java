package rh.responce.forms.currency;

public class ResCurrencyRateBest {
	private String currencyCode;
	private int sortKey;
	private Object rates;

	public ResCurrencyRateBest() {
		super();
	}

	public ResCurrencyRateBest(String currencyCode, int sortKey, Object rates) {
		super();
		this.currencyCode = currencyCode;
		this.sortKey = sortKey;
		this.rates = rates;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public Object getRates() {
		return rates;
	}

	public void setRates(Object rates) {
		this.rates = rates;
	}

	public int getSortKey() {
		return sortKey;
	}

	public void setSortKey(int sortKey) {
		this.sortKey = sortKey;
	}

	@Override
	public String toString() {
		return "ResCurrencyRateBest [currencyCode=" + currencyCode + ", sortKey=" + sortKey + ", rates=" + rates + "]";
	}

}
