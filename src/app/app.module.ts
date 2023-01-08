import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import { OneDetailComponent } from './one-detail/one-detail.component';
import { FiveComponent } from './five/five.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FetchdataV2Component } from './fetchdata-v2/fetchdata-v2.component';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import { SixComponent } from './six/six.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    OneDetailComponent,
    FiveComponent,
    FetchDataComponent,
    FetchdataV2Component,
    SixComponent,
    DrivenFormComponent,
    SevenComponent,
    EightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    HttpClientModule , 
    FormsModule,
    TextFieldModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
