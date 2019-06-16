export interface LoanGroup{
    bankID: number;
    bankName: string;
    list: LoanProduct[];
  }

 export class LoanProduct {
    lnID = null;
    bankID = null;
    bankName = null;
    loanType = null;
    loanName = new Value();
    currencyCode = null;
    priority = null;
    withEmpReference = null;
    withCollateral = null;
    withGracePeriod = null;
    auditorium? = null;
    comissionCash? = null;
    comissionLoan? = null;
    minAge = null;
    maxAge = null;
    minAmount? = null;
    maxAmount = null;
    minPeriod = null;
    maxPeriod = null;
    minRate? = null;
    maxRate? = null;
    minEffectiveRate? = null;
    maxEffectiveRate? = null;
    insurance = null;
    minSalary = null;
    description = new Value();
    descriptionPD = new Value();
    descriptionDOC = new Value();
    minMonthlyPayment? = null;
    maxMonthlyPayment? = null;
    anunitet? = null;
    prodStatus = null;
  }

  class Value {
    az = '';
    ru = '';
    en = '';
  }