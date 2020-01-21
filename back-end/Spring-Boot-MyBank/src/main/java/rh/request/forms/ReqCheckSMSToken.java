package rh.request.forms;

import com.common.Request;

public class ReqCheckSMSToken extends Request {
	private String gsm;
	private int otp;

	public String getGsm() {
		return gsm;
	}

	public void setGsm(String gsm) {
		this.gsm = gsm;
	}

	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}

	@Override
	public String toString() {
		return "ReqCheckSMSToken [gsm=" + gsm + ", otp=" + otp + "]";
	}

}
