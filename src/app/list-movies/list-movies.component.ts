import { Component } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
 movies={} as any;

 constructor(private movieService: MovieService) {}

 ngOnInit() {
this.movies = this.movieService.getMovies();
console.log(this.movies);
 }
}
