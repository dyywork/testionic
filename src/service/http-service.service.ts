import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable, throwError  } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
  constructor(private httpClient: HttpClient, private loading: LoadingController,public alertController: AlertController) { }
  
  BASE_API_URL = ''

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }),
  }

  public get(url: string, params: any):Observable<HttpResponse<any>> {
    this.loadShow()
    return this.httpClient.get(url, 
      {
        ...this.headerOptions,
        observe: 'response',
        params
      }).pipe(
        tap((response) => {
          this.handleSuccess(response)
        },
        error => {
          this.handleError(error)
        }),
        finalize(() => {
          this.loadHide()
        })
    )
  }

  public post(url: string, data: any):Observable<HttpResponse<any>> {
    this.loadShow()
    return this.httpClient.post(url, data, {
      ...this.headerOptions,
      observe: 'response'
    }).pipe(
      tap(response => {
        this.handleSuccess(response)
      },
      error => {
        this.handleError(error)
      }),
      finalize(() => {
        this.loadHide()
      })
    )
  }

  private handleSuccess(response) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(1)
    } else {
      console.log(error)
      if (error.status === 400) {
        this.alert('请求失败')
      } else if (error.status === 404) {
        this.alert('参数有误，请检查')
      } else if (error.status === 500) {
        this.alert('接口有错，联系后台管理员')
      } else {
        this.alert(error.message)
      }
      console.error(`Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private async alert(message) {
    const alert = await this.alertController.create({
      header: '提示',
      message,
      buttons: ['确认']
    });
    await alert.present();
  }

  private async loadShow() {
    const loading = await this.loading.create({
      message: '加载中...',
      duration: 2000,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
  }

  private async loadHide() {
    await this.loading.dismiss()
  }
}
