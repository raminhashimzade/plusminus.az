package rh.responce.forms.currency;

import java.util.ArrayList;

public class ResDiCurrList {

	private ArrayList<String> currencyCode;

	public ArrayList<String> getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(ArrayList<String> currencyCode) {
		this.currencyCode = currencyCode;
	}

	public ResDiCurrList(ArrayList<String> currencyCode) {
		super();
		this.currencyCode = currencyCode;
	}

	@Override
	public String toString() {
		return "ResDiCurrList [currencyCode=" + currencyCode + "]";
	}

}
