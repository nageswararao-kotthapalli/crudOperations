import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://192.168.3.37:8080/saveEmployee';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get('http://192.168.3.37:8080/getById/'+id);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.post('http://192.168.3.37:8080/saveEmployee', value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete('http://192.168.3.37:8080/delete/' +id, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get('http://192.168.3.37:8080/getAll');
  }
}
