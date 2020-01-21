package com.common;

public class MultiLangValue {

	private String az;
	private String ru;
	private String en;
	
	
	
	public MultiLangValue(String az, String ru, String en) {
		super();
		this.az = az;
		this.ru = ru;
		this.en = en;
	}

	public void reset() {
		this.az = "";
		this.ru = "";
		this.en = "";
	}

	public String getAz() {
		return az;
	}

	public void setAz(String az) {
		this.az = az;
	}

	public String getRu() {
		return ru;
	}

	public void setRu(String ru) {
		this.ru = ru;
	}

	public String getEn() {
		return en;
	}

	public void setEn(String en) {
		this.en = en;
	}

	@Override
	public String toString() {
		return "MultiLangValue [az=" + az + ", ru=" + ru + ", en=" + en + "]";
	}

}
