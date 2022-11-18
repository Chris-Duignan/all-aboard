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

//angualr styling using Angular Material
//felix added -> in termainal installed 'ng add @angular/material'
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //angular icons
import { EventSinglePageComponent } from './components/event-single-page/event-single-page.component';

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
    LoginComponent,
    EventSinglePageComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, MatIconModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
