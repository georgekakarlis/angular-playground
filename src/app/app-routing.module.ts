import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home',component:DummyTextComponent},
  {path: 'pricing',component:DummyTextComponent},
  {path: 'features',component:DummyTextComponent},
  {path: 'signup',component:DummyTextComponent},
  {path: 'signin',component:SigninComponent},
     //Wild Card Route for 404 request
     { path: '**', pathMatch: 'full',
     component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
