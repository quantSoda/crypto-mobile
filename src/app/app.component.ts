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
    window.onscroll = function() {myFunction()};

    let navbar = document.getElementById("navbar");
    // @ts-ignore
    let sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        // @ts-ignore
        navbar.classList.add("sticky");
      }
      else {
        // @ts-ignore
        navbar.classList.remove("sticky");
      }
    }

  }






}

/*goToInfoPage(cryptoname:string):void {
    this.router.navigate([`${cryptoname}`]);

  }

  goToMarket(pagename:string):void {
    this.router.navigate([`${pagename}`])
  }*/
