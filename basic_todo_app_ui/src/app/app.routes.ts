import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'home', component: Home },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}