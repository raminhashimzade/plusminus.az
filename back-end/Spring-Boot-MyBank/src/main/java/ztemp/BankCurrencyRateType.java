package ztemp;

public class BankCurrencyRateType {
	private String rateType;
	private Object rate;

	public BankCurrencyRateType(String rateType, Object rate) {
		super();
		this.rateType = rateType;
		this.rate = rate;
	}

	public String getRateType() {
		return rateType;
	}

	public void setRateType(String rateType) {
		this.rateType = rateType;
	}

	public Object getRate() {
		return rate;
	}

	public void setRate(Object rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "BankCurrencyRateType [rateType=" + rateType + ", rate=" + rate + "]";
	}

}
