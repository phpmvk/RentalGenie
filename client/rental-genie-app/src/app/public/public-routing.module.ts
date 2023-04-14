import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path: '', component: PublicComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ]
})
export class PublicRoutingModule { }
