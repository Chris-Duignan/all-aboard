import { Injectable } from '@angular/core';
import { formatDate } from 'src/utils/formatDate';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeMeetPopup(meet:any):string{
    return `` +
    `<div>${meet.title}</div>` +
    `<div>${meet.area}</div>` +
    `<div>${formatDate(meet.date)}</div>` +
    `<div>${meet.start_time}</div>`
  }
}
