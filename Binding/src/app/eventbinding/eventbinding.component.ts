import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  public greeting = ""
  onClick(event)
  {
    console.log(event) 
    this.greeting = event.type;
  }
  constructor() { }

  ngOnInit() {
  }

}