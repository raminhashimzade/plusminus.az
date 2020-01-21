package rh.request.forms.admin;

import java.util.Date;

import com.common.MultiLangValue;
import com.common.Request;

public class ReqLoanProducts extends Request {
	private String adminToken;
	private enumCommandTypes commandType;
	private Date dateTime;
	private int lnID;
	private int bankID;
	private String loanType;
	private MultiLangValue loanName;
	private String currencyCode;
	private int prodStatus;
	private int priority;
	private boolean withEmpReference;
	private boolean withCollateral;
	private int withGracePeriod;
	private String auditorium;
	private Double comissionCash;
	private Double comissionLoan;
	private int minAge;
	private int maxAge;
	private Double minAmount;
	private Double maxAmount;
	private Double minPeriod;
	private Double maxPeriod;
	private Double minRate;
	private Double maxRate;
	private Double minEffectiveRate;
	private Double maxEffectiveRate;
	private String insurance;
	private Double minSalary;
	private MultiLangValue description;
	private MultiLangValue descriptionPD;
	private MultiLangValue descriptionDOC;
	private String anunitet;

	public String getAdminToken() {
		return adminToken;
	}

	public void setAdminToken(String adminToken) {
		this.adminToken = adminToken;
	}

	public enumCommandTypes getCommandType() {
		return commandType;
	}

	public void setCommandType(enumCommandTypes commandType) {
		this.commandType = commandType;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public int getLnId() {
		return lnID;
	}

	public void setLnId(int lnId) {
		this.lnID = lnId;
	}

	public int getBankId() {
		return bankID;
	}

	public void setBankId(int bankId) {
		this.bankID = bankId;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public MultiLangValue getLoanName() {
		return loanName;
	}

	public void setLoanName(MultiLangValue loanName) {
		this.loanName = loanName;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public int getProdStatus() {
		return prodStatus;
	}

	public void setProdStatus(int prodStatus) {
		this.prodStatus = prodStatus;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public boolean isWithEmpReference() {
		return withEmpReference;
	}

	public void setWithEmpReference(boolean withEmpReference) {
		this.withEmpReference = withEmpReference;
	}

	public boolean isWithCollateral() {
		return withCollateral;
	}

	public void setWithCollateral(boolean withCollateral) {
		this.withCollateral = withCollateral;
	}

	public int getWithGracePeriod() {
		return withGracePeriod;
	}

	public void setWithGracePeriod(int withGracePeriod) {
		this.withGracePeriod = withGracePeriod;
	}

	public String getAuditorium() {
		return auditorium;
	}

	public void setAuditorium(String auditorium) {
		this.auditorium = auditorium;
	}

	public Double getComissionCash() {
		return comissionCash;
	}

	public void setComissionCash(Double comissionCash) {
		this.comissionCash = comissionCash;
	}

	public Double getComissionLoan() {
		return comissionLoan;
	}

	public void setComissionLoan(Double comissionLoan) {
		this.comissionLoan = comissionLoan;
	}

	public int getMinAge() {
		return minAge;
	}

	public void setMinAge(int minAge) {
		this.minAge = minAge;
	}

	public int getMaxAge() {
		return maxAge;
	}

	public void setMaxAge(int maxAge) {
		this.maxAge = maxAge;
	}

	public Double getMinAmount() {
		return minAmount;
	}

	public void setMinAmount(Double minAmount) {
		this.minAmount = minAmount;
	}

	public Double getMaxAmount() {
		return maxAmount;
	}

	public void setMaxAmount(Double maxAmount) {
		this.maxAmount = maxAmount;
	}

	public Double getMinPeriod() {
		return minPeriod;
	}

	public void setMinPeriod(Double minPeriod) {
		this.minPeriod = minPeriod;
	}

	public Double getMaxPeriod() {
		return maxPeriod;
	}

	public void setMaxPeriod(Double maxPeriod) {
		this.maxPeriod = maxPeriod;
	}

	public Double getMinRate() {
		return minRate;
	}

	public void setMinRate(Double minRate) {
		this.minRate = minRate;
	}

	public Double getMaxRate() {
		return maxRate;
	}

	public void setMaxRate(Double maxRate) {
		this.maxRate = maxRate;
	}

	public Double getMinEffectiveRate() {
		return minEffectiveRate;
	}

	public void setMinEffectiveRate(Double minEffectiveRate) {
		this.minEffectiveRate = minEffectiveRate;
	}

	public Double getMaxEffectiveRate() {
		return maxEffectiveRate;
	}

	public void setMaxEffectiveRate(Double maxEffectiveRate) {
		this.maxEffectiveRate = maxEffectiveRate;
	}

	public String getInsurance() {
		return insurance;
	}

	public void setInsurance(String insurance) {
		this.insurance = insurance;
	}

	public Double getMinSalary() {
		return minSalary;
	}

	public void setMinSalary(Double minSalary) {
		this.minSalary = minSalary;
	}

	public MultiLangValue getDescription() {
		return description;
	}

	public void setDescription(MultiLangValue description) {
		this.description = description;
	}

	public MultiLangValue getDescriptionPD() {
		return descriptionPD;
	}

	public void setDescriptionPD(MultiLangValue descriptionPD) {
		this.descriptionPD = descriptionPD;
	}

	public MultiLangValue getDescriptionDOC() {
		return descriptionDOC;
	}

	public void setDescriptionDOC(MultiLangValue descriptionDOC) {
		this.descriptionDOC = descriptionDOC;
	}

	public String getAnunitet() {
		return anunitet;
	}

	public void setAnunitet(String anunitet) {
		this.anunitet = anunitet;
	}

	@Override
	public String toString() {
		return "ReqLoanProducts [adminToken=" + adminToken + ", commandType=" + commandType + ", dateTime=" + dateTime
				+ ", lnId=" + lnID + ", bankId=" + bankID + ", loanType=" + loanType + ", loanName=" + loanName
				+ ", currencyCode=" + currencyCode + ", prodStatus=" + prodStatus + ", priority=" + priority
				+ ", withEmpReference=" + withEmpReference + ", withCollateral=" + withCollateral + ", withGracePeriod="
				+ withGracePeriod + ", auditorium=" + auditorium + ", comissionCash=" + comissionCash
				+ ", comissionLoan=" + comissionLoan + ", minAge=" + minAge + ", maxAge=" + maxAge + ", minAmount="
				+ minAmount + ", maxAmount=" + maxAmount + ", minPeriod=" + minPeriod + ", maxPeriod=" + maxPeriod
				+ ", minRate=" + minRate + ", maxRate=" + maxRate + ", minEffectiveRate=" + minEffectiveRate
				+ ", maxEffectiveRate=" + maxEffectiveRate + ", insurance=" + insurance + ", minSalary=" + minSalary
				+ ", description=" + description + ", descriptionPD=" + descriptionPD + ", descriptionDOC="
				+ descriptionDOC + ", anunitet=" + anunitet + "]";
	}

}
