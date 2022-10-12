import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyTextComponent } from './dummy-text/dummy-text.component';


const routes: Routes = [
  {path: 'home',component:DummyTextComponent},
  {path: 'products',component:DummyTextComponent},
  {path: 'aboutus',component:DummyTextComponent},
  {path: 'contactus',component:DummyTextComponent},
  {path: 'signup',component:DummyTextComponent},
  {path: 'signin',component:DummyTextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
