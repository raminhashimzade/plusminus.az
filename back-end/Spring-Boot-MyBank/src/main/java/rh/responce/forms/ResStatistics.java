package rh.responce.forms;

public class ResStatistics {
	private int totalCustomers;
	private int totalLoanOrders;
	private int totalDepositOrders;
	private int totalCreditCardOrders;
	private int totalDebetCardOrders;

	public int getTotalCustomers() {
		return totalCustomers;
	}

	public void setTotalCustomers(int totalCustomers) {
		this.totalCustomers = totalCustomers;
	}

	public int getTotalLoanOrders() {
		return totalLoanOrders;
	}

	public void setTotalLoanOrders(int totalLoanOrders) {
		this.totalLoanOrders = totalLoanOrders;
	}

	public int getTotalDepositOrders() {
		return totalDepositOrders;
	}

	public void setTotalDepositOrders(int totalDepositOrders) {
		this.totalDepositOrders = totalDepositOrders;
	}

	public int getTotalCreditCardOrders() {
		return totalCreditCardOrders;
	}

	public void setTotalCreditCardOrders(int totalCreditCardOrders) {
		this.totalCreditCardOrders = totalCreditCardOrders;
	}

	public int getTotalDebetCardOrders() {
		return totalDebetCardOrders;
	}

	public void setTotalDebetCardOrders(int totalDebetCardOrders) {
		this.totalDebetCardOrders = totalDebetCardOrders;
	}

	@Override
	public String toString() {
		return "ResStatistics [totalCustomers=" + totalCustomers + ", totalLoanOrders=" + totalLoanOrders
				+ ", totalDepositOrders=" + totalDepositOrders + ", totalCreditCardOrders=" + totalCreditCardOrders
				+ ", totalDebetCardOrders=" + totalDebetCardOrders + "]";
	}

}
