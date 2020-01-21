package com.common;

import java.sql.Date;

public class Standart {

	private Date dateTime;
	private int status;
	private Date dateFrom;
	private Date dateUntil;

	public Standart(Date dateTime, int status, Date dateFrom, Date dateUntil) {
		super();
		this.dateTime = dateTime;
		this.status = status;
		this.dateFrom = dateFrom;
		this.dateUntil = dateUntil;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Date getDateFrom() {
		return dateFrom;
	}

	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}

	public Date getDateUntil() {
		return dateUntil;
	}

	public void setDateUntil(Date dateUntil) {
		this.dateUntil = dateUntil;
	}

	@Override
	public String toString() {
		return "Standart [dateTime=" + dateTime + ", status=" + status + ", dateFrom=" + dateFrom + ", dateUntil="
				+ dateUntil + "]";
	}

}
