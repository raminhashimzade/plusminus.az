package rh.responce.forms.admin;

public class ResCheckAdminLogin {
	private String token;

	public ResCheckAdminLogin() {
		super();	
	}

	public ResCheckAdminLogin(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
