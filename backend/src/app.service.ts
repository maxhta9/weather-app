import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
import { map } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService){}

  getForecast(q: string, days:string, aqui:string) {
    return this.httpService
      .get(`http://api.weatherapi.com/v1/current.json?key=2a582530dab2430bab4183006221612&q=Mexico, San Luis Potosi&aqi=yes`)
      .pipe(
        map((response)=> response.data)
        // map((data)=> ({
          
        // })
      )
  }
}
