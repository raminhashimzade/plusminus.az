package ztemp;

import org.springframework.stereotype.Component;

@Component
public class CompanyRating {
	
	private int rtID;
	private String sessionId;
	private String companyId;
	private String companyType;
	private int vote;
	
	
	public int getRtID() {
		return rtID;
	}
	public void setRtID(int rtID) {
		this.rtID = rtID;
	}
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
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	
	@Override
	public String toString() {
		return "companyRating [rtID=" + rtID + 
							", companyId=" + companyId + 
							", companyType=" + companyType + 
							", vote=" + vote + "]";
	}	

}
