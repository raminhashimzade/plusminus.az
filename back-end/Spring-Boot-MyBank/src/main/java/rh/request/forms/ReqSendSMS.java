package rh.request.forms;

import com.common.Request;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReqSendSMS extends Request {

	@JsonProperty(required = true)
	private String gsm;
	@JsonProperty(required = true)
	private String text;
	private String source;
	private String packId;

	public String getPackId() {
		return packId;
	}

	public void setPackId(String packId) {
		this.packId = packId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getGsm() {
		return gsm;
	}

	public void setGsm(String gsm) {
		this.gsm = gsm;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return "ReqSendSMS [gsm=" + gsm + ", text=" + text + ", source=" + source + ", packId=" + packId + "]";
	}

}
