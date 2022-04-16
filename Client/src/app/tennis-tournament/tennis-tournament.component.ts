import { Component } from '@angular/core';
import { Tournament } from '../model/tournament.model';
import { TournamentRepository } from '../model/tournament.repository';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tennis-tournament',
  templateUrl: './tennis-tournament.component.html',
  styleUrls: ['./tennis-tournament.component.css']
})
export class TennisTournamentComponent  {

  constructor( private repository: TournamentRepository,private router:Router) { }


  get tournaments():Tournament[]{
    return this.repository.getTournaments();
  }

  get names():(string|undefined)[]
  {
    return this.repository.getNames();
  }

  
}
