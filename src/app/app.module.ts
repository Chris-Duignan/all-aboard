import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    HeaderComponent,
    NavComponent,
    EventCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
