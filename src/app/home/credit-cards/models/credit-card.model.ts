export interface CreditCardGroup{
    bankID: number;
    bankName: string;
    list: CreditCard[];
  }

export class CreditCard {
    cdId = null;
    bankId = null;
    bankName = null;
    cardName = new Value();
    currencyCode = null;
    cardSystem = null;
    cardProduct?: any;
    cardType = null;
    cardPeriod?: any;
    sellAmount = null;
    withCashBack = false;
    withBonus = false;
    withEmpReference = false;
    withCollateral = false;
    withMiles? = false;
    withGracePeriod = null;
    withDepositRate = null;
    auditorium? = false;
    comissionSMS = null;
    comissionCashInhouseOwn = null;
    comissionCashInhouseOther = null;
    comissionCashFCountry = null;
    comissionCardToCard = null;
    comissionQuasiCash = null;
    comissionLoan = null;
    minAmount = null;
    maxAmount = null;
    minPeriod = null;
    maxPeriod = null;
    minRate = null;
    maxRate = null;
    minEffectiveRate = null;
    maxEffectiveRate = null;
    description = new Value();
    descriptionPD = new Value();
    descriptionDOC = new Value();
    cardImageId = null;
  }

  class Value {
    az = ''
    ru = ''
    en = ''
  }