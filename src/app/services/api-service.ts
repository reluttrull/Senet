import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected readonly serverUrl = 'https://localhost:7019';
  http = inject(HttpClient);
  
  apiRequestJoinGame() {
    return this.http.get<UserInfo>(`${this.serverUrl}/game/requestjoingame`, {
      withCredentials: true
    })
  }

  apiRollSticks() {
    return this.http.get(`${this.serverUrl}/game/rollsticks`, {
      withCredentials: true
    })
  }

  apiSkipTurn() {
    return this.http.get(`${this.serverUrl}/game/skipturn`, {
      withCredentials: true
    })
  }

  apiMovePawn(startPosition: number) {
    let params = new HttpParams();
    params = params.set('startPosition', startPosition);
    return this.http.get(`${this.serverUrl}/game/movepawn`, {
      params: params,
      withCredentials: true
    })
  }
}
