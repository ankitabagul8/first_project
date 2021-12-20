import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'movies',component:MoviesComponent},
   {path:'booking',component:BookingComponent},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'feedback',component:FeedbackComponent},
   {path:'contact',component:ContactComponent},
   {path:'header',component:HeaderComponent},
   {path:'footer',component:FooterComponent},
   {path:'upcoming',component:UpcomingComponent}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   })

   export class AppRoutingModule { }
