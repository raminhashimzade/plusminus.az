package rh.request.forms.loan;

import com.common.Request;

public class ReqLoanSchedule extends Request {
	private double loanAmount;
	private int loanPeriod;
	private double loanInt;

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

	public double getLoanInt() {
		return loanInt;
	}

	public void setLoanInt(double loanInt) {
		this.loanInt = loanInt;
	}

	@Override
	public String toString() {
		return "ReqLoanSchedule [loanAmount=" + loanAmount + ", loanPeriod=" + loanPeriod + ", loanInt=" + loanInt
				+ "]";
	}

}
