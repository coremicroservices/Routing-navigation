import { CountiresComponent } from './countires/countires.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'Country/:code',
  component: CountryComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Index',
    component: IndexComponent
  },
  {
    path: 'Countries',
    component: CountiresComponent
  },
  {
    path: '**',
    redirectTo: 'Countries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
