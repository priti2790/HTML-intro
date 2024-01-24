import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  {path:'userLogin',component:UserLoginComponent},
  { path : 'usersignup', component : UserSignupComponent},
  { path : 'userSuccess', component : UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
