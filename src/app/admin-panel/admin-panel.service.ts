import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from '../models/data-reponse';
import { catchError, tap } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  token: string;
  fullScreen$ = new Subject<boolean>();
  constructor(
    private http: HttpClient,
     private snackBar: MatSnackBar,
     private authService: AuthService,
     ) { }
  getToken(): string {
    return this.token;
  }

    fetchToken(formValue) {
      console.log(formValue)
      return this.http.post<DataResponse>('mybank/crud/checkAdmin', {
        ...formValue
    }).pipe(
      tap(res => {
        this.token = res && res.data &&  res.data.token;
      }),
        catchError(er => of(null))
    );
  }

  createNotification(message: string, actionMessage: string, type: string,
    duration = 5000,
    verticalPosition: MatSnackBarVerticalPosition = 'bottom',
    horizontalPosition: MatSnackBarHorizontalPosition = 'center'
    ) {
    this.snackBar.open(message, actionMessage, {
      duration,
      verticalPosition,
      horizontalPosition,
      panelClass: [`snackbar-${type}`]
    });
  }
  removeFile(id: number): Observable<any> {
    return this.http.post('mybank/crud/removeFile', {
      token: this.authService.getToken(),
      adminToken: this.getToken(),
      fileID: id
    });
  }
}
