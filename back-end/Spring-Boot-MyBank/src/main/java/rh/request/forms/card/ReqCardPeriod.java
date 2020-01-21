package rh.request.forms.card;

import com.common.Request;

public class ReqCardPeriod extends Request {
	private String cardType;

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	@Override
	public String toString() {
		return "ReqCardPeriod [cardType=" + cardType + "]";
	}

}
