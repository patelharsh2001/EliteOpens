import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { Observable,from } from 'rxjs';

@Injectable()

export class StaticDataSource
{
        private tournament:Tournament[]=
        [
            new Tournament(1,'ABC Tennis','Ahmedabad','500','30rd November 2022'),
            new Tournament(2,'NPQ Tennis','Mumbai','500','25nd November 2022'),
            new Tournament(3,'XYZ Tennis','Kerala','500','20rd November 2022')
            



        ];

        getTournament():Observable<Tournament[]>{
            return from([this.tournament]);
        }




}