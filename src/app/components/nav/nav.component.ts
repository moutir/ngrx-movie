import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GetAllMoviesAction,
  GetSelectedMoviesAction,
  GetSelectedMoviesActionSuccess,
  SearchMoviesAction,
  SearchMoviesActionSuccess,
  SearchTypeMoviesAction,
  SearchYearMoviesAction
} from '../../ngrx/movies.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }
  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedMoviesAction({}))
    this.store.dispatch(new GetAllMoviesAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchMoviesAction(dataForm.keyword))
  }

  mySeries() {
    this.store.dispatch(new SearchTypeMoviesAction('series'))
  }

  myMovie() {
    this.store.dispatch(new SearchTypeMoviesAction('movie'))
  }

  onItemSelector(value:number){
    this.store.dispatch(new SearchYearMoviesAction(value))
  }

}
