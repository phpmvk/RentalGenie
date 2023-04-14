import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  { path: '**', redirectTo: 'public' } // handle all other routes, redirect to public
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
