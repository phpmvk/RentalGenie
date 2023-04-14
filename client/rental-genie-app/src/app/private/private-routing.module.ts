import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/home.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add-listing', component: AddListingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
