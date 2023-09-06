import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {

  private styles = '/api/game/styles';
  private sess = '/api/session';
  private join = '/api/join';
  private save = '/api/session/save';

  constructor(private http: HttpClient) { }
  
  getStyles(): Observable<Object> {
    return this.http.get(this.styles);
  } 

  getSessions(url: string): Observable<Object> {
    return this.http.get(this.sess + '/' + url);
  } 

  protectSession(id: number): Observable<Object> {
    return this.http.post(this.save, {"id": id});
  }

  joinToSession(sid: number): Observable<Object> {
    return this.http.post(this.join, {"session_id": sid});
  }
  
  delSessions(id: number): Observable<Object> {
    return this.http.delete(this.sess + '/' + id);
  } 
}
