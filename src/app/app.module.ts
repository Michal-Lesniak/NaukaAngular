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
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UseFactoryComponent } from './use-factory/use-factory.component'; 
import { PrimeService } from './prime.service';
import { serviceFactory } from './factoryservice.service';
import { whichService } from './calculation.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';


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
    EightComponent,
    ReactiveFormsComponent,
    UseFactoryComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{provide: PrimeService, useFactory: serviceFactory, deps: ['CalcService']},{provide: 'CalcService', useValue: whichService.info} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
