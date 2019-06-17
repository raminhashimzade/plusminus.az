export interface CreditCardFilterForm {
   withEmpReference :boolean,
   withGracePeriod: boolean,
   withMiles: boolean,
   withDepositRate: boolean,
   withCashBack: boolean,
   comissionCash:boolean,
   currencyCode : string,
   loanAmount : number,
   loanPeriod : number;
}