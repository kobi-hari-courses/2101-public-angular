import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';
import { map, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;  


  constructor(
    private moviesService: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router

  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(prms => Number(prms['mispar'])), 
      map(index => this.moviesService.getMovideByIndex(index)), 
      switchAll()
    );
  }

  goNext() {
    let index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index + 1]);    
  }

  goPrev() {
    let index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index - 1]);    
  }

  goEdit() {
    let index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index, 'edit']);    
  }

}
