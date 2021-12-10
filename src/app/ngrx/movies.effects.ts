import { Injectable } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
    GetAllMoviesAction,
    GetAllMoviesActionSuccess,
    GetAllMoviesActionError,
    GetSelectedMoviesAction,
    GetSelectedMoviesActionSuccess,
    GetSelectedMoviesActionError,
    SelectMovieAction,
    SelectMovieActionSuccess,
    SelectMovieActionError,
    SearchMoviesAction,
    SearchMoviesActionSuccess,
    SearchMoviesActionError,
    SearchTypeMoviesAction,
    SearchTypeMoviesActionSuccess,
    SearchTypeMoviesActionError,
    SearchYearMoviesAction,
    SearchYearMoviesActionSuccess,
    SearchYearMoviesActionError,

    MoviesActionsTypes,
    MoviesActions,
} from './movies.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {
    constructor(private moviesService: MoviesService, private effectActions: Actions) {
    }
    /* Get All Movies*/
    getAllMoviesEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.GET_ALL_MOVIES),
            mergeMap((action) => {
                return this.moviesService.getMovies()
                    .pipe(
                        map((movies) => new GetAllMoviesActionSuccess(movies)),
                        catchError((err) => of(new GetAllMoviesActionError(err.message)))
                    )
            })
        )
    );

    /* Get Selected Movies*/
    getSelectedMoviesEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.GET_SELECTED_MOVIES),
            mergeMap((action) => {
                return this.moviesService.getSelectedMovies()
                    .pipe(
                        map((movies) => new GetSelectedMoviesActionSuccess(movies)),
                        catchError((err) => of(new GetSelectedMoviesActionError(err.message)))
                    )
            })
        )
    );

    /* Update selected Movies*/
    selectMovieEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.SELECT_MOVIE),
            mergeMap((action: MoviesActions) => {
                return this.moviesService.setSelected(action.payload)
                    .pipe(
                        map((movie) => new SelectMovieActionSuccess(movie)),
                        catchError((err) => of(new SelectMovieActionError(err.message)))
                    )
            })
        )
    );

    /* Search Movies*/
    searchMoviesEffect: Observable<MoviesActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.SEARCH_MOVIES),
            mergeMap((action: MoviesActions) => {
                return this.moviesService.searchMovies(action.payload)
                    .pipe(
                        map((movies) => new SearchMoviesActionSuccess(movies)),
                        catchError((err) => of(new SearchMoviesActionError(err.message)))
                    )
            })
        )
    );

    /* Search Movies*/
    searchTypeMoviesEffect: Observable<MoviesActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.SEARCHTYPE_MOVIES),
            mergeMap((action: MoviesActions) => {
                return this.moviesService.getTypeMovies(action.payload)
                    .pipe(
                        map((movies) => new SearchTypeMoviesActionSuccess(movies)),
                        catchError((err) => of(new SearchTypeMoviesActionError(err.message)))
                    )
            })
        )
    );

       /* Search Movies*/
       searchYearMoviesEffect: Observable<MoviesActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(MoviesActionsTypes.SEARCHYEAR_MOVIES),
            mergeMap((action: MoviesActions) => {
                return this.moviesService.searchYearMovies(action.payload)
                    .pipe(
                        map((movies) => new SearchYearMoviesActionSuccess(movies)),
                        catchError((err) => of(new SearchYearMoviesActionError(err.message)))
                    )
            })
        )
    );


}
