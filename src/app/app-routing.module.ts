import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UiOneComponent} from "./components/ui-one/ui-one.component";
import {UiTwoComponent} from "./components/ui-two/ui-two.component";
import {UiThreeComponent} from "./components/ui-three/ui-three.component";

const routes: Routes = [
  {path:'uiOne', component: UiOneComponent},
  {path:'uiTwo', component: UiTwoComponent},
  {path:'uiThree', component: UiThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
