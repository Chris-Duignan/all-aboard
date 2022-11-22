import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';

import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { EventSinglePageComponent } from './components/event-single-page/event-single-page.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { SingleGamePageComponent } from './components/single-game-page/single-game-page.component';
import { DiceComponent } from './components/dice/dice.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'events',
    component: EventPageComponent,
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'user',
    component: UserPageComponent,
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'createEvent',
    component: EventFormComponent,
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },

  { path: 'events/:event_id', component: EventSinglePageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'games/:game_id', component: SingleGamePageComponent },
  { path: 'dice', component: DiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
