import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employ } from '../models/employ.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employ[]> {
    return this.http.get<Employ[]>(this.baseApiUrl + 'api/Employee');
  }
  
  addEmployee(addEmployeeRequest: Employ): Observable<Employ> {
    return this.http.post<Employ>(this.baseApiUrl + 'api/Employee', addEmployeeRequest);
  }

  getEmployee(id : number): Observable<Employ>{
    return this.http.get<Employ>(this.baseApiUrl + 'api/Employee/' + id);
  }

  updateEmployee(id: number, updateEmployeeRequest: Employ): Observable<Employ>{
    return this.http.put<Employ>(this.baseApiUrl + 'api/Employee/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: number): Observable<Employ>{
    return this.http.delete<Employ>(this.baseApiUrl + 'api/Employee/' + id);
  }

}
