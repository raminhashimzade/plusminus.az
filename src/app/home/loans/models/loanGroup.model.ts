export interface LoanGroup{
    bankID: number;
    bankName: string;
    list: LoanProduct[];
  }

 export class LoanProduct {
    lnID = 0;
    bankID = 0;
    bankName = '';
    loanType = '';
    loanName = new Value();
    currencyCode = '';
    priority = 0;
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
    minMonthlyPayment? = 0;
    maxMonthlyPayment? = 0;
    anunitet? = '';
    prodStatus: number;
  }

  class Value {
    az = '';
    ru = '';
    en = '';
  }