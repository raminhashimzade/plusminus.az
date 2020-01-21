package rh.responce.forms.deposit;

import com.common.MultiLangValue;

public class ResListDepositProducts {

	private int dpID;
	private int bankID;
	private String bankName;
	private MultiLangValue depositName;
	private String currencyCode;
	private int priority;
	private Double minAmount;
	private Double maxAmount;
	private Double minRate;
	private Double maxRate;
	private Double minPeriod;
	private Double maxPeriod;
	private String liqType;
	private String withCapitalisation;
	private String withWithdraw;
	private String withRefill;
	private String withAutoProlong;
	private MultiLangValue description;
	private MultiLangValue descriptionPresent;
	private String website;
	private Double income;

	public ResListDepositProducts(int dpID, int bankID, String bankName, MultiLangValue depositName,
			String currencyCode, int priority, Double minAmount, Double maxAmount, Double minRate, Double maxRate,
			Double minPeriod, Double maxPeriod, String liqType, String withCapitalisation, String withWithdraw,
			String withRefill, String withAutoProloing, MultiLangValue description, MultiLangValue descriptionPresent,
			String website, Double income) {
		super();
		this.dpID = dpID;
		this.bankID = bankID;
		this.bankName = bankName;
		this.depositName = depositName;
		this.currencyCode = currencyCode;
		this.priority = priority;
		this.minAmount = minAmount;
		this.maxAmount = maxAmount;
		this.minRate = minRate;
		this.maxRate = maxRate;
		this.minPeriod = minPeriod;
		this.maxPeriod = maxPeriod;
		this.liqType = liqType;
		this.withCapitalisation = withCapitalisation;
		this.withWithdraw = withWithdraw;
		this.withRefill = withRefill;
		this.withAutoProlong = withAutoProloing;
		this.description = description;
		this.descriptionPresent = descriptionPresent;
		this.website = website;
		this.income = income;
	}

	public int getDpID() {
		return dpID;
	}

	public void setDpID(int dpID) {
		this.dpID = dpID;
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

	public MultiLangValue getDepositName() {
		return depositName;
	}

	public void setDepositName(MultiLangValue depositName) {
		this.depositName = depositName;
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

	public String getLiqType() {
		return liqType;
	}

	public void setLiqType(String liqType) {
		this.liqType = liqType;
	}

	public String getWithCapitalisation() {
		return withCapitalisation;
	}

	public void setWithCapitalisation(String withCapitalisation) {
		this.withCapitalisation = withCapitalisation;
	}

	public String getWithWithdraw() {
		return withWithdraw;
	}

	public void setWithWithdraw(String withWithdraw) {
		this.withWithdraw = withWithdraw;
	}

	public String getWithRefill() {
		return withRefill;
	}

	public void setWithRefill(String withRefill) {
		this.withRefill = withRefill;
	}

	public String getWithAutoProloing() {
		return withAutoProlong;
	}

	public void setWithAutoProloing(String withAutoProloing) {
		this.withAutoProlong = withAutoProloing;
	}

	public MultiLangValue getDescription() {
		return description;
	}

	public void setDescription(MultiLangValue description) {
		this.description = description;
	}

	public MultiLangValue getDescriptionPresent() {
		return descriptionPresent;
	}

	public void setDescriptionPresent(MultiLangValue descriptionPresent) {
		this.descriptionPresent = descriptionPresent;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Double getIncome() {
		return income;
	}

	public void setIncome(Double income) {
		this.income = income;
	}

	@Override
	public String toString() {
		return "ResListDepositProducts [dpID=" + dpID + ", bankID=" + bankID + ", bankName=" + bankName
				+ ", depositName=" + depositName + ", currencyCode=" + currencyCode + ", priority=" + priority
				+ ", minAmount=" + minAmount + ", maxAmount=" + maxAmount + ", minRate=" + minRate + ", maxRate="
				+ maxRate + ", minPeriod=" + minPeriod + ", maxPeriod=" + maxPeriod + ", liqType=" + liqType
				+ ", withCapitalisation=" + withCapitalisation + ", withWithdraw=" + withWithdraw + ", withRefill="
				+ withRefill + ", withAutoProloing=" + withAutoProlong + ", description=" + description
				+ ", descriptionPresent=" + descriptionPresent + ", website=" + website + ", income=" + income + "]";
	}

}
