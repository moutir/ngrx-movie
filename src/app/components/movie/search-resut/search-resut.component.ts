import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Movie } from 'src/app/model/movies.model';
import { MoviesState ,MoviesStateEnum} from 'src/app/ngrx/movies.reducer';
import {GetAllMoviesAction, GetAllMoviesActionSuccess, GetSelectedMoviesAction, SelectMovieAction,SelectMovieActionSuccess} from '../../../ngrx/movies.actions';

@Component({
  selector: 'app-search-resut',
  templateUrl: './search-resut.component.html',
  styleUrls: ['./search-resut.component.css']
})
export class SearchResutComponent implements OnInit {
  @Input() movie:Movie|null=null;

  moviesState$:Observable<MoviesState>|null=null;
  readonly MoviesStateEnum= MoviesStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.moviesState$=this.store.pipe(
      map((state)=>  state.catalogState)
    );

    
      this.store.dispatch(new GetAllMoviesAction({}))
    
  }
  onSelect(movie:Movie){
   
    if (movie.selected){
      alert("Already Listed")
    }
    else{
      this.store.dispatch(new SelectMovieAction(movie))
      this.store.dispatch(new GetSelectedMoviesAction({}))
      
    }
  }

  

}
