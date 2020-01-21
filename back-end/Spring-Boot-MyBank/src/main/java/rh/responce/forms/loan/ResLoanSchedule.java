package rh.responce.forms.loan;

public class ResLoanSchedule {
	private int id;
	private double interest;
	private double pricipal;
	private double balance;
	private double monthlyPayment;
	private double totalPayed;

	public ResLoanSchedule(int id, double interest, double pricipal, double balance, double monthlyPayment,
			double totalPayed) {
		super();
		this.id = id;
		this.interest = interest;
		this.pricipal = pricipal;
		this.balance = balance;
		this.monthlyPayment = monthlyPayment;
		this.totalPayed = totalPayed;
	}

	public double getTotalPayed() {
		return totalPayed;
	}

	public void setTotalPayed(double totalPayed) {
		this.totalPayed = totalPayed;
	}

	public double getMonthlyPayment() {
		return monthlyPayment;
	}

	public void setMonthlyPayment(double monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getInterest() {
		return interest;
	}

	public void setInterest(double interest) {
		this.interest = interest;
	}

	public double getPricipal() {
		return pricipal;
	}

	public void setPricipal(double pricipal) {
		this.pricipal = pricipal;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "ResLoanSchedule [id=" + id + ", interest=" + interest + ", pricipal=" + pricipal + ", balance="
				+ balance + ", monthlyPayment=" + monthlyPayment + ", totalPayed=" + totalPayed + "]";
	}

}
