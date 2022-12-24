import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:q/:days/:aqi')
  getForecast(@Param('q') q:string, @Param('days') days:string, @Param('aqui') aqui:string){
    return this.appService.getForecast(q, days, aqui);
  }
}
