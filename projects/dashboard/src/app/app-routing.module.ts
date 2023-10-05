import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  { path: 'dashboard/one', component: Comp1Component },
  { path: 'dashboard/two', component: Comp2Component },
  { path: 'dashboard', redirectTo: 'dashboard/one' },
  // { path: '**', redirectTo: 'dashboard/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
