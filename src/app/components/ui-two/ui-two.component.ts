import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-ui-two',
  templateUrl: './ui-two.component.html',
  styleUrls: ['./ui-two.component.scss']
})
export class UiTwoComponent implements OnInit {
  importedUserName: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   /* this.importedUserName =
      this.activatedRoute.snapshot.paramMap.get('name');*/

    this.activatedRoute.paramMap.subscribe(resp=>{
      this.importedUserName = resp.get('name');
    }, error => {
      console.log(error)
    })

  }

}
