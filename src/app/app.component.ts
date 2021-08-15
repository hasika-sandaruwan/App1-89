import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalOneComponent} from "./modal/modal-one/modal-one.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
  }


  openModal() {
    this.dialog.open(ModalOneComponent);
  }
}
