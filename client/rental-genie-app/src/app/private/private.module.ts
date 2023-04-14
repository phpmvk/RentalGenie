import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  exports: [
    PrivateComponent
  ]
})
export class PrivateModule { }
