import { Component } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';

@Component({
  selector: 'app-calendar-page',
  template: `
    <div class="full-calendar-page__main-container">
      <app-full-calendar [currentEvents]="currentEvents"></app-full-calendar>
    </div>
  `,
  styles: [`
    .full-calendar-page__main-container {
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: rgb(229, 225, 225);
      overflow-y: scroll;
      margin: 10px;
      min-width: 92vw;
      max-width: 92vw;
      min-height: 97vh;
    }
  `],

})
export class CalendarPageComponent {

  currentEvents!: any[];

  constructor(
    private pStore: PrivateStore,
    private api: ApiClientService,
  ){}

  ngOnInit(): void {
    this.findEvents();
    if (this.currentEvents.length < 1) {
      console.log('making API request for events')
      this.api.getAllEvents().subscribe(res => this.currentEvents = res)
    }
  }

  findEvents(){
    const result = this.pStore.getPrivateEvents()
    console.log('found these events: ', result)
    this.currentEvents = result;
  }

}
