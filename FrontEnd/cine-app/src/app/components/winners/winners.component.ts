import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Winner } from 'src/app/models/Winner';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  winners: Winner[];
  winner: Winner;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.initWinners();
  }

  initWinners(){
    this.apiService.getWinners().subscribe(w => this.winners = w);
  }

  deleteWinner(winner: Winner){
    this.apiService.deleteWinner(winner).subscribe(r => {
      console.log(r);
      this.winners = this.winners.filter(w => w.id !== winner.id);
      alert("Winner deleted");
      });
  }

}
