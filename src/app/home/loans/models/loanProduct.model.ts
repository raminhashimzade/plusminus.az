export interface LoanProduct{
    lnID: number;
    bankID: number;
    loanName: LoanName;
    currencyCode: string;
    priority: number;
    withEmpReference: string;
    withCollateral: string;
    withGracePeriod: string;
    auditorium?: any;
    comissionCash: string;
    comissionLoan: string;
    minAge: string;
    maxAge: string;
    minAmount: string;
    maxAmount: string;
    minPeriod: string;
    maxPeriod: string;
    minRate: string;
    maxRate: string;
    minEffectiveRate: string;
    maxEffectiveRate: string;
    insurance: string;
    minSalary: string;
    description: LoanName;
    descriptionPd: LoanName;
    descriptionDoc: LoanName;
    anunitet: string;
  }

  interface LoanName {
    az: string;
    ru: string;
    en: string;
  }