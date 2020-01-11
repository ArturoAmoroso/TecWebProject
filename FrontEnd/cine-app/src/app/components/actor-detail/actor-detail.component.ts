import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/Actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const actorId = this.route.snapshot.paramMap.get("id");
    this.apiService.getActor(actorId).subscribe(a => this.actor = a);
  }

}
