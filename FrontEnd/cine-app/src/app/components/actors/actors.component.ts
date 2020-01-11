import { Component, OnInit, ViewChild } from '@angular/core';
import { Actor } from '../../models/Actor';
import { ApiService } from '../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[];
  // actor: Actor;
  actor: any;

  @ViewChild('actorModal', {static: false}) actorModal;
  private modalReference: any;

  constructor(private apiService: ApiService, private modalService: NgbModal) {

  }

  ngOnInit() {
    // this.actors = this.apiService.getActors();
    // this.apiService.getActors().subscribe(actors => this.actors = actors);
    this.initActors();
  }

  deleteActor(actor: Actor){
    // this.actors = this.actors.filter(a => a.id !== actor.id);
    this.apiService.deleteActor(actor).subscribe(r => {
        if (r == true)
        {
          this.actors = this.actors.filter(a => a.id !== actor.id);
          return alert('Actor deleted');
        }
        else return alert('No se puede eliminar el actor');
      });
  }

  editActor(actorInput: Actor){
    this.actor = actorInput;
    console.log(actorInput);
    this.modalReference = this.modalService.open(this.actorModal);
  }

  openActorModal() {
    this.resetActor();
    this.modalReference = this.modalService.open(this.actorModal);
  }

  closeActorModal() {
    this.modalReference.close();
    this.resetActor();
  }

  postActorModal() {
    this.modalReference.close();
    if(this.actor.id){
      this.apiService.editActor(this.actor).subscribe(a => {
        // alert('Actor modificado');
        this.initActors();
      });
    }
    else{
      this.apiService.addActor(this.actor).subscribe(a => {
        // if (a == this.actor) return alert('Actor creado');
        // console.log(a);
        // console.log(this.actor);
        alert('Actor creado');
        this.initActors();
      });
    }
    this.resetActor();
  }

  initActors(){
    this.apiService.getActors().subscribe(actors => this.actors = actors);
  }

  resetActor() {
    this.actor = {};
    this.actor.name = "";
    this.actor.lastname = "";
    this.actor.age = null;
    this.actor.imgURL = "";
    this.actor.movies = [];
  }

}

