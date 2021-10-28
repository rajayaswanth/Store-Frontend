import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthGuard } from './services/AuthGuard';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path:'', component:AuthenticateComponent},
  {path:'home', component:StoreComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
