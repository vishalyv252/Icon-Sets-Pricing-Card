import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingCardPageComponent } from './components/pricing-card-page/pricing-card-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  // Here is the default url page for angular application.
  { path: '', component: PricingCardPageComponent },

  // When the User entered wrong url it will display this 404 Not Found Page for angular application.
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
