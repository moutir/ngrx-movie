import { Movie } from '../model/movies.model';
import { MoviesActions, MoviesActionsTypes } from './movies.actions';
import { Action } from '@ngrx/store';

export enum MoviesStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}
export interface MoviesState {
  movies: Movie[],
  moviesselected: Movie[],
  errorMessage: string,
  dataState: MoviesStateEnum
}

const initState: MoviesState = {
  movies: [],
  moviesselected: [],
  errorMessage: "",
  dataState: MoviesStateEnum.INITIAL
}




export function moviesReducer(state = initState, action: Action): MoviesState {
  switch (action.type) {
    /* Get All movies*/
    case MoviesActionsTypes.GET_ALL_MOVIES:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.GET_ALL_MOVIES_SUCCESS:
      return { ...state, dataState: MoviesStateEnum.LOADED, movies: (<MoviesActions>action).payload }
    case MoviesActionsTypes.GET_ALL_MOVIES_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Get Selected movies*/
    case MoviesActionsTypes.GET_SELECTED_MOVIES:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.GET_SELECTED_MOVIES_SUCCESS:
      return { ...state, dataState: MoviesStateEnum.LOADED, moviesselected: (<MoviesActions>action).payload }
    case MoviesActionsTypes.GET_SELECTED_MOVIES_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Update select movies*/
    case MoviesActionsTypes.SELECT_MOVIE:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.SELECT_MOVIE_SUCCESS:
      let movie: Movie = (<MoviesActions>action).payload
      let listMovies = [...state.movies];
      let data: Movie[] = listMovies.map(p => p.id == movie.id ? movie : p);
      return { ...state, dataState: MoviesStateEnum.LOADED, movies: data }
    case MoviesActionsTypes.SELECT_MOVIE_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Search movies*/
    case MoviesActionsTypes.SEARCH_MOVIES:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.SEARCH_MOVIES_SUCCESS:
      return { ...state, dataState: MoviesStateEnum.LOADED, movies: (<MoviesActions>action).payload }
    case MoviesActionsTypes.SEARCH_MOVIES_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Search type movies*/
    case MoviesActionsTypes.SEARCHTYPE_MOVIES:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.SEARCHTYPE_MOVIES_SUCCESS:
      return { ...state, dataState: MoviesStateEnum.LOADED, movies: (<MoviesActions>action).payload }
    case MoviesActionsTypes.SEARCHTYPE_MOVIES_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Search Year movies*/
    case MoviesActionsTypes.SEARCHYEAR_MOVIES:
      return { ...state, dataState: MoviesStateEnum.LOADING }
    case MoviesActionsTypes.SEARCHYEAR_MOVIES_SUCCESS:
      return { ...state, dataState: MoviesStateEnum.LOADED, movies: (<MoviesActions>action).payload }
    case MoviesActionsTypes.SEARCHYEAR_MOVIES_ERROR:
      return { ...state, dataState: MoviesStateEnum.ERROR, errorMessage: (<MoviesActions>action).payload }
    /* Default */
    default: return { ...state }
  }
}
