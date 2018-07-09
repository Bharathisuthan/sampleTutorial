import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MyFormComponent } from './my-form/my-form.component';

let appRoutes: Routes = [
	{ path: '', redirectTo: 'first', pathMatch: 'full' },
	{ path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
	{ path: 'my-form', component: MyFormComponent },
	{ path: '**', redirectTo: 'first' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}