package rh.responce.forms.loan;

import java.util.ArrayList;

public class ResListLoanProductsG {
	private int bankID;
	private String bankName;
	private ArrayList<ResListLoanProducts> list;

	public ResListLoanProductsG(int bankID, String bankName, ArrayList<ResListLoanProducts> list) {
		super();
		this.bankID = bankID;
		this.bankName = bankName;
		this.list = list;
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

	public ArrayList<ResListLoanProducts> getList() {
		return list;
	}

	public void setList(ArrayList<ResListLoanProducts> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "ResGListLoanProducts [bankID=" + bankID + ", bankName=" + bankName + ", list=" + list + "]";
	}

}
