import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TennisTournamentComponent } from './tennis-tournament/tennis-tournament.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { HomeComponent } from './pages/home/home.component';
import { TournamentFirstGuard } from './guards/tournamentFirst.guard';

const routes: Routes = [
  {path: 'home',component: HomeComponent,data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

  {path: 'complete',component:CompleteComponent,data: {title: 'Completed Tournaments'},canActivate:[TournamentFirstGuard]},
  {path: 'list',component:TennisTournamentComponent,data: {title: 'Activated Tournaments'},canActivate:[TournamentFirstGuard]},
  {path: 'list',component:TennisTournamentComponent,data:{title:'Tournaments'},canActivate:[TournamentFirstGuard]},
  //{path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[TournamentFirstGuard]
})
export class AppRoutingModule { }