import { LoanProduct } from './loanGroup.model';

export interface LoanCompareProduct {
    loanAmount?: string;
    loanCurrencyCode?: string;
    loanPeriod?: string;
    list: LoanProduct[]
}