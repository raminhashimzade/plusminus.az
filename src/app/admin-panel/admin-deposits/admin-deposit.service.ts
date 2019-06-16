import { DepositProduct } from './../../home/deposits/models/deposit-group.model';
import { Injectable } from '@angular/core';
import { AdminPanelService } from '../admin-panel.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { Observable, of } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminDepositService {

  constructor(private http: HttpClient, private adminPanelService: AdminPanelService) {}
  crudDepositProduct(commandType: CrudCommandType, loanProduct = {}): Observable<DepositProduct[]> {
    return this.http.post<DataResponse>('mybank/crud/depositProduct', {
      adminToken: this.adminPanelService.token,
      commandType: commandType,
      ...loanProduct,
  }).pipe(
      map(res => res && res.data),
      catchError(er => of(null))
  );
  }
}
