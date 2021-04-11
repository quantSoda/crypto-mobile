import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crypto-mobile';
  objectKeys=  Object.keys;
  cryptos: any;


  constructor(private _data: DataService, private router: Router) { }


  ngOnInit() {

    this._data.getCryptoName().subscribe(results => this.cryptos = results)
    console.log(this.cryptos);

    // allow
    window.onscroll = function() {bottomNavbar()};
    window.onscroll = function() {headerNavbar()};

    let navbar = document.getElementById("navbar");
    let header = document.getElementById("header");
    // @ts-ignore
    let sticky = navbar.offsetTop;
    // @ts-ignore
    let stickyHeader = header.offsetTop;


    function bottomNavbar() {
      if (window.pageYOffset >= sticky) {
        // @ts-ignore
        navbar.classList.add("sticky");
      }
      else {
        // @ts-ignore
        navbar.classList.remove("sticky");
      }
    }

    function headerNavbar() {
      if (window.pageYOffset >= stickyHeader) {
        // @ts-ignore
        header.classList.add("sticky");
      }
      else {
        // @ts-ignore
        header.classList.remove("sticky");
      }
    }


  }


}
