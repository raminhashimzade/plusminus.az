package rh.responce.forms.currency;

import java.sql.Date;

public class ResCurrencyArchiveRate {

	private double rate;
	private Date date;

	public ResCurrencyArchiveRate(double rate, Date date) {
		super();
		this.rate = rate;
		this.date = date;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "ResCurrencyArchiveRate [rate=" + rate + ", date=" + date + "]";
	}

}
