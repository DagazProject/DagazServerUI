import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  private url = '/api/game/map';

  constructor(private http: HttpClient) { }

  getGames(id: number): Observable<Object> {
    let s = this.url;
    if (id) {
        s = s + '/' + id;
    } else {
        s = s + '/0';
    }
    return this.http.get(s);
  } 
}
