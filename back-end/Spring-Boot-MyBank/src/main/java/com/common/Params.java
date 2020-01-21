package com.common;

import java.sql.Date;

public class Params {

	private Date dateTime;
	private String parameterNameKey;
	private String parameterValue;

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public String getParameterNameKey() {
		return parameterNameKey;
	}

	public void setParameterNameKey(String parameterNameKey) {
		this.parameterNameKey = parameterNameKey;
	}

	public String getParameterValue() {
		return parameterValue;
	}

	public void setParameterValue(String parameterValue) {
		this.parameterValue = parameterValue;
	}

	@Override
	public String toString() {
		return "Params [dateTime=" + dateTime + ", parameterNameKey=" + parameterNameKey + ", parameterValue="
				+ parameterValue + "]";
	}

}
