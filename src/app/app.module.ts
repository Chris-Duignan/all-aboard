import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessagesComponent } from './components/messages/messages.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

//angualr styling using Angular Material
//felix added -> in termainal installed 'ng add @angular/material'
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //angular icons
import { EventSinglePageComponent } from './components/event-single-page/event-single-page.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { SingleGamePageComponent } from './components/single-game-page/single-game-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { JoinChatComponent } from './components/join-chat/join-chat.component';
import { ChatCardComponent } from './components/chat-card/chat-card.component'; //angular icons
import { MapComponent } from './components/map/map.component';
import { DiceComponent } from './components/dice/dice.component';//angular icons

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    HeaderComponent,
    NavComponent,
    MessagesComponent,
    ChatComponent,
    EventCardComponent,
    UserPageComponent,
    GamesPageComponent,
    EventFormComponent,
    SignUpComponent,
    LoginComponent,
    EventSinglePageComponent,
    GameCardComponent,
    SingleGamePageComponent,
    LoadingComponent,
    JoinChatComponent,
    ChatCardComponent,
    MapComponent,
    DiceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FontAwesomeModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
