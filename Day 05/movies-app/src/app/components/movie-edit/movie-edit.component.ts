import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchAll } from 'rxjs/operators';
import { Movie } from 'src/app/core/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$: Observable<Movie>;  

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(prms => Number(prms['mispar'])), 
      map(index => this.moviesService.getMovideByIndex(index)), 
      switchAll()
    );
  }

}
