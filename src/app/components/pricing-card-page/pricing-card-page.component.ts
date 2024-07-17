import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-card-page',
  templateUrl: './pricing-card-page.component.html',
  styleUrl: './pricing-card-page.component.css',
  animations:[
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, * => 1', [
        animate('0.8s ease-out', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class PricingCardPageComponent {

  basic_mode_button : boolean = false;
  standard_mode_button : boolean = true;
  premium_mode_button : boolean = false;

  basic_mode_button_active() : void {
    this.basic_mode_button = true;
    this.standard_mode_button = false;
    this.premium_mode_button = false;
  }

  standard_mode_button_active() : void {
    this.basic_mode_button = false;
    this.standard_mode_button = true;
    this.premium_mode_button = false;
  }

  premium_mode_button_active() : void {
    this.basic_mode_button = false;
    this.standard_mode_button = false;
    this.premium_mode_button = true;
  }

}
