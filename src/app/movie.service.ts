import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  
  movies = [
    {title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    {title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers'},
    {title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    {title: 'Whiplash', year: '2014', director: 'Damien Chazelle'},
  ];

  getMovies() {
    return this.movies;
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movies.push({title:movietitle, director:moviedirector, year:movieyear});
  }
  
}

