package rh.responce.forms;

public class ResDiBankList {

	private int bankID;
	private String bankName;
	private String bankPhone;
	private String bankEmail;
	private String bankCallCenter;
	private String bankWebSite;
	private String bankMapLink;

	public ResDiBankList(String bankID, String bankName, String bankPhone, String bankEmail, String bankCallCenter,
			String bankWebSite, String bankMapLink) {
		super();
		this.bankID = Integer.parseInt(bankID);
		this.bankName = bankName;
		this.bankPhone = bankPhone;
		this.bankEmail = bankEmail;
		this.bankCallCenter = bankCallCenter;
		this.bankWebSite = bankWebSite;
		this.bankMapLink = bankMapLink;
	}

	public int getBankID() {
		return bankID;
	}

	public void setBankID(int bankID) {
		this.bankID = bankID;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getBankPhone() {
		return bankPhone;
	}

	public void setBankPhone(String bankPhone) {
		this.bankPhone = bankPhone;
	}

	public String getBankEmail() {
		return bankEmail;
	}

	public void setBankEmail(String bankEmail) {
		this.bankEmail = bankEmail;
	}

	public String getBankCallCenter() {
		return bankCallCenter;
	}

	public void setBankCallCenter(String bankCallCenter) {
		this.bankCallCenter = bankCallCenter;
	}

	public String getBankWebSite() {
		return bankWebSite;
	}

	public void setBankWebSite(String bankWebSite) {
		this.bankWebSite = bankWebSite;
	}

	public String getBankMapLink() {
		return bankMapLink;
	}

	public void setBankMapLink(String bankMapLink) {
		this.bankMapLink = bankMapLink;
	}

	@Override
	public String toString() {
		return "DiBanks [bankID=" + bankID + ", bankName=" + bankName + ", bankPhone=" + bankPhone + ", bankEmail="
				+ bankEmail + ", bankCallCenter=" + bankCallCenter + ", bankWebSite=" + bankWebSite + ", bankMapLink="
				+ bankMapLink + "]";
	}

}
