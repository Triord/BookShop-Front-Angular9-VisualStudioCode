import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../interface/Role';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService{

  constructor(private http: HttpClient){}
roles: Role[] = [];


  getAllRole(): Observable<Role[]>  {
    return this.http.get<Role[]>(`${API_URL}role`);
  }
  getRoleById(id: string){
    return this.roles.find(r => r.idRole === id);
  }
}
