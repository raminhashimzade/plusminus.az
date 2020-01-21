package rh.request.forms.admin;

import com.common.Request;

public class ReqPostFile extends Request {
	private String adminToken;
	private String file;
	private String fileName;
	private String module;

	public String getAdminToken() {
		return adminToken;
	}

	public void setAdminToken(String adminToken) {
		this.adminToken = adminToken;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	@Override
	public String toString() {
		return "ReqPostFile [adminToken=" + adminToken + ", file=" + file + ", fileName=" + fileName + ", module="
				+ module + "]";
	}

}
