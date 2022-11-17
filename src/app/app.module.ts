import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    HeaderComponent,
    NavComponent,
    EventCardComponent,
    UserPageComponent,
    GamesPageComponent,
    EventFormComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
