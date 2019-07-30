import { Component, Directive, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  options: any;
  event:any;
  @ViewChild('calendar', {static: false})calendar: FullCalendarComponent; // the #calendar in the template
  @ViewChild('external', {static: false}) external: ElementRef;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

//   ngAfterViewInit() {
//     console.log(this.external)
//   new Draggable(this.external.nativeElement, {
//     itemSelector: '.fc-event',
//     eventData: function(eventEl) {
//       return {
//         title: eventEl.innerText
//       };
//     }
// }); 
//   }
 
  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  // gotoPast() {
  //   let calendarApi = this.calendarComponent.getApi();
  //   calendarApi.gotoDate('2019-01-01'); // call a method on the Calendar object
  // }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.event=prompt("Enter Event","")
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title:this.event,
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
  
}
