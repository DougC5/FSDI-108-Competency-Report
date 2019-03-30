import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  //entry point
  {path: '', component: MainpageComponent},
  {path: 'user/register', component: RegisteruserComponent },
  {path: 'user/list', component: ListuserComponent},
  {path: 'user/login', component: LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
