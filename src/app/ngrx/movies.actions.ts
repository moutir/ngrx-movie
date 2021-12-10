import { Action } from '@ngrx/store';
import { Movie } from '../model/movies.model';


export enum MoviesActionsTypes {
  /* Get All Movies*/
  GET_ALL_MOVIES = "[Movies] Get All Movies",
  GET_ALL_MOVIES_SUCCESS = "[Movies] Get All Movies Success",
  GET_ALL_MOVIES_ERROR = "[Movies] Get All Movies Error",

  /* Get Selected Movies*/
  GET_SELECTED_MOVIES = "[Movies] Get Selected Movies",
  GET_SELECTED_MOVIES_SUCCESS = "[Movies] Get Selected Movies Success",
  GET_SELECTED_MOVIES_ERROR = "[Movies] Get Selected Movies Error",

  /*  Update select Movie */
  SELECT_MOVIE = "[Movies] select Movie",
  SELECT_MOVIE_SUCCESS = "[Movies] select Movie Success",
  SELECT_MOVIE_ERROR = "[Movies] select Movie Error",

  /* Search Movies*/
  SEARCH_MOVIES = "[Movies] Search Movies",
  SEARCH_MOVIES_SUCCESS = "[Movies] Search Movies Success",
  SEARCH_MOVIES_ERROR = "[Movies] Search Movies Error",

  /* Search Type Movies*/
  SEARCHTYPE_MOVIES = "[Movies] Search Type Movies",
  SEARCHTYPE_MOVIES_SUCCESS = "[Movies] Search Type Movies Success",
  SEARCHTYPE_MOVIES_ERROR = "[Movies] Search Type Movies Error",


  /* Search Year Movies*/
  SEARCHYEAR_MOVIES = "[Movies] Search Year Movies",
  SEARCHYEAR_MOVIES_SUCCESS = "[Movies] Search Year Movies Success",
  SEARCHYEAR_MOVIES_ERROR = "[Movies] Search Year Movies Error",
}



/* Get All Movies Actions*/
export class GetAllMoviesAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_ALL_MOVIES;
  constructor(public payload: any) {
  }
}

export class GetAllMoviesActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_ALL_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {
  }
}

export class GetAllMoviesActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_ALL_MOVIES_ERROR;
  constructor(public payload: string) {
  }
}

/* Get Selected Movies Actions*/

export class GetSelectedMoviesAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_SELECTED_MOVIES;
  constructor(public payload: any) {
  }
}

export class GetSelectedMoviesActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_SELECTED_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {
  }
}

export class GetSelectedMoviesActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.GET_SELECTED_MOVIES_ERROR;
  constructor(public payload: string) {
  }
}

/* Update select Movie Actions*/
export class SelectMovieAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SELECT_MOVIE;
  constructor(public payload: Movie) {
  }
}

export class SelectMovieActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SELECT_MOVIE_SUCCESS;
  constructor(public payload: Movie) {
  }
}

export class SelectMovieActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SELECT_MOVIE_ERROR;
  constructor(public payload: string) {
  }
}

/* Search Actions*/
export class SearchMoviesAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCH_MOVIES;
  constructor(public payload: string) {
  }
}

export class SearchMoviesActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCH_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {
  }
}

export class SearchMoviesActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCH_MOVIES_ERROR;
  constructor(public payload: string) {
  }
}

/* Search Type Actions*/
export class SearchTypeMoviesAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHTYPE_MOVIES;
  constructor(public payload: string) {
  }
}

export class SearchTypeMoviesActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHTYPE_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {
  }
}

export class SearchTypeMoviesActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHTYPE_MOVIES_ERROR;
  constructor(public payload: string) {
  }
}

/* Search Year Actions*/
export class SearchYearMoviesAction implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHYEAR_MOVIES;
  constructor(public payload: number) {
  }
}

export class SearchYearMoviesActionSuccess implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHYEAR_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {
  }
}

export class SearchYearMoviesActionError implements Action {
  type: MoviesActionsTypes = MoviesActionsTypes.SEARCHYEAR_MOVIES_ERROR;
  constructor(public payload: string) {
  }
}


/* export all */
export type MoviesActions =
  GetAllMoviesAction | GetAllMoviesActionSuccess | GetAllMoviesActionError
  | GetSelectedMoviesAction | GetSelectedMoviesActionSuccess | GetSelectedMoviesActionError
  | SelectMovieAction | SelectMovieActionSuccess | SelectMovieActionError
  |SearchMoviesAction|SearchMoviesActionSuccess|SearchMoviesActionError
  |SearchTypeMoviesAction|SearchTypeMoviesActionSuccess|SearchTypeMoviesActionError
  |SearchYearMoviesAction|SearchYearMoviesActionSuccess|SearchYearMoviesActionError
  ;
