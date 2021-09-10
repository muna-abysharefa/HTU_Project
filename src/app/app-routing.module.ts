import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { CollapseFaqsComponent } from './collapse-faqs/collapse-faqs.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppointmentComponent } from './appointment/appointment.component'
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'faqs' , component:CollapseFaqsComponent},
  {path:'introduction' , component:IntroductionComponent},
  { path :'book' , component:AppointmentComponent},
{path:'',redirectTo:'introduction', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
