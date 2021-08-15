import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ModalOneComponent } from './modal/modal-one/modal-one.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import { UiOneComponent } from './components/ui-one/ui-one.component';
import { UiTwoComponent } from './components/ui-two/ui-two.component';
import { UiThreeComponent } from './components/ui-three/ui-three.component';
import { ChildOneComponent } from './components/ui-three/inner-items/child-one/child-one.component';
import { ChildTwoComponent } from './components/ui-three/inner-items/child-two/child-two.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    ModalOneComponent,
    UiOneComponent,
    UiTwoComponent,
    UiThreeComponent,
    ChildOneComponent,
    ChildTwoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
