export interface DepositCalcForm {
  withCapitalisation: boolean;
  withWithdraw: boolean;
  withRefill: boolean;
  withAutoProloing: boolean;
  depositAmount: number;
  depositPeriod: number;
  depositCurrency: string;
}
