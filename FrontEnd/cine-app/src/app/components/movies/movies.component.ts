import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { Movie } from 'src/app/models/Movie';
import { ApiService } from '../../services/api.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Winner } from 'src/app/models/Winner';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() actor: Actor;
  movies: Movie[];
  movie: any;
  winner: any;

  @ViewChild('movieModal', {static: false}) movieModal;
  private modalReference: any;

  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit() {
    this.initMovies();
  }

  initMovies(){
    this.apiService.getMovies(this.actor.id).subscribe(m =>
      {
        this.movies = m;
        console.log(this.movies);
      });
  }

  deleteMovie(movie: Movie){
    alert("Movie deleted");
    this.movies = this.movies.filter(m => m.id !== movie.id);
    this.apiService.deleteMovie(this.actor.id, movie.id).subscribe();

    // this.apiService.deleteMovie(this.actor.id, movie.id).subscribe(r => {
    //   console.log(r);
    //   this.movies = this.movies.filter(m => m.id !== movie.id);
    //   alert("Movie deleted");
    // });
  }

  openMovieModal() {
    this.resetMovie();
    this.modalReference = this.modalService.open(this.movieModal);
  }

  closeMovieModal() {
    this.modalReference.close();
    this.resetMovie();
  }

  editMovie(movieInput: Movie){
    this.movie = movieInput;
    console.log(this.movie);
    this.modalReference = this.modalService.open(this.movieModal);
  }

  postMovieModal() {
    this.modalReference.close();
    if(this.movie.id){
      this.apiService.editMovie(this.actor.id, this.movie).subscribe(a => {
        this.initMovies();
      });
    }
    else{
      this.apiService.addMovie(this.actor.id, this.movie).subscribe(a => {
        alert('Movie created');
        this.initMovies();
      });
    }
    this.resetMovie();
  }

  resetMovie() {
    this.movie = {};
    this.movie.name = "";
    this.movie.duration = null;
    this.movie.year = null;
    this.movie.genre = "";
    this.movie.imgURL = "";
    this.movie.actorId = this.actor.id;
  }

  addWinner(movie: Movie){
    this.winner = {};
    this.winner.name = this.actor.name;
    this.winner.lastname = this.actor.lastname;
    this.winner.movie = movie.name;
    this.winner.year = movie.year;
    this.winner.imgUrlActor = this.actor.imgURL;
    this.winner.imgUrlMovie = movie.imgURL;

    this.apiService.addWinner(this.winner).subscribe( a => {
      console.log(a);
      alert('Winner created');
    });
    
  }
}
