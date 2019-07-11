export interface DebitCardGroup{
    bankID: number;
    bankName: string;
    list: DebitCard[];
  }

  export class DebitCard{
    dateTime = null;
    cdID = null;
    bankID = null;
    bankName = null;
    cardName = new Value();
    currencyCode = null;
    cardSystem = null;
    cardProduct? = null;
    cardType ='D';
    cardPeriod? = null;
    sellAmount = null;
    withCashBack = false;
    withBonus = false;
    withMiles?  = false;
    withDepositRate = false;
    auditorium? = null;
    comissionSMS = null;
    comissionCashInhouseOwn = null;
    comissionCashInhouseOther = null;
    comissionCashFCountry = null;
    comissionCardToCard = null;
    comissionQuasiCash = null;
    comissionLoan = null;
    description = new Value();
    descriptionDOC = new Value();
    descriptionPD = new Value();
    cardImageId = null;
    website = null;
    prodStatus = 1;
  }

  class Value {
    az = null;
    ru = null;
    en = null;
  }




