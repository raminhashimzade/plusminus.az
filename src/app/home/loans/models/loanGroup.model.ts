export interface LoanGroup{
    bankID: number;
    bankName: string;
    list: LoanProduct[];
  }

 export class LoanProduct {
    lnID = null;
    bankID = null;
    bankName = '';
    loanType = '';
    loanName = new Value();
    currencyCode = '';
    priority = null;
    withEmpReference = '';
    withCollateral = '';
    withGracePeriod = '';
    auditorium? = '';
    comissionCash? = '';
    comissionLoan? = '';
    minAge = '';
    maxAge = '';
    minAmount? = '';
    maxAmount = '';
    minPeriod = '';
    maxPeriod = '';
    minRate? = '';
    maxRate? = '';
    minEffectiveRate? = '';
    maxEffectiveRate? = '';
    insurance = '';
    minSalary = '';
    description = new Value();
    descriptionPD = new Value();
    descriptionDOC = new Value();
    minMonthlyPayment? = null;
    maxMonthlyPayment? = null;
    anunitet? = '';
    prodStatus: number;
  }

  class Value {
    az = '';
    ru = '';
    en = '';
  }