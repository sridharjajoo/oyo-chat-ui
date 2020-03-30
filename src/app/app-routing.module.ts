import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';


const routes: Routes = [
  { path: 'pm', component: UserComponent },
  { path: 'guest', component: GuestComponent},
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
