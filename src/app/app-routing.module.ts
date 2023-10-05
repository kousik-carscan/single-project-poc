import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartagAppSharedModule } from 'projects/cartag/src/app/app.module';
import { DashboardAppSharedModule } from 'projects/dashboard/src/app/app.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'cartag',
    // loadChildren: '../../projects/cartag/src/app/app.module#CartagAppSharedModule'
    loadChildren: () => import('../../projects/cartag/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'dashboard',
    // loadChildren: '../../projects/dashboard/src/app/app.module#DashboardAppSharedModule'
    loadChildren: () => import('../../projects/dashboard/src/app/app.module').then(m => m.AppModule)
  },
  { path: '**', redirectTo: '/dashboard/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardAppSharedModule.forRoot(),
    CartagAppSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
