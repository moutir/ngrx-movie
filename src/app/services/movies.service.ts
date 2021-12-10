import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Movie} from '../model/movies.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
   constructor(private http:HttpClient) {
   }
 
   public getMovies():Observable<Movie[]>{
    let host=environment.host;
     return this.http.get<Movie[]>(host+"/movies");
     
   }
   public getSelectedMovies():Observable<Movie[]>{
     return this.http.get<Movie[]>(environment.host+"/movies?selected=true");
   }

   public getTypeMovies(type:string):Observable<Movie[]>{
    return this.http.get<Movie[]>(environment.host+"/movies?type_like="+type);
  }

  public searchYearMovies(year:number):Observable<Movie[]>{
    return this.http.get<Movie[]>(environment.host+"/movies?year_like="+year);
  }

   public getAvailableMovies():Observable<Movie[]>{
     return this.http.get<Movie[]>(environment.host+"/movies?available=true");
   }
 
   public searchMovies(name:string):Observable<Movie[]>{
     return this.http.get<Movie[]>(environment.host+"/movies?name_like="+name);
   }
   public setSelected(movie:Movie):Observable<Movie>{
     return this.http.put<Movie>(environment.host+"/movies/"+movie.id,{...movie,selected:!movie.selected});
   }
   public delete(id:number):Observable<void>{
      return this.http.delete<void>(environment.host+"/movies/"+id);
   }
   public save(movie:Movie):Observable<Movie>{
     return this.http.post<Movie>(environment.host+"/movies/",movie);
   }
   public update(movie:Movie):Observable<Movie>{
     return this.http.put<Movie>(environment.host+"/movies/"+movie.id,movie);
   }
   public getProductById(id:number):Observable<Movie>{
     return this.http.get<Movie>(environment.host+"/movies/"+id);
   }
 
 }
 