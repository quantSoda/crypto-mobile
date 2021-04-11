import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: DataService, private router: Router) { }

  ngOnInit(): void {
    this._data.getCryptoNews().subscribe(results => this.cryptos = results)
    console.log(this.cryptos)
  }

}
