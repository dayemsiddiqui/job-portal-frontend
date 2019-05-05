import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {
  }

  getJobs(page=1, per_page=10) {
    return this.http.get(environment.baseUrl + `?page=${page}&per_page=${per_page}`);
  }
}
