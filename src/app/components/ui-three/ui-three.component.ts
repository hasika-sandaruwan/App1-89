import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ui-three',
  templateUrl: './ui-three.component.html',
  styleUrls: ['./ui-three.component.scss']
})
export class UiThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(location: string) {
    this.router.navigate(['/uiThree/'+location]).then(response=>{
      alert('Ok');
    }).catch(error=>{
      alert(error)
    })
  }
}
