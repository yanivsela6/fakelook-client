import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecretGuard } from './guards/secret.guard';

const routes: Routes = [
  
  { path: `Home`, component: HomeComponent,
  children: [
    {
      path: 'filter', 
      component: FilterComponent, 
    },
    {
      path: 'friends', 
      component: FriendsComponent, 
    }
  ], canActivate: [SecretGuard] },
  { path: `SignUp`, component: SignUpComponent },
  { path: `Login`, component: LoginComponent },
  { path: `ForgetPassword`, component: ForgetPasswordComponent },
  { path: ``, component: LoginComponent },
  { path: `**`, component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
