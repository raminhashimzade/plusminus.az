package rh.responce.forms.bank;

public class ResBankOrderList {
	private String dateTime;
	private int rqId;
	private String currencyCode;
	private double requestAmt;
	private double requestPeriod;
	private String cusName;
	private int age;
	private boolean official;
	private boolean voen;
	private boolean unOfficial;
	private double income;
	private double guarantor;
	private double monthlyPayment;
	private boolean called;
	private String bankNote;

	public ResBankOrderList(String dateTime, int rqId, String currencyCode, double requestAmt, double requestPeriod,
			String cusName, int age, boolean official, boolean voen, boolean unOfficial, double income,
			double guarantor, double monthlyPayment, boolean called, String bankNote) {
		super();
		this.dateTime = dateTime;
		this.rqId = rqId;
		this.currencyCode = currencyCode;
		this.requestAmt = requestAmt;
		this.requestPeriod = requestPeriod;
		this.cusName = cusName;
		this.age = age;
		this.official = official;
		this.voen = voen;
		this.unOfficial = unOfficial;
		this.income = income;
		this.guarantor = guarantor;
		this.monthlyPayment = monthlyPayment;
		this.called = called;
		this.bankNote = bankNote;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public int getRqId() {
		return rqId;
	}

	public void setRqId(int rqId) {
		this.rqId = rqId;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public double getRequestAmt() {
		return requestAmt;
	}

	public void setRequestAmt(double requestAmt) {
		this.requestAmt = requestAmt;
	}

	public double getRequestPeriod() {
		return requestPeriod;
	}

	public void setRequestPeriod(double requestPeriod) {
		this.requestPeriod = requestPeriod;
	}

	public String getCusName() {
		return cusName;
	}

	public void setCusName(String cusName) {
		this.cusName = cusName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public boolean isOfficial() {
		return official;
	}

	public void setOfficial(boolean official) {
		this.official = official;
	}

	public boolean isVoen() {
		return voen;
	}

	public void setVoen(boolean voen) {
		this.voen = voen;
	}

	public boolean isUnOfficial() {
		return unOfficial;
	}

	public void setUnOfficial(boolean unOfficial) {
		this.unOfficial = unOfficial;
	}

	public double getIncome() {
		return income;
	}

	public void setIncome(double income) {
		this.income = income;
	}

	public double getGuarantor() {
		return guarantor;
	}

	public void setGuarantor(double guarantor) {
		this.guarantor = guarantor;
	}

	public double getMonthlyPayment() {
		return monthlyPayment;
	}

	public void setMonthlyPayment(double monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}

	public boolean isCalled() {
		return called;
	}

	public void setCalled(boolean called) {
		this.called = called;
	}

	public String getBankNote() {
		return bankNote;
	}

	public void setBankNote(String bankNote) {
		this.bankNote = bankNote;
	}

	@Override
	public String toString() {
		return "ResBankOrderList [dateTime=" + dateTime + ", rqId=" + rqId + ", currencyCode=" + currencyCode
				+ ", requestAmt=" + requestAmt + ", requestPeriod=" + requestPeriod + ", cusName=" + cusName + ", age="
				+ age + ", official=" + official + ", voen=" + voen + ", unOfficial=" + unOfficial + ", income="
				+ income + ", guarantor=" + guarantor + ", monthlyPayment=" + monthlyPayment + ", called=" + called
				+ ", bankNote=" + bankNote + "]";
	}

}
