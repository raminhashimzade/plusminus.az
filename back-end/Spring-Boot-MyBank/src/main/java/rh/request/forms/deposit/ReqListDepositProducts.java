package rh.request.forms.deposit;

import com.common.Request;

public class ReqListDepositProducts extends Request {
	private boolean withCapitalisation;
	private boolean withWithdraw;
	private boolean withRefill;
	private boolean withAutoProloing;
	private double depositAmount;
	private int depositPeriod;
	private String depositCurrency;

	public ReqListDepositProducts(boolean withCapitalisation, boolean withWithdraw, boolean withRefill,
			boolean withAutoProloing, double depositAmount, int depositPeriod, String depositCurrency) {
		super();
		this.withCapitalisation = withCapitalisation;
		this.withWithdraw = withWithdraw;
		this.withRefill = withRefill;
		this.withAutoProloing = withAutoProloing;
		this.depositAmount = depositAmount;
		this.depositPeriod = depositPeriod;
		this.depositCurrency = depositCurrency;
	}

	public boolean isWithCapitalisation() {
		return withCapitalisation;
	}

	public void setWithCapitalisation(boolean withCapitalisation) {
		this.withCapitalisation = withCapitalisation;
	}

	public boolean isWithWithdraw() {
		return withWithdraw;
	}

	public void setWithWithdraw(boolean withWithdraw) {
		this.withWithdraw = withWithdraw;
	}

	public boolean isWithRefill() {
		return withRefill;
	}

	public void setWithRefill(boolean withRefill) {
		this.withRefill = withRefill;
	}

	public boolean isWithAutoProloing() {
		return withAutoProloing;
	}

	public void setWithAutoProloing(boolean withAutoProloing) {
		this.withAutoProloing = withAutoProloing;
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
		return "ReqListDepositProducts [withCapitalisation=" + withCapitalisation + ", withWithdraw=" + withWithdraw
				+ ", withRefill=" + withRefill + ", withAutoProloing=" + withAutoProloing + ", depositAmount="
				+ depositAmount + ", depositPeriod=" + depositPeriod + ", depositCurrency=" + depositCurrency + "]";
	}

}
