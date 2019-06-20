import { Injectable } from '@angular/core';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { Observable, of } from 'rxjs';
import { DebitCard } from 'src/app/home/debit-cards/models/debit-card.model';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { AdminPanelService } from '../admin-panel.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDebitCardsService {
  constructor(private http: HttpClient, private adminPanelService: AdminPanelService) {}
  crudProduct(commandType: CrudCommandType, product: any = {}): Observable<DebitCard[]> {
    if (product && product.cardImage) {
      product.cardImage = product.cardImage.split(',')[1];
    }
    return this.http.post<DataResponse>('mybank/crud/cardDebetProduct', {
      adminToken: this.adminPanelService.token,
      commandType: commandType,
      ...product,
  }).pipe(
      map(res => res && res.data),
      catchError(er => of(null))
  );
  }
}
