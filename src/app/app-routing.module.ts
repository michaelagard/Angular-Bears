import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BearsComponent } from './bears/bears.component';
const routes: Routes = [
  { path: 'bears', component: BearsComponent }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
