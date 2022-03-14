import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: `Home`, component: MapComponent },
  { path: `SignUp`, component: SignUpComponent },
  { path: `Login`, component: LoginComponent },
  { path: ``, component: LoginComponent },
  { path: `**`, component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
