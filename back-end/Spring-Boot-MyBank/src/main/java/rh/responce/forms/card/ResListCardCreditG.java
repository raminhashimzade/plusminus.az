package rh.responce.forms.card;

import java.util.ArrayList;

public class ResListCardCreditG {
	private int bankID;
	private String bankName;
	private ArrayList<ResListCardCredit> list;

	public ResListCardCreditG(int bankID, String bankName, ArrayList<ResListCardCredit> list) {
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

	public ArrayList<ResListCardCredit> getList() {
		return list;
	}

	public void setList(ArrayList<ResListCardCredit> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "ResListCardCreditG [bankID=" + bankID + ", bankName=" + bankName + ", list=" + list + "]";
	}

}
