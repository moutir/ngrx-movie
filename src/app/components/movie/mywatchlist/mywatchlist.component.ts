import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Movie } from 'src/app/model/movies.model';
import { MoviesState ,MoviesStateEnum} from 'src/app/ngrx/movies.reducer';
import {GetSelectedMoviesAction, GetSelectedMoviesActionSuccess, SelectMovieAction} from '../../../ngrx/movies.actions';


@Component({
  selector: 'app-mywatchlist',
  templateUrl: './mywatchlist.component.html',
  styleUrls: ['./mywatchlist.component.css']
})
export class MywatchlistComponent implements OnInit {

moviesState$:Observable<MoviesState>|null=null;
  readonly MoviesStateEnum= MoviesStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.moviesState$=this.store.pipe(
      map((state)=>  state.catalogState)
    );

    
      this.store.dispatch(new GetSelectedMoviesAction({}))
    
  }
  onSelect(movie:Movie){
    this.store.dispatch(new SelectMovieAction(movie))
    this.store.dispatch(new GetSelectedMoviesAction({}))
  }

}
