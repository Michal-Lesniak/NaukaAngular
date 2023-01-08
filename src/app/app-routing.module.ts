import { OneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { OneDetailComponent } from './one-detail/one-detail.component';
import { FiveComponent } from './five/five.component';

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: OneComponent},
  {path: 'one/:idAuthor', component: OneDetailComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: 'four/:idOffer', component: FourComponent},
  {path: 'five', component: FiveComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
