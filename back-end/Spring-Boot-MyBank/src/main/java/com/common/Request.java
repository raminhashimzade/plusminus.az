package com.common;

public class Request {
	private String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	@Override
	public String toString() {
		return "Request [token=" + token + "]";
	}

}
