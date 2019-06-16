
export interface DepositGroup extends Array<any> {
    bankID: number;
    bankName: string;
    list: DepositProduct[];
  }

  export class  DepositProduct {
    dpID = null;
    dpId = null;
    bankID? = null;
    bankId? = '';
    bankName = '';
    depositName = new Value();
    currencyCode = '';
    priority = null;
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
    income = null;
    withAutoProlongation = '';
    prodStatus? = null
  }

  class  Value {
    az = '';
    ru = '';
    en = '';
  }