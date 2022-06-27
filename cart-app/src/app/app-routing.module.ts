import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductsinfoComponent } from './productsinfo/productsinfo.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductlistComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'cart', component: CheckoutComponent
  },
  {
    path: 'products/:productsid', component: ProductsinfoComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'update/:productsid', component: UpdateComponent
  },
  {
    path: 'delete/:deleteid', component: DeleteComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
