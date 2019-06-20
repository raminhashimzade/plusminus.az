import { Injectable } from '@angular/core';
import { CreditCard } from 'src/app/home/credit-cards/models/credit-card.model';
import { AdminPanelService } from '../admin-panel.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { Observable, of } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCreditCardService {

  constructor(private http: HttpClient, private adminPanelService: AdminPanelService) {}
 crudProduct(commandType: CrudCommandType, product: any = {}): Observable<CreditCard[]> {
      if (product && product.cardImage) {
        product.cardImage = product.cardImage.split(',')[1];
      }
      return this.http.post<DataResponse>('mybank/crud/cardCreditProduct', {
        adminToken: this.adminPanelService.token,
        commandType: commandType,
        ...product,
    }).pipe(
        map(res => res && res.data),
        catchError(er => of(null))
    );
    }
}
