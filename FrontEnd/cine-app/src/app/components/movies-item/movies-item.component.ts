import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() deleteMovieOut: EventEmitter<Movie> = new EventEmitter();
  @Output() editMovieOut: EventEmitter<Movie> = new EventEmitter();
  @Output() addMovieOut: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(movie: Movie){
    this.deleteMovieOut.emit(movie);
  }

  onEdit(movie: Movie){
    this.editMovieOut.emit(movie);
  }

  onAdd(movie: Movie){
    this.addMovieOut.emit(movie);
  }

}
