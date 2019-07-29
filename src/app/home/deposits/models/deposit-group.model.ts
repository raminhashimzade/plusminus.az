
export interface DepositGroup extends Array<any> {
  bankID: number;
  bankName: string;
  list: DepositProduct[];
}

export class  DepositProduct {
  dpID = null;
  dpId = null;
  bankID? = null;
  bankId? = null;
  bankName = null;
  depositName = new Value();
  currencyCode = null;
  priority = null;
  minAmount = null;
  maxAmount?: any;
  minRate = null;
  maxRate = null;
  minPeriod = null;
  maxPeriod = null;
  liqType = null;
  withCapitalisation = null;
  withWithdraw = null;
  withRefill = null;
  withAutoProloing = null;
  description = new Value();
  descriptionPresent = new Value();
  present? = new Value();
  website = null;
  income = null;
  withAutoProlongation = null;
  prodStatus? = null

  lnId? = null;

}

class  Value {
  az = null;
  ru = null;
  en = null;
}