
export interface DepositGroup {
    bankID: number;
    bankName: string;
    list: DepositProduct[];
  }

  export interface DepositProduct {
    dpID: number;
    bankID: number;
    bankName: string;
    depositName: DepositName;
    currencyCode: string;
    priority: number;
    minAmount: string;
    maxAmount?: any;
    minRate: string;
    maxRate: string;
    minPeriod: string;
    maxPeriod: string;
    liqType: string;
    withCapitalisation: string;
    withWithdraw: string;
    withRefill: string;
    withAutoProloing: string;
    description: DepositName;
    descriptionPresent: DepositName;
    website: string;
    income: number;
  }

  interface DepositName {
    az: string;
    ru: string;
    en: string;
  }