package rh.request.forms.loan;

import com.common.Request;

public class ReqLoanOrderComplete extends Request {
	private String linkHash;
	private int orderId;
	private int status;
	private int partnerId;

	public String getLinkHash() {
		return linkHash;
	}

	public void setLinkHash(String linkHash) {
		this.linkHash = linkHash;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getPartnerId() {
		return partnerId;
	}

	public void setPartnerId(int partnerId) {
		this.partnerId = partnerId;
	}

	@Override
	public String toString() {
		return "ReqLoanOrderComplete [linkHash=" + linkHash + ", orderId=" + orderId + ", status=" + status
				+ ", partnerId=" + partnerId + "]";
	}

}
