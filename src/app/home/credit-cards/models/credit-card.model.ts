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
    sellAmount = 0;
    withCashBack = false;
    withBonus = false;
    withEmpReference = false;
    withCollateral = false;
    withMiles? = false;
    withGracePeriod = null;
    withDepositRate = 0;
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
    cardImage? = null;
    prodStatus = null;
    priority = null;
  }

  class Value {
    az = ''
    ru = ''
    en = ''
  }