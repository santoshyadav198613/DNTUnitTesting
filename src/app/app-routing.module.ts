import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

import { UserComponent } from './components/user/user.component';
import { RouterFormComponent } from './components/router-form/routerform.component';

const routes: Routes = [
  { path: 'home', component: FormComponent },
  { path: 'user', component: UserComponent },
  { path: 'routerform', component: RouterFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

