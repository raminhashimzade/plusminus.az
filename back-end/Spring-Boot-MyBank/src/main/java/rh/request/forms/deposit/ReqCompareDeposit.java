package rh.request.forms.deposit;

import rh.request.forms.ReqCompare;

public class ReqCompareDeposit extends ReqCompare {
	private double depositAmount;
	private int depositPeriod;
	private String depositCurrency;

	public ReqCompareDeposit(double depositAmount, int depositPeriod, String depositCurrency) {
		super();
		this.depositAmount = depositAmount;
		this.depositPeriod = depositPeriod;
		this.depositCurrency = depositCurrency;
	}

	public double getDepositAmount() {
		return depositAmount;
	}

	public void setDepositAmount(double depositAmount) {
		this.depositAmount = depositAmount;
	}

	public int getDepositPeriod() {
		return depositPeriod;
	}

	public void setDepositPeriod(int depositPeriod) {
		this.depositPeriod = depositPeriod;
	}

	public String getDepositCurrency() {
		return depositCurrency;
	}

	public void setDepositCurrency(String depositCurrency) {
		this.depositCurrency = depositCurrency;
	}

	@Override
	public String toString() {
		return "ReqCompareDeposit [depositAmount=" + depositAmount + ", depositPeriod=" + depositPeriod
				+ ", depositCurrency=" + depositCurrency + "]";
	}

}
