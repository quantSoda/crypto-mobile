import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  prices: any;
  objectKeys=  Object.keys;
  cryptos: any;
  articles: any;

  readonly urlName = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,XRP,ADA,LINK,XLM,FIL,XDG,XMR,BCH,LTC' +
      'DOT,UNI,TRX,ETC,GRT,MANA,&tsyms=BTC,USD,EUR&api_key=' +
      '758526217c88bdb44b1e31130e0536187eb94bb0e18403ec9898a255481bf8a1';

/*  readonly urlNews = 'https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite*/

  constructor(private _http: HttpClient) {
  }

  getCryptoName() {
    return this._http.get(this.urlName).pipe(map(results => this.prices = results));
    }

  /*getCryptoNews() {
    return this._http.get(this.urlNews).pipe(map(results => this.articles = results));
  }
*/

}
/*
.subscribe(results => {
  this.cryptos = results;*/
/*getCryptoList() {

}
*/
