package rh.responce.forms;

public class ResGetFileById {

	private String file;
	private String fileExt;

	public ResGetFileById(String file, String fileExt) {
		super();
		this.file = file;
		this.fileExt = fileExt;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}

	public String getFileExt() {
		return fileExt;
	}

	public void setFileExt(String fileExt) {
		this.fileExt = fileExt;
	}

	@Override
	public String toString() {
		return "ResGetFileById [fileExt=" + fileExt + "]";
	}

}
