import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  title = 'crypto-mobile';
  objectKeys=  Object.keys;
  cryptos: any;

  constructor(private _data: DataService, private router: Router) { }


  ngOnInit() {
    this._data.getCryptoName().subscribe(results => this.cryptos = results)
    console.log(this.cryptos);
  }

  goToInfoPage( ){

  }

}
