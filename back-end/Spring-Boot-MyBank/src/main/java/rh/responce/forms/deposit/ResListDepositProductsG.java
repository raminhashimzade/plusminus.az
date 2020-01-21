package rh.responce.forms.deposit;

import java.util.ArrayList;

public class ResListDepositProductsG {

	private int bankID;
	private String bankName;
	private ArrayList<ResListDepositProducts> list;

	public ResListDepositProductsG(int bankID, String bankName, ArrayList<ResListDepositProducts> list) {
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

	public ArrayList<ResListDepositProducts> getList() {
		return list;
	}

	public void setList(ArrayList<ResListDepositProducts> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "ResGListDepositProducts [bankID=" + bankID + ", bankName=" + bankName + ", list=" + list + "]";
	}

}
