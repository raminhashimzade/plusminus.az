package rh.responce.forms.bank;

public class ResOrderStats {
	private int totalOrderCount;
	private int contactedCount;
	private int canceledCount;

	public ResOrderStats(int totalOrderCount, int contactedCount, int canceledCount) {
		super();
		this.totalOrderCount = totalOrderCount;
		this.contactedCount = contactedCount;
		this.canceledCount = canceledCount;
	}

	public int getTotalOrderCount() {
		return totalOrderCount;
	}

	public void setTotalOrderCount(int totalOrderCount) {
		this.totalOrderCount = totalOrderCount;
	}

	public int getContactedCount() {
		return contactedCount;
	}

	public void setContactedCount(int contactedCount) {
		this.contactedCount = contactedCount;
	}

	public int getCanceledCount() {
		return canceledCount;
	}

	public void setCanceledCount(int canceledCount) {
		this.canceledCount = canceledCount;
	}

	@Override
	public String toString() {
		return "ResOrderStats [totalOrderCount=" + totalOrderCount + ", contactedCount=" + contactedCount
				+ ", canceledCount=" + canceledCount + "]";
	}

}
