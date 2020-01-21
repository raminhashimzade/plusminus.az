package rh.responce.forms.card;

import java.util.ArrayList;

public class ResListCardDebetG {
	private int bankID;
	private String bankName;
	private ArrayList<ResListCardDebet> list;

	public ResListCardDebetG(int bankID, String bankName, ArrayList<ResListCardDebet> list) {
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

	public ArrayList<ResListCardDebet> getList() {
		return list;
	}

	public void setList(ArrayList<ResListCardDebet> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "ResListCardDebetG [bankID=" + bankID + ", bankName=" + bankName + ", list=" + list + "]";
	}

}
