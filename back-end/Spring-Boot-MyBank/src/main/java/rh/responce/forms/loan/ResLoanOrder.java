package rh.responce.forms.loan;

public class ResLoanOrder {
	private int orderId;

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	@Override
	public String toString() {
		return "ResLoanRequest [orderId=" + orderId + "]";
	}

}
