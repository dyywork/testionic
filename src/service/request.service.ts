import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  static request(arg0: { url: string; params: any; }) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient, private loading: LoadingController,public alertController: AlertController) { }

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }),
  }

  public request (method,url,data: any) {
    return this.httpClient.request(method,url,data)
  }

}
