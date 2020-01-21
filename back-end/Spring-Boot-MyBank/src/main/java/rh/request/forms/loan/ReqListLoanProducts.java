package rh.request.forms.loan;

import com.common.Request;

public class ReqListLoanProducts extends Request {
	private boolean withEmpReference;
	private boolean withCollateral;
	private boolean withGracePeriod;
	private boolean comissionCash;
	private boolean comissionLoan;
	private double loanAmount;
	private int loanPeriod;
	private String loanCurrency;
	private boolean mortgage;

	public boolean isWithEmpReference() {
		return withEmpReference;
	}

	public void setWithEmpReference(boolean withEmpReference) {
		this.withEmpReference = withEmpReference;
	}

	public boolean isWithCollateral() {
		return withCollateral;
	}

	public void setWithCollateral(boolean withCollateral) {
		this.withCollateral = withCollateral;
	}

	public boolean isWithGracePeriod() {
		return withGracePeriod;
	}

	public void setWithGracePeriod(boolean withGracePeriod) {
		this.withGracePeriod = withGracePeriod;
	}

	public boolean isComissionCash() {
		return comissionCash;
	}

	public void setComissionCash(boolean comissionCash) {
		this.comissionCash = comissionCash;
	}

	public boolean isComissionLoan() {
		return comissionLoan;
	}

	public void setComissionLoan(boolean comissionLoan) {
		this.comissionLoan = comissionLoan;
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

	public String getLoanCurrency() {
		return loanCurrency;
	}

	public void setLoanCurrency(String loanCurrency) {
		this.loanCurrency = loanCurrency;
	}

	public boolean isMortgage() {
		return mortgage;
	}

	public void setMortgage(boolean mortgage) {
		this.mortgage = mortgage;
	}

	@Override
	public String toString() {
		return "ReqListLoanProducts [withEmpReference=" + withEmpReference + ", withCollateral=" + withCollateral
				+ ", withGracePeriod=" + withGracePeriod + ", comissionCash=" + comissionCash + ", comissionLoan="
				+ comissionLoan + ", loanAmount=" + loanAmount + ", loanPeriod=" + loanPeriod + ", loanCurrency="
				+ loanCurrency + ", mortgage=" + mortgage + "]";
	}

}
