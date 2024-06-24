// canal.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canal } from './canal';

@Injectable({
  providedIn: 'root'
})
export class CanalService {
  private apiUrl = 'https://localhost:7251/api/Canals';

  constructor(private http: HttpClient) { }

  getCanals(): Observable<Canal[]> {
    return this.http.get<Canal[]>(this.apiUrl);
  }

  getCanal(group: string): Observable<Canal[]> {
    const url = `${this.apiUrl}/${group}`;
    return this.http.get<Canal[]>(url);
  }

  createCanal(canal: Canal): Observable<Canal> {
    return this.http.post<Canal>(this.apiUrl, canal);
  }

  updateCanal(id: number, canal: Canal): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, canal);
  }

  deleteCanal(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
