import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference = Math.abs(value - todayWithNoTime ); // returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    let dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    let dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1 && value > todayWithNoTime) {
        return dateCounter;
    } else {
        return 0;
    }
  }
}
