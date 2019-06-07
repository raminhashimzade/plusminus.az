export interface CustomerOrder  {
    dateTime: string;
    rqId: number;
    currencyCode: string;
    requestAmt: number;
    requestPeriod: number;
    cusName: string;
    age: number;
    official: string;
    voen: string;
    unOfficial: string;
    income: number;
    guarantor: number;
    monthlyPayment: number;
    called: boolean;
    bankNote: string;
  }