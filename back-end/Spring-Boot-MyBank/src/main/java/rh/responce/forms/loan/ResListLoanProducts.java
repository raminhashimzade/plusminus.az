package rh.responce.forms.loan;

import com.common.MultiLangValue;

public class ResListLoanProducts {

	private int lnID;
	private int bankID;
	private String bankName;
	private MultiLangValue loanName;
	private String currencyCode;
	private int priority;
	private String withEmpReference;
	private String withCollateral;
	private String withGracePeriod;
	private String auditorium;
	private Double comissionCash;
	private Double comissionLoan;
	private Double minAge;
	private Double maxAge;
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
	private MultiLangValue descriptionPd;
	private MultiLangValue descriptionDoc;
	private String Anunitet;
	private Double minMonthlyPayment;
	private Double maxMonthlyPayment;
	private String website;

	public ResListLoanProducts(int lnID, int bankID, String bankName, MultiLangValue loanName, String currencyCode,
			int priority, String withEmpReference, String withCollateral, String withGracePeriod, String auditorium,
			Double comissionCash, Double comissionLoan, Double minAge, Double maxAge, Double minAmount,
			Double maxAmount, Double minPeriod, Double maxPeriod, Double minRate, Double maxRate,
			Double minEffectiveRate, Double maxEffectiveRate, String insurance, Double minSalary,
			MultiLangValue description, MultiLangValue descriptionPd, MultiLangValue descriptionDoc, String anunitet,
			Double minMonthlyPayment, Double maxMonthlyPayment, String website) {
		super();
		this.lnID = lnID;
		this.bankID = bankID;
		this.bankName = bankName;
		this.loanName = loanName;
		this.currencyCode = currencyCode;
		this.priority = priority;
		this.withEmpReference = withEmpReference;
		this.withCollateral = withCollateral;
		this.withGracePeriod = withGracePeriod;
		this.auditorium = auditorium;
		this.comissionCash = comissionCash;
		this.comissionLoan = comissionLoan;
		this.minAge = minAge;
		this.maxAge = maxAge;
		this.minAmount = minAmount;
		this.maxAmount = maxAmount;
		this.minPeriod = minPeriod;
		this.maxPeriod = maxPeriod;
		this.minRate = minRate;
		this.maxRate = maxRate;
		this.minEffectiveRate = minEffectiveRate;
		this.maxEffectiveRate = maxEffectiveRate;
		this.insurance = insurance;
		this.minSalary = minSalary;
		this.description = description;
		this.descriptionPd = descriptionPd;
		this.descriptionDoc = descriptionDoc;
		Anunitet = anunitet;
		this.minMonthlyPayment = minMonthlyPayment;
		this.maxMonthlyPayment = maxMonthlyPayment;
		this.website = website;
	}

	public int getLnID() {
		return lnID;
	}

	public void setLnID(int lnID) {
		this.lnID = lnID;
	}

	public int getBankID() {
		return bankID;
	}

	public void setBankID(int bankID) {
		this.bankID = bankID;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
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

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getWithEmpReference() {
		return withEmpReference;
	}

	public void setWithEmpReference(String withEmpReference) {
		this.withEmpReference = withEmpReference;
	}

	public String getWithCollateral() {
		return withCollateral;
	}

	public void setWithCollateral(String withCollateral) {
		this.withCollateral = withCollateral;
	}

	public String getWithGracePeriod() {
		return withGracePeriod;
	}

	public void setWithGracePeriod(String withGracePeriod) {
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

	public Double getMinAge() {
		return minAge;
	}

	public void setMinAge(Double minAge) {
		this.minAge = minAge;
	}

	public Double getMaxAge() {
		return maxAge;
	}

	public void setMaxAge(Double maxAge) {
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

	public MultiLangValue getDescriptionPd() {
		return descriptionPd;
	}

	public void setDescriptionPd(MultiLangValue descriptionPd) {
		this.descriptionPd = descriptionPd;
	}

	public MultiLangValue getDescriptionDoc() {
		return descriptionDoc;
	}

	public void setDescriptionDoc(MultiLangValue descriptionDoc) {
		this.descriptionDoc = descriptionDoc;
	}

	public String getAnunitet() {
		return Anunitet;
	}

	public void setAnunitet(String anunitet) {
		Anunitet = anunitet;
	}

	public Double getMinMonthlyPayment() {
		return minMonthlyPayment;
	}

	public void setMinMonthlyPayment(Double minMonthlyPayment) {
		this.minMonthlyPayment = minMonthlyPayment;
	}

	public Double getMaxMonthlyPayment() {
		return maxMonthlyPayment;
	}

	public void setMaxMonthlyPayment(Double maxMonthlyPayment) {
		this.maxMonthlyPayment = maxMonthlyPayment;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	@Override
	public String toString() {
		return "ResListLoanProducts [lnID=" + lnID + ", bankID=" + bankID + ", bankName=" + bankName + ", loanName="
				+ loanName + ", currencyCode=" + currencyCode + ", priority=" + priority + ", withEmpReference="
				+ withEmpReference + ", withCollateral=" + withCollateral + ", withGracePeriod=" + withGracePeriod
				+ ", auditorium=" + auditorium + ", comissionCash=" + comissionCash + ", comissionLoan=" + comissionLoan
				+ ", minAge=" + minAge + ", maxAge=" + maxAge + ", minAmount=" + minAmount + ", maxAmount=" + maxAmount
				+ ", minPeriod=" + minPeriod + ", maxPeriod=" + maxPeriod + ", minRate=" + minRate + ", maxRate="
				+ maxRate + ", minEffectiveRate=" + minEffectiveRate + ", maxEffectiveRate=" + maxEffectiveRate
				+ ", insurance=" + insurance + ", minSalary=" + minSalary + ", description=" + description
				+ ", descriptionPd=" + descriptionPd + ", descriptionDoc=" + descriptionDoc + ", Anunitet=" + Anunitet
				+ ", minMonthlyPayment=" + minMonthlyPayment + ", maxMonthlyPayment=" + maxMonthlyPayment + ", website="
				+ website + "]";
	}

}
