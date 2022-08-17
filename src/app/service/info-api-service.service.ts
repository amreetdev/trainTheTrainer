import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoApiService {
  constructor(private http: HttpClient) {}

  postInfo(data: any) {
    return this.http.post<any>('http://localhost:3000/userListInfo', data);
  }
  getInfo() {
    return this.http.get<any>('http://localhost:3000/userListInfo/');
  }
  updateInfo(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/userListInfo/' + id, data);
  }
  deleteInfo(id: number) {
    return this.http.delete<any>('http://localhost:3000/userListInfo/' + id);
  }
}
