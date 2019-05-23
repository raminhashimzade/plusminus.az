export interface LoanGroup{
    bankID: number;
    bankName: string;
    list: LoanProduct[];
  }

 export  interface LoanProduct {
    lnID: number;
    bankID: number;
    bankName: string;
    loanName: LoanName;
    currencyCode: string;
    priority: number;
    withEmpReference: string;
    withCollateral: string;
    withGracePeriod: string;
    auditorium?: any;
    comissionCash?: string;
    comissionLoan?: string;
    minAge: string;
    maxAge: string;
    minAmount?: string;
    maxAmount: string;
    minPeriod: string;
    maxPeriod: string;
    minRate?: string;
    maxRate?: string;
    minEffectiveRate?: any;
    maxEffectiveRate?: any;
    insurance: string;
    minSalary: string;
    description: LoanName;
    descriptionPd: LoanName;
    descriptionDoc: LoanName;
    minMonthlyPayment?: number;
    maxMonthlyPayment?: number;
    anunitet?: string;
  }

  interface LoanName {
    az: string;
    ru: string;
    en: string;
  }