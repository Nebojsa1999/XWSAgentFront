import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { CreateJobOfferComponent } from './create-job-offer/create-job-offer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { PostReactionComponent } from './post-reaction/post-reaction.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { RegisterComponent } from './register/register.component';
import { SaveApiComponent } from './save-api/save-api.component';
import { UnactivatedBusinessesComponent } from './unactivated-businesses/unactivated-businesses.component';
import { UpdateBusinessesComponent } from './update-businesses/update-businesses.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'updateBusiness',
    component: UpdateBusinessesComponent
  },
  {
    path:'createBusiness',
    component: CreateBusinessComponent
  },
  {
    path:'postReaction',
    component: PostReactionComponent
  },
  {
    path:'createJob',
    component: CreateJobOfferComponent
  },
  {
    path:'unactivatedBusinesses',
    component: UnactivatedBusinessesComponent
  },
  {
    path:'saveApi',
    component: SaveApiComponent
  },
  {
    path:'userPage',
    component: UserPageComponent
  },
  {
    path:'ownerPage',
    component: OwnerPageComponent
  },
  {
    path:'reactions',
    component: ReactionsComponent
  },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
