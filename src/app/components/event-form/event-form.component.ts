import { Component, OnInit } from '@angular/core';
import { Event } from  "../../classes/event";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {

  model = new Event("", "12.35", "34.1", "Manchester", "", "", 2 /* This is the user id, we need this from auth*/, 0, true, false, "")

  submitted = false;

  onSubmit() { this.submitted = true; }

}
