import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'persianCalendar'
})
export class CalendarPipe implements PipeTransform {
    dateOption: Object = { year: 'numeric', month: 'short', day: 'numeric' };
    timeOption: Object = { hour: '2-digit', minute: '2-digit', hour12: false };

    transform(value: any) {
        const date = new Date(value).toLocaleDateString('fa-IR', this.dateOption);
        const time = new Date(value).toLocaleTimeString([], this.timeOption);
            return date + ' - ساعت ' + time;
    }
}