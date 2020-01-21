package rh.request.forms.admin;

import java.util.Date;

import com.common.MultiLangValue;
import com.common.Request;

public class ReqDepositProducts extends Request {
	private String adminToken;
	private enumCommandTypes commandType;
	private Date dateTime;
	private int dpID;
	private int bankID;
	private MultiLangValue depositName;
	private String currencyCode;
	private int prodStatus;
	private int priority;
	private Double minAmount;
	private Double maxAmount;
	private Double minPeriod;
	private Double maxPeriod;
	private Double minRate;
	private Double maxRate;
	private String liqType;
	private boolean withCapitalisation;
	private boolean withWithDraw;
	private boolean withRefill;
	private boolean withAutoProlongation;
	private MultiLangValue description;
	private MultiLangValue descriptionPresent;

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

	public int getDpId() {
		return dpID;
	}

	public void setDpId(int dpId) {
		this.dpID = dpId;
	}

	public int getBankId() {
		return bankID;
	}

	public void setBankId(int bankId) {
		this.bankID = bankId;
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

	public String getLiqType() {
		return liqType;
	}

	public void setLiqType(String liqType) {
		this.liqType = liqType;
	}

	public boolean isWithCapitalisation() {
		return withCapitalisation;
	}

	public void setWithCapitalisation(boolean withCapitalisation) {
		this.withCapitalisation = withCapitalisation;
	}

	public boolean isWithWithDraw() {
		return withWithDraw;
	}

	public void setWithWithDraw(boolean withWithDraw) {
		this.withWithDraw = withWithDraw;
	}

	public boolean isWithRefill() {
		return withRefill;
	}

	public void setWithRefill(boolean withRefill) {
		this.withRefill = withRefill;
	}

	public boolean isWithAutoProlongation() {
		return withAutoProlongation;
	}

	public void setWithAutoProlongation(boolean withAutoProlongation) {
		this.withAutoProlongation = withAutoProlongation;
	}

	public MultiLangValue getDescription() {
		return description;
	}

	public void setDescription(MultiLangValue description) {
		this.description = description;
	}

	public MultiLangValue getPresent() {
		return descriptionPresent;
	}

	public void setPresent(MultiLangValue present) {
		this.descriptionPresent = present;
	}

	@Override
	public String toString() {
		return "ReqDepositProducts [adminToken=" + adminToken + ", commandType=" + commandType + ", dateTime="
				+ dateTime + ", dpId=" + dpID + ", bankId=" + bankID + ", depositName=" + depositName
				+ ", currencyCode=" + currencyCode + ", prodStatus=" + prodStatus + ", priority=" + priority
				+ ", minAmount=" + minAmount + ", maxAmount=" + maxAmount + ", minPeriod=" + minPeriod + ", maxPeriod="
				+ maxPeriod + ", minRate=" + minRate + ", maxRate=" + maxRate + ", liqType=" + liqType
				+ ", withCapitalisation=" + withCapitalisation + ", withWithDraw=" + withWithDraw + ", withRefill="
				+ withRefill + ", withAutoProlongation=" + withAutoProlongation + ", description=" + description
				+ ", present=" + descriptionPresent + "]";
	}

}
