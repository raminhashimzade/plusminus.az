package rh.request.forms.loan;

import java.util.Arrays;

import com.common.Request;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReqLoanOrder extends Request {
	// --customer
	@JsonProperty(required = true)
	private String cusMobilePhone;
	private String cusEmail;
	@JsonProperty(required = true)
	private String cusFirstName;
	private String cusLastName;
	private String cusMiddleName;
	@JsonProperty(required = true)
	private String cusBirthDate;
	private boolean cusOfficialIncome;
	private boolean cusVoen;
	private boolean cusUnOfficialIncome;
	@JsonProperty(required = true)
	private double cusIncomeAmt;
	private double cusGuarantorAmt;

	// --request
	@JsonProperty(required = true)
	private String requestType;
	@JsonProperty(required = true)
	private String requestProductId;
	@JsonProperty(required = true)
	private double requestLoanAmt;
	@JsonProperty(required = true)
	private String requestLoanCurencyCode;
	@JsonProperty(required = true)
	private double requestLoanPeriod;
	private String requestCardSystem;
	private String requestCardProduct;
	private int[] requestBankId;
	private double monthlyPayment;

	public String getCusMobilePhone() {
		return cusMobilePhone;
	}

	public void setCusMobilePhone(String cusMobilePhone) {
		this.cusMobilePhone = cusMobilePhone;
	}

	public String getCusEmail() {
		return cusEmail;
	}

	public void setCusEmail(String cusEmail) {
		this.cusEmail = cusEmail;
	}

	public String getCusFirstName() {
		return cusFirstName;
	}

	public void setCusFirstName(String cusFirstName) {
		this.cusFirstName = cusFirstName;
	}

	public String getCusLastName() {
		return cusLastName;
	}

	public void setCusLastName(String cusLastName) {
		this.cusLastName = cusLastName;
	}

	public String getCusMiddleName() {
		return cusMiddleName;
	}

	public void setCusMiddleName(String cusMiddleName) {
		this.cusMiddleName = cusMiddleName;
	}

	public String getCusBirthDate() {
		return cusBirthDate;
	}

	public void setCusBirthDate(String cusBirthDate) {
		this.cusBirthDate = cusBirthDate;
	}

	public boolean isCusOfficialIncome() {
		return cusOfficialIncome;
	}

	public void setCusOfficialIncome(boolean cusOfficialIncome) {
		this.cusOfficialIncome = cusOfficialIncome;
	}

	public boolean isCusVoen() {
		return cusVoen;
	}

	public void setCusVoen(boolean cusVoen) {
		this.cusVoen = cusVoen;
	}

	public boolean isCusUnOfficialIncome() {
		return cusUnOfficialIncome;
	}

	public void setCusUnOfficialIncome(boolean cusUnOfficialIncome) {
		this.cusUnOfficialIncome = cusUnOfficialIncome;
	}

	public double getCusIncomeAmt() {
		return cusIncomeAmt;
	}

	public void setCusIncomeAmt(double cusIncomeAmt) {
		this.cusIncomeAmt = cusIncomeAmt;
	}

	public double getCusGuarantorAmt() {
		return cusGuarantorAmt;
	}

	public void setCusGuarantorAmt(double cusGuarantorAmt) {
		this.cusGuarantorAmt = cusGuarantorAmt;
	}

	public String getRequestType() {
		return requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public String getRequestProductId() {
		return requestProductId;
	}

	public void setRequestProductId(String requestProductId) {
		this.requestProductId = requestProductId;
	}

	public double getRequestLoanAmt() {
		return requestLoanAmt;
	}

	public void setRequestLoanAmt(double requestLoanAmt) {
		this.requestLoanAmt = requestLoanAmt;
	}

	public String getRequestLoanCurencyCode() {
		return requestLoanCurencyCode;
	}

	public void setRequestLoanCurencyCode(String requestLoanCurencyCode) {
		this.requestLoanCurencyCode = requestLoanCurencyCode;
	}

	public double getRequestLoanPeriod() {
		return requestLoanPeriod;
	}

	public void setRequestLoanPeriod(double requestLoanPeriod) {
		this.requestLoanPeriod = requestLoanPeriod;
	}

	public String getRequestCardSystem() {
		return requestCardSystem;
	}

	public void setRequestCardSystem(String requestCardSystem) {
		this.requestCardSystem = requestCardSystem;
	}

	public String getRequestCardProduct() {
		return requestCardProduct;
	}

	public void setRequestCardProduct(String requestCardProduct) {
		this.requestCardProduct = requestCardProduct;
	}

	public int[] getRequestBankId() {
		return requestBankId;
	}

	public void setRequestBankId(int[] requestBankId) {
		this.requestBankId = requestBankId;
	}

	public double getMonthlyPayment() {
		return monthlyPayment;
	}

	public void setMonthlyPayment(double monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}

	@Override
	public String toString() {
		return "ReqLoanOrder [cusMobilePhone=" + cusMobilePhone + ", cusEmail=" + cusEmail + ", cusFirstName="
				+ cusFirstName + ", cusLastName=" + cusLastName + ", cusMiddleName=" + cusMiddleName + ", cusBirthDate="
				+ cusBirthDate + ", cusOfficialIncome=" + cusOfficialIncome + ", cusVoen=" + cusVoen
				+ ", cusUnOfficialIncome=" + cusUnOfficialIncome + ", cusIncomeAmt=" + cusIncomeAmt
				+ ", cusGuarantorAmt=" + cusGuarantorAmt + ", requestType=" + requestType + ", requestProductId="
				+ requestProductId + ", requestLoanAmt=" + requestLoanAmt + ", requestLoanCurencyCode="
				+ requestLoanCurencyCode + ", requestLoanPeriod=" + requestLoanPeriod + ", requestCardSystem="
				+ requestCardSystem + ", requestCardProduct=" + requestCardProduct + ", requestBankId="
				+ Arrays.toString(requestBankId) + ", monthlyPayment=" + monthlyPayment + "]";
	}

}
