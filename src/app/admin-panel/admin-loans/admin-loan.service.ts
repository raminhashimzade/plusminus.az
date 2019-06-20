import { Injectable } from '@angular/core';
import { AdminPanelService } from '../admin-panel.service';
import { catchError, map } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';

@Injectable()
export class AdminLoanService {

  constructor(private http: HttpClient, private adminPanelService: AdminPanelService) {}
    crudProduct(commandType: CrudCommandType, loanProduct = {}): Observable<LoanProduct[]> {
      return this.http.post<DataResponse>('mybank/crud/loanProduct', {
        adminToken: this.adminPanelService.token,
        commandType: commandType,
        ...loanProduct,
    }).pipe(
        map(res => res && res.data),
        catchError(er => of(null))
    );
    }
}
