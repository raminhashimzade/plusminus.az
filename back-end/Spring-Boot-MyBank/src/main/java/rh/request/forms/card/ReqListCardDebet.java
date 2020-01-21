package rh.request.forms.card;

import com.common.Request;

public class ReqListCardDebet extends Request {
	private boolean withMiles;
	private boolean withDepositRate;
	private boolean withCashBack;
	private boolean comissionCash;
	private String currencyCode;
	private int period;

	public boolean isWithMiles() {
		return withMiles;
	}

	public void setWithMiles(boolean withMiles) {
		this.withMiles = withMiles;
	}

	public boolean isWithDepositRate() {
		return withDepositRate;
	}

	public void setWithDepositRate(boolean withDepositRate) {
		this.withDepositRate = withDepositRate;
	}

	public boolean isWithCashBack() {
		return withCashBack;
	}

	public void setWithCashBack(boolean withCashBack) {
		this.withCashBack = withCashBack;
	}

	public boolean isComissionCash() {
		return comissionCash;
	}

	public void setComissionCash(boolean comissionCash) {
		this.comissionCash = comissionCash;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public int getPeriod() {
		return period;
	}

	public void setPeriod(int period) {
		this.period = period;
	}

	@Override
	public String toString() {
		return "ReqListCardDebet [withMiles=" + withMiles + ", withDepositRate=" + withDepositRate + ", withCashBack="
				+ withCashBack + ", comissionCash=" + comissionCash + ", currencyCode=" + currencyCode + ", period="
				+ period + "]";
	}

}
