import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CryptoinfoComponent} from "./Components/cryptoinfo/cryptoinfo.component";
import {MarketComponent} from "./Components/market/market.component";
import {AboutComponent} from "./Components/about/about.component";
import {NewsComponent} from "./Components/news/news.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";


const routes: Routes = [
  {path: 'cryptoinfo', component: CryptoinfoComponent},
  {path: 'market', component: MarketComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'LoginComponent', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [MarketComponent, CryptoinfoComponent, LoginComponent, NewsComponent, AboutComponent,
 RegisterComponent]
