export interface ExchangeRate{
  bankId: number;
  bankName: string;
  bankCurrRate: BankCurrRate;
}

interface BankCurrRate {
  CASH: CASH[];
}

interface CASH {
  EUR: Rate;
  OIL: Rate;
  GOLD: Rate;
  TRY: Rate;
  RUB: Rate;
  GBP: Rate;
  USD: Rate;
}

export interface Rate {
  sellRate: string | number;
  buyRate: string | number ;
}
