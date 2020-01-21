package com.common;

public class Responce {
	private String success;
	private Object errorText;
	private Object data;	

	public String getSuccess() {
		return success;
	}
	public void setSuccess(String success) {
		this.success = success;
	}
	public Object getErrorText() {
		return errorText;
	}
	public void setErrorText(Object errorText) {
		this.errorText = errorText;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "Responce [success=" + success + ", errorText=" + errorText + ", data=" + data + "]";
	}
	
	
}
