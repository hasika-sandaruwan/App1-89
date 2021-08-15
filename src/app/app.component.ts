import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalOneComponent} from "./modal/modal-one/modal-one.component";
import {HttpClient} from "@angular/common/http";
import {CommentService} from "./services/comment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataArray:any | Object []=[];
  loading=false;

  constructor(private commentService: CommentService) {

  }


  /*
  * POST -> Save [body]
  * GET -> Fetch (get data from the database or external server) [headers]
  * PUT -> update [body]
  * DELETE-> delete [headers]
  * */

  loadAll() {
    this.loading=true;
   this.commentService.getAllComments().subscribe(response=>{
      this.dataArray = response;
      this.loading=false;
      console.log(this.dataArray)
    }, error => {
      console.log(error);
      this.loading=false;
    })
  }
}
