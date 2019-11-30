import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './header/content/content.component';
import { SearchComponent } from './header/search/search.component';
import { CustomerComponent } from './register/customer/customer.component';
import { SupplierComponent } from './register/supplier/supplier.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ContentComponent,
    SearchComponent,
    CustomerComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
