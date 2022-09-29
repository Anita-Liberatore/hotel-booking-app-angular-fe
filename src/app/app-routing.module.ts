import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
