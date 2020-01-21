package rh.responce.forms.loan;

public class ResLoanOrderShowInfo {
	private int custId;
	private String mobilePhone;
	private String email;
	private String birthDate;

	public ResLoanOrderShowInfo(int custId, String mobilePhone, String email, String birthDate) {
		super();
		this.custId = custId;
		this.mobilePhone = mobilePhone;
		this.email = email;
		this.birthDate = birthDate;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getMobilePhone() {
		return mobilePhone;
	}

	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBithDate() {
		return birthDate;
	}

	public void setBithDate(String bithDate) {
		this.birthDate = bithDate;
	}

	@Override
	public String toString() {
		return "ResLoanOrderShowInfo [custId=" + custId + ", mobilePhone=" + mobilePhone + ", email=" + email
				+ ", birthDate=" + birthDate + "]";
	}

}
