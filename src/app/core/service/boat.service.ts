import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoatResponse } from '../models/boat-response.model';
import { BoatRequest } from '../models/boat-request.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  private apiUrl: string = environment.baseApiUrl + "/api/boat"

  constructor(private http: HttpClient) { }

  getAllBoats(): Observable<BoatResponse[]> {
    return this.http.get<BoatResponse[]>(this.apiUrl);
  }

  createBoat(boatRequest: BoatRequest): Observable<BoatResponse> {
    return this.http.post<BoatResponse>(this.apiUrl, boatRequest);
  }
}
