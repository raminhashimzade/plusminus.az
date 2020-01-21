package rh.request.forms;

import com.common.Request;

public class ReqRateCompany extends Request {
	private String companyId;
	private String companyType;
	private int vote;
	private String gsm;

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public int getVote() {
		return vote;
	}

	public void setVote(int vote) {
		this.vote = vote;
	}

	public String getGsm() {
		return gsm;
	}

	public void setGsm(String gsm) {
		this.gsm = gsm;
	}

	@Override
	public String toString() {
		return "ReqRateCompany [companyId=" + companyId + ", companyType=" + companyType + ", vote=" + vote + ", gsm="
				+ gsm + "]";
	}

}
