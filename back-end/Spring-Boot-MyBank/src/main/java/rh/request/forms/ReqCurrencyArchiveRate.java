package rh.request.forms;

import com.common.Request;

public class ReqCurrencyArchiveRate extends Request {
	private String currencyCode;
	private String datefrom;
	private String dateUntil;

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public String getDatefrom() {
		return datefrom;
	}

	public void setDatefrom(String datefrom) {
		this.datefrom = datefrom;
	}

	public String getDateUntil() {
		return dateUntil;
	}

	public void setDateUntil(String dateUntil) {
		this.dateUntil = dateUntil;
	}

	@Override
	public String toString() {
		return "ReqCurrencyArchiveRate [currencyCode=" + currencyCode + ", datefrom=" + datefrom + ", dateUntil="
				+ dateUntil + "]";
	}

}
