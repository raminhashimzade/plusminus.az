
export interface DepositGroup extends Array<any> {
    bankID: number;
    bankName: string;
    list: DepositProduct[];
  }

  export class  DepositProduct {
    dpID = 0;
    dpId = 0;
    bankID? = 0;
    bankId? = '';
    bankName = '';
    depositName = new Value();
    currencyCode = '';
    priority = 0;
    minAmount = '';
    maxAmount?: any;
    minRate = '';
    maxRate = '';
    minPeriod = '';
    maxPeriod = '';
    liqType = '';
    withCapitalisation = '';
    withWithdraw = '';
    withRefill = '';
    withAutoProloing = '';
    description = new Value();
    descriptionPresent = new Value();
    present? = new Value();
    website = '';
    income = 0;
    withAutoProlongation = '';
    prodStatus? = 0
  }

  class  Value {
    az = '';
    ru = '';
    en = '';
  }