import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full'},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'events', component: EventPageComponent,  canActivate: [AuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) } },
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) } },
  { path: 'createEvent', component: EventFormComponent, canActivate: [AuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
