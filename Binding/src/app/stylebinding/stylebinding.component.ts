import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
 public hasError = true;
 public highlightColor = 'purple';
 public titleStyles = {
   color : 'Brown',
   fontStyle : 'italic'
 }
  constructor() { }

  ngOnInit() {
  }

}
