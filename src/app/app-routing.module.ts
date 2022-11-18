import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { SingleGamePageComponent } from './components/single-game-page/single-game-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'createEvent', component: EventFormComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'games/:game_id', component: SingleGamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
