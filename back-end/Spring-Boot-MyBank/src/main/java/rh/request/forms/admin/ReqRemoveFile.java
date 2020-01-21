package rh.request.forms.admin;

import com.common.Request;

public class ReqRemoveFile extends Request{
	private String adminToken;
	private int fileID;

	public String getAdminToken() {
		return adminToken;
	}

	public void setAdminToken(String adminToken) {
		this.adminToken = adminToken;
	}

	public int getFileID() {
		return fileID;
	}

	public void setFileID(int fileID) {
		this.fileID = fileID;
	}

	@Override
	public String toString() {
		return "ReqRemoveFile [adminToken=" + adminToken + ", fileID=" + fileID + "]";
	}

}
