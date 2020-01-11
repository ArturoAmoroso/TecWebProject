import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors-item',
  templateUrl: './actors-item.component.html',
  styleUrls: ['./actors-item.component.css']
})
export class ActorsItemComponent implements OnInit {
  @Input() actor: Actor;
  @Output() deleteActorOutput: EventEmitter<Actor> = new EventEmitter();
  @Output() editActorOutput: EventEmitter<Actor> = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDelete(actor: Actor){
    // console.log("Delete actor");
    // console.log(actor);
    this.deleteActorOutput.emit(actor);
  }

  onEdit(actor: Actor){
    this.editActorOutput.emit(actor);
  }

  onDetail(actor: Actor){
    this.router.navigateByUrl(`actors/${actor.id}`)
  }

}
