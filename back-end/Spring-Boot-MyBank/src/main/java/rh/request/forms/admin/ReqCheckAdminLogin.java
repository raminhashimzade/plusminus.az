package rh.request.forms.admin;

import com.common.Request;

public class ReqCheckAdminLogin extends Request {
	private String login;
	private String password;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "ReqCheckAdminLogin [login=" + login + ", password=" + password + "]";
	}

}
