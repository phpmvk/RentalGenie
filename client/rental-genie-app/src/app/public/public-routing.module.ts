import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingDetailComponent } from './pages/listing-detail/listing-detail.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children: [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listing-detail/:id', component: ListingDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
