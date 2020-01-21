package ztemp;

public class BankCurrencyRate {
	private String currencyCode;
	private double sellRate;
	private double buyRate;

	public BankCurrencyRate(String currencyCode, double sellRate, double buyRate) {
		super();
		this.currencyCode = currencyCode;
		this.sellRate = sellRate;
		this.buyRate = buyRate;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public double getSellRate() {
		return sellRate;
	}

	public void setSellRate(double sellRate) {
		this.sellRate = sellRate;
	}

	public double getBuyRate() {
		return buyRate;
	}

	public void setBuyRate(double buyRate) {
		this.buyRate = buyRate;
	}

	@Override
	public String toString() {
		return "BankCurrencyRate [currencyCode=" + currencyCode + ", sellRate=" + sellRate + ", buyRate=" + buyRate
				+ "]";
	}

}
