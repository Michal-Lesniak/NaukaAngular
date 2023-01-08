import { OneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { OneDetailComponent } from './one-detail/one-detail.component';
import { FiveComponent } from './five/five.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchdataV2Component } from './fetchdata-v2/fetchdata-v2.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: OneComponent},
  {path: 'one/:idAuthor', component: OneDetailComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: 'four/:idOffer', component: FourComponent},
  {path: 'five', component: FiveComponent}, 
  {path: 'six', component: SixComponent},
  {path: 'seven', component: SevenComponent}, 
  {path: 'fetchData', component: FetchDataComponent},
  {path: 'fetchDatav2', component: FetchdataV2Component},
  {path: 'drivenForm', component: DrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
