import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Winner } from 'src/app/models/Winner';

@Component({
  selector: 'app-winners-item',
  templateUrl: './winners-item.component.html',
  styleUrls: ['./winners-item.component.css']
})
export class WinnersItemComponent implements OnInit {
  @Input() winner: Winner;
  @Output() deleteWinnerOut: EventEmitter<Winner> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(winner: Winner){
    this.deleteWinnerOut.emit(winner);
  }

}
