import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { AuthComponent } from './auth/auth.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'private', component: PrivateComponent },
  // {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  // {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  // {path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
