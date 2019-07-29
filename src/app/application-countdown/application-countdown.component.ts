import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'application-countdown',
  templateUrl: './application-countdown.component.html',
  styleUrls: ['./application-countdown.component.scss']
})
export class ApplicationCountdownComponent implements OnInit {
  countdown: any;
   constructor() { }

   ngOnInit() {
    this.startCountdown();
   }
   ngAfterViewInit() {
   }
   startCountdown() {
     // Set the date we're counting down to
    const countDownDate = new Date("July 8, 2019 12:00").getTime();

     // Update the count down every 1 second
    const x = setInterval(() => {

       // Get today's date and time
      const now = new Date().getTime();

       // Find the distance between now and the count down date
      const distance = countDownDate - now;

       // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     this.countdown = {days, hours, minutes, seconds};
       // Display the result in the element with id="demo"
    //   this.dataContainer.nativeElement.innerHTML = `<b> ${days} </b> gün <b>${hours}</b> saat <b>${minutes}</b> dəyqə <b>${seconds}</b> saniyə `;
       // If the count down is finished, write some text
       if (distance < 0) {
         clearInterval(x);
       //  document.getElementById("demo").innerHTML = "EXPIRED";
       }
     }, 1000);
   }

}
