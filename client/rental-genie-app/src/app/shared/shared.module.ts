import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PublicRoutingModule } from '../public/public-routing.module';



@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class SharedModule { }
