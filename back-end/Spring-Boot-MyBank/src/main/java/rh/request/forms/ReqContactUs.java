package rh.request.forms;

import com.common.Request;

public class ReqContactUs extends Request {

	private String cusMobilePhone;
	private String messageSubject;
	private String messageBody;

	public ReqContactUs(String cusMobilePhone, String messageSubject, String messageBody) {
		super();
		this.cusMobilePhone = cusMobilePhone;
		this.messageSubject = messageSubject;
		this.messageBody = messageBody;
	}

	public String getCusMobilePhone() {
		return cusMobilePhone;
	}

	public void setCusMobilePhone(String cusMobilePhone) {
		this.cusMobilePhone = cusMobilePhone;
	}

	public String getMessageSubject() {
		return messageSubject;
	}

	public void setMessageSubject(String messageSubject) {
		this.messageSubject = messageSubject;
	}

	public String getMessageBody() {
		return messageBody;
	}

	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}

	@Override
	public String toString() {
		return "ReqContactUs [cusMobilePhone=" + cusMobilePhone + ", messageSubject=" + messageSubject
				+ ", messageBody=" + messageBody + "]";
	}

}
