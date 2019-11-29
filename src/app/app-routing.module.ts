import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {CustomerComponent} from './register/customer/customer.component';
import {SupplierComponent} from './register/supplier/supplier.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'supplier',
        component: SupplierComponent
      },
      {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
