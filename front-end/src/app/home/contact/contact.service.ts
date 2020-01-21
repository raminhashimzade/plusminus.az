import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

constructor(private http: HttpClient, private authService: AuthService) { }

  postCustomerMessage(formValue: {cusMobilePhone: string, messageSubject: string, messageBody: string}) {
    return this.http.post('mybank/postCustomerMessage', {
      ...formValue,
      token: this.authService.getToken()
    });
  }
}
