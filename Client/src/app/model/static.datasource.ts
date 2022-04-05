import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { Observable,from } from 'rxjs';

@Injectable()

export class StaticDataSource
{
        private tournament:Tournament[]=
        [
            new Tournament(1,'ABC Tennis','Goa','500','23rd November 2021'),
            new Tournament(2,'NPQ Tennis','Due','500','2nd November 2021'),
            new Tournament(3,'XYZ Tennis','Fiji','500','25rd November 2021')
            



        ];

        getTournament():Observable<Tournament[]>{
            return from([this.tournament]);
        }




}