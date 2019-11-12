import { Injectable } from '@angular/core';
import { RequestService } from 'src/service/request.service'
import { Observable  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class test {
  constructor(public requestService: RequestService){}

  public login (data: any): Observable<any> {
    return this.requestService.request(
      'get',
      'https://api.apiopen.top/getJoke',
      {params: data}
    )
  }
}