import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FrameworkComponent } from './framework/framework.component';
import { ProductsinfoComponent } from './productsinfo/productsinfo.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductlistComponent,
    FrameworkComponent,
    ProductsinfoComponent,
    CreateComponent,
    DeleteComponent,
    NavigationComponent,
    UpdateComponent,
    AboutComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent],
})
export class AppModule { }
