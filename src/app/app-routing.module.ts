import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GamesComponent } from './games/games.component';
import { JwtGuard } from './jwt.guard';
import { LaunchComponent } from './launch/launch.component';
import { MapComponent } from './map/map.component';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';
import { SessionComponent } from './session/session.component';
import { TournComponent } from './tourn/tourn.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'reg', component: RegComponent },
  { path: 'map/:v', component: MapComponent },
  { path: 'launch/:g/:v/:s', component: LaunchComponent, canActivate: [JwtGuard] },
  { path: 'launch/:g/:v', component: LaunchComponent, canActivate: [JwtGuard] },
  { path: 'launch/:g', component: LaunchComponent, canActivate: [JwtGuard] },
  { path: 'launch', component: LaunchComponent, canActivate: [JwtGuard] },
  { path: 'session/:s/:g/:v', component: SessionComponent, canActivate: [JwtGuard] },
  { path: 'session/:s/:g', component: SessionComponent, canActivate: [JwtGuard] },
  { path: 'session/:s', component: SessionComponent, canActivate: [JwtGuard] },
  { path: 'session', component: SessionComponent, canActivate: [JwtGuard] },
  { path: 'tournament/:g/:v', component: TournComponent, canActivate: [JwtGuard] },
  { path: 'tournament', component: TournComponent, canActivate: [JwtGuard] },
  { path: 'members/:id', component: MembersComponent, canActivate: [JwtGuard] },
  { path: 'games/:id/:us', component: GamesComponent, canActivate: [JwtGuard] },
  { path: 'games/:id', component: GamesComponent, canActivate: [JwtGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [JwtGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
