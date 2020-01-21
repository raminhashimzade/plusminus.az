package rh.responce.forms.card;

public class ResCardPeriod {
	private int periodId;
	private String period;

	public ResCardPeriod(int periodId, String period) {
		super();
		this.periodId = periodId;
		this.period = period;
	}

	public int getPeriodId() {
		return periodId;
	}

	public void setPeriodId(int periodId) {
		this.periodId = periodId;
	}

	public String getPeriod() {
		return period;
	}

	public void setPeriod(String period) {
		this.period = period;
	}

	@Override
	public String toString() {
		return "ReCardPeriod [periodId=" + periodId + ", period=" + period + "]";
	}

}
