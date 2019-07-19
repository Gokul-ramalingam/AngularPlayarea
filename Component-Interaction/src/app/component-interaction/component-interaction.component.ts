import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
   
  @Input() public parentData;
  
  @Output() public childEvent = new EventEmitter();
  fireEvent()
  {
    this.childEvent.emit("Hey Angular");
  }

  constructor() { }

  ngOnInit() {
  }

}
