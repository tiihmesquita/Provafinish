import { Injectable } from '@angular/core';
import { Todo } from './userinterface';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  private userUrl= "https://jsonplaceholder.typicode.com/todos";

  getUser(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.userUrl);
  }


}
