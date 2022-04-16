import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TennisTournamentModule} from'./tennis-tournament/tennis-tournament.module';
import { PartialsModule } from './partials/partials.module';
import { PagesModule } from './pages/pages.module';
import { JwtModule,JwtHelperService,JwtInterceptor } from '@auth0/angular-jwt';
import { RestDataSource } from './model/rest.datasource';
import { HttpClientModule } from '@angular/common/http';



export function jwtTokenGetter(): string|null
{
  return localStorage.getItem('id_token');
}



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TennisTournamentModule, 
    PagesModule,
    PartialsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:jwtTokenGetter
      }
    })
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
