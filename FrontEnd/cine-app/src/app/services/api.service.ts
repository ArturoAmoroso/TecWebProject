import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actor } from '../models/Actor';
import { Movie } from '../models/Movie';
import { Winner } from '../models/Winner';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  actorsUrl:string = 'https://localhost:44305/api/actors';
  winnersUrl:string = 'https://localhost:44305/api/winners';

  getActors():Observable<Actor[]>{
    return this.http.get<Actor[]>(this.actorsUrl);
  }

  deleteActor(actor: Actor): Observable<boolean>{
    const actorUrl:string = `${this.actorsUrl}/${actor.id}`;
    return this.http.delete<boolean>(actorUrl);
  }

  addActor(actor: Actor): Observable<Actor>{
    return this.http.post<Actor>(this.actorsUrl, actor);
  }

  editActor(actor: Actor): Observable<Actor>{
    const actorUrl:string = `${this.actorsUrl}/${actor.id}`;
    return this.http.put<Actor>(actorUrl, actor);
  }

  getActor(id: string):Observable<Actor>{
    const actorUrl:string = `${this.actorsUrl}/${id}`;
    return this.http.get<Actor>(actorUrl);
  }

  // MOVIES
  getMovies(idActor: number): Observable<Movie[]>{
    const moviesUrl:string = `${this.actorsUrl}/${idActor}/movies`;
    return this.http.get<Movie[]>(moviesUrl);
  }

  deleteMovie(idActor: number, idMovie: number): Observable<string>{
    const movieUrl:string = `${this.actorsUrl}/${idActor}/movies/${idMovie}`;
    return this.http.delete<string>(movieUrl);
  }

  addMovie(idActor: number, movie: Movie): Observable<Actor>{
    const movieUrl:string = `${this.actorsUrl}/${idActor}/movies/`;
    return this.http.post<Actor>(movieUrl, movie);
  }

  editMovie(idActor: number, movie: Movie): Observable<Actor>{
    const movieUrl:string = `${this.actorsUrl}/${idActor}/movies/${movie.id}`;
    return this.http.put<Actor>(movieUrl, movie);
  }

  // WINNNERS
  getWinners():Observable<Winner[]>{
    return this.http.get<Winner[]>(this.winnersUrl);
  }

  deleteWinner(winner: Winner): Observable<boolean>{
    const winnerUrl:string = `${this.winnersUrl}/${winner.id}`;
    return this.http.delete<boolean>(winnerUrl);
  }

  addWinner(winner: Winner): Observable<Winner>{
    return this.http.post<Winner>(this.winnersUrl, winner);
  }

}
