import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TennisTournamentComponent } from '../tennis-tournament/tennis-tournament.component';


@Injectable()
export class TournamentFirstGuard
{
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.firstNavigation)
    {
      this.firstNavigation = false;
      if (route.component !== TennisTournamentComponent)
      {
        this.router.navigateByUrl('/tournament');
        return false;
      }
    }
    return true;
  }
}