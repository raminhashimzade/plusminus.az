export interface LoanFilterForm {
    loanCurrency: string;
    loanAmount: string;
    loanPeriod: string;
    withEmpReference: boolean;
    withCollateral: boolean;
    withGracePeriod: boolean;
    comissionCash: boolean;
    comissionLoan: boolean;
}