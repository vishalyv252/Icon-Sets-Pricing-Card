import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-card-page',
  templateUrl: './pricing-card-page.component.html',
  styleUrls: ['./pricing-card-page.component.css'],
  animations: [
    trigger('fadeIn', [
      // Animation for fading in elements
      state('void', style({ opacity: 0 })), // Initial state when element is not yet added to the DOM
      transition(':enter, * => 1', [
        // Transition to fade in when element is added to the DOM or state changes to '1'
        animate('0.8s ease-out', style({ opacity: 1 })), // Animation duration and easing type
      ]),
    ]),
  ]
})
export class PricingCardPageComponent {

  // Boolean flags to manage active states of pricing mode buttons
  basic_mode_button: boolean = false;
  standard_mode_button: boolean = true;
  premium_mode_button: boolean = false;

  // Methods to set active states for each pricing mode button
  basic_mode_button_active(): void {
    this.basic_mode_button = true;
    this.standard_mode_button = false;
    this.premium_mode_button = false;
  }

  standard_mode_button_active(): void {
    this.basic_mode_button = false;
    this.standard_mode_button = true;
    this.premium_mode_button = false;
  }

  premium_mode_button_active(): void {
    this.basic_mode_button = false;
    this.standard_mode_button = false;
    this.premium_mode_button = true;
  }

}
