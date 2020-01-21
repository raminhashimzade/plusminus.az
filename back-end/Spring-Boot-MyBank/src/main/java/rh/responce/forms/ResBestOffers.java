package rh.responce.forms;

public class ResBestOffers {
	private String bankName;
	private String offerName;
	private String leftTop;
	private String leftButtom;
	private String rightTop;
	private String rightButtom;
	private String webLink;

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getOfferName() {
		return offerName;
	}

	public void setOfferName(String offerName) {
		this.offerName = offerName;
	}

	public String getLeftTop() {
		return leftTop;
	}

	public void setLeftTop(String leftTop) {
		this.leftTop = leftTop;
	}

	public String getLeftButtom() {
		return leftButtom;
	}

	public void setLeftButtom(String leftButtom) {
		this.leftButtom = leftButtom;
	}

	public String getRightTop() {
		return rightTop;
	}

	public void setRightTop(String rightTop) {
		this.rightTop = rightTop;
	}

	public String getRightButtom() {
		return rightButtom;
	}

	public void setRightButtom(String rightButtom) {
		this.rightButtom = rightButtom;
	}

	public String getWebLink() {
		return webLink;
	}

	public void setWebLink(String webLink) {
		this.webLink = webLink;
	}

	@Override
	public String toString() {
		return "ResBestOffers [bankName=" + bankName + ", offerName=" + offerName + ", leftTop=" + leftTop
				+ ", leftButtom=" + leftButtom + ", rightTop=" + rightTop + ", rightButtom=" + rightButtom
				+ ", webLink=" + webLink + "]";
	}

}
