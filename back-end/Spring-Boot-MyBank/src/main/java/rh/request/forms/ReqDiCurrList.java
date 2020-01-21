package rh.request.forms;

import com.common.Request;

public class ReqDiCurrList extends Request{
	private String pageName;

	public String getPageName() {
		return pageName;
	}

	public void setPageName(String pageName) {
		this.pageName = pageName;
	}

	@Override
	public String toString() {
		return "ReqDiCurrList [pageName=" + pageName + "]";
	}
	
	
}
