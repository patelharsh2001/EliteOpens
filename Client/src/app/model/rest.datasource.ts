import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Tournament } from "./tournament.model";
import{JwtHelperService} from '@auth0/angular-jwt';
import { User } from "./user.model";

const PROTOCOL = 'http';
const PORT=3000;

@Injectable()
export class RestDataSource
{
    user:User; 
    baseurl:string;
    authToken!: string;

    private httpOptions=
    {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };
    
    constructor(private http: HttpClient, private jwtService: JwtHelperService)
  {
      this.user=new User();
    //this.baseurl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseurl = `https://eliteopens.herokuapp.com/api/`;
  }
  getTournaments():Observable<Tournament[]>
  {
      return this.http.get<Tournament[]>(this.baseurl+'list')
  }
  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseurl + 'login', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any>
  {
    this.authToken = null!;
    this.user= null!;
    localStorage.clear();

    return this.http.get<any>(this.baseurl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
  }
  addTournament(tournament: Tournament): Observable<Tournament>
  {
    this.loadToken();
    return this.http.post<Tournament>(this.baseurl + 'list/add', tournament, this.httpOptions);
  }

  updateTournament(tournament: Tournament): Observable<Tournament>
  {
    this.loadToken();
    return this.http.post<Tournament>(`${this.baseurl}list/edit/${tournament._id}`, tournament, this.httpOptions);
  }

  deleteTournament(id: number): Observable<Tournament>
  {
    this.loadToken();

   console.log(id);

    return this.http.get<Tournament>(`${this.baseurl}list/delete/${id}`, this.httpOptions);
  }

  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token!;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}

function _id(_id: any) {
  throw new Error("Function not implemented.");
}
