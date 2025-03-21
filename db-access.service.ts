import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info';
import { AddNewProject } from './add-new-project';

@Injectable({
  providedIn: 'root'
})
export class DbAccessService {

  constructor(private http:HttpClient) 
  {
    
   }
   GetAllUsers():Observable<any>
   {
     return this.http.get("http://localhost:3004/UserInfo");
   }
   AddNewUser(inpUsr:UserInfo):Observable<any>
   {
    return this.http.post<UserInfo>("http://localhost:3004/UserInfo",inpUsr);
   }
   AddNewProject(project:AddNewProject): Observable<AddNewProject> {
    return this.http.post<AddNewProject>('http://localhost:3004/Project', project);
  }
}
