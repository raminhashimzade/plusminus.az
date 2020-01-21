package rh.request.forms.card;

import com.common.Request;

public class ReqListCardCredit extends Request{
	private boolean withEmpReference;
	private boolean withGracePeriod;
	private boolean withMiles;
	private boolean withDepositRate;
	private boolean withCashBack;
	private boolean comissionCash;
	private String currencyCode;
	private double loanAmount;
	private int loanPeriod;

	public boolean isWithEmpReference() {
		return withEmpReference;
	}

	public void setWithEmpReference(boolean withEmpReference) {
		this.withEmpReference = withEmpReference;
	}

	public boolean isWithGracePeriod() {
		return withGracePeriod;
	}

	public void setWithGracePeriod(boolean withGracePeriod) {
		this.withGracePeriod = withGracePeriod;
	}

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

	public double getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}

	public int getLoanPeriod() {
		return loanPeriod;
	}

	public void setLoanPeriod(int loanPeriod) {
		this.loanPeriod = loanPeriod;
	}

	@Override
	public String toString() {
		return "ReqListCardCredit [withEmpReference=" + withEmpReference + ", withGracePeriod=" + withGracePeriod
				+ ", withMiles=" + withMiles + ", withDepositRate=" + withDepositRate + ", withCashBack=" + withCashBack
				+ ", comissionCash=" + comissionCash + ", currencyCode=" + currencyCode + ", loanAmount=" + loanAmount
				+ ", loanPeriod=" + loanPeriod + "]";
	}

}
