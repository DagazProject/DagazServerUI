import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  private url = '/api/game/map';

  constructor(private http: HttpClient) { }

  getGames(id: number): Observable<Object> {
    return this.http.get(this.url + '/' + id);
  } 
}
