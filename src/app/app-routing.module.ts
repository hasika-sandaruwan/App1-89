import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UiOneComponent} from "./components/ui-one/ui-one.component";
import {UiTwoComponent} from "./components/ui-two/ui-two.component";
import {UiThreeComponent} from "./components/ui-three/ui-three.component";
import {ChildOneComponent} from "./components/ui-three/inner-items/child-one/child-one.component";
import {ChildTwoComponent} from "./components/ui-three/inner-items/child-two/child-two.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/uiOne', pathMatch: 'full'},
  {path: 'uiOne', component: UiOneComponent},
  {path: 'uiTwo/:name', component: UiTwoComponent},
  {
    path: 'uiThree', component: UiThreeComponent,
    children: [
      {path: '', redirectTo: '/uiThree/childOne', pathMatch: 'full'},
      {path: 'childOne', component: ChildOneComponent},
      {path: 'childTwo', component: ChildTwoComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
