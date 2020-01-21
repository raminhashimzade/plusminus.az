package rh.request.forms;

import com.common.Request;

public class ReqDiBankList extends Request {

	private boolean partner;

	public boolean isPartner() {
		return partner;
	}

	public void setPartner(boolean partner) {
		this.partner = partner;
	}

	@Override
	public String toString() {
		return "ReqDiBankList [partner=" + partner + "]";
	}

}
