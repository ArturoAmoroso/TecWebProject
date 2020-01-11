import { Movie } from './Movie'

export class Actor {
    id: number;
    name: string;
    lastname: string;
    age: number;
    imgURL: string;
    movies?: Movie[];
}