package rh.request.forms;

import com.common.Request;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReqSendSMSToken extends Request {

	@JsonProperty(required = true)
	private String gsm;
	@JsonProperty(required = true)
	private String channel;

	public String getGsm() {
		return gsm;
	}

	public void setGsm(String gsm) {
		this.gsm = gsm;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	@Override
	public String toString() {
		return "ReqSendSMSToken [gsm=" + gsm + ", channel=" + channel + "]";
	}

}
