import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  public classBinding = "text-success"
  public hasError = false;
  public isSpecial = true;
  public messageClass = {
      "text-success" : !this.hasError,
      "text-danger"  : this.hasError,
      "text-special" : this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
