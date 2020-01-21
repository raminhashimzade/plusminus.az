package rh.request.forms;

import com.common.Request;

public class ReqGetFileById extends Request {
	private int fileId;

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	@Override
	public String toString() {
		return "ReqGetFileById [fileId=" + fileId + "]";
	}

}
