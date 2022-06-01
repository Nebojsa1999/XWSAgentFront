import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { UnactivatedBusinessesComponent } from './unactivated-businesses/unactivated-businesses.component';
import { UpdateBusinessesComponent } from './update-businesses/update-businesses.component';
import { PostReactionComponent } from './post-reaction/post-reaction.component';
import { CreateJobOfferComponent } from './create-job-offer/create-job-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SaveApiComponent } from './save-api/save-api.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ReactionsComponent } from './reactions/reactions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateBusinessComponent,
    UnactivatedBusinessesComponent,
    UpdateBusinessesComponent,
    PostReactionComponent,
    CreateJobOfferComponent,
    SaveApiComponent,
    HomePageComponent,
    OwnerPageComponent,
    UserPageComponent,
    ReactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
