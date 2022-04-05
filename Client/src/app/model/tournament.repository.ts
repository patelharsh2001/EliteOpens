import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tournament } from "./tournament.model";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()

export class TournamentRepository
{
    private tournaments: Tournament[]=[];

    private Names: (string|undefined)[]=[];


    constructor(private dataSource: RestDataSource)
    {
        dataSource.getTournaments().subscribe(data=>{
            this.tournaments=data;
            this.Names=data.map(b=>b.name).filter((n,index,array)=>array.indexOf(n)===index).sort();
        });
    }

    getTournaments(Name: string = null!):Tournament[]
    {
        return this.tournaments.filter(b=>Name==null||Name==b.name);
    }

    getTournament(id: number):Tournament | undefined
    {
        return this.tournaments.find(b => b._id===id);
    }

    getNames(): (string|undefined)[]
    {
        return this.Names;
    }

    saveTournament(savedTournament: Tournament): void
  {
    if (savedTournament._id === null || savedTournament._id === 0 || savedTournament._id === undefined)
    {
      this.dataSource.addTournament(savedTournament).subscribe(b => {
        this.tournaments.push(savedTournament);
      });
    }
    else
    {
      this.dataSource.updateTournament(savedTournament).subscribe(tournament => {
        this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
      });
    }
  }

  deleteTournament(deletedTournamentID: number): void
  {
    this.dataSource.deleteTournament(deletedTournamentID).subscribe(tournament => {
      this.tournaments.splice(this.tournaments.findIndex(b => b._id === deletedTournamentID), 1);
    });
  }
}