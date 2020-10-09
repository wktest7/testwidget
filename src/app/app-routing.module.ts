import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowyComponent } from './nowy/nowy.component';

const routes: Routes = [
  { path: 'nowy', component: NowyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
