import { Locution } from 'src/app/interface/location';
import { Books } from './../interface/book';
import { API_URL } from './../app.constants';
import { Users } from './../interface/user';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
// Export = public en java
export class AppareilsService {
  // Variable de classes
  private user = Users;
  private loc = Locution;
  userSubject = new Subject<any[]>();
   public readonly RootUrl: string = 'http://localhost:9898/';
   private readonly noAuthreqHeader = new HttpHeaders({ 'No-Auth': 'True' });
   public readonly  AuthJSON = new HttpHeaders({ 'Content-Type': 'application/json' });
  form: any;
  books: Books[] = [];
  // Est instancier à chaque création du service
   constructor(private http: HttpClient) { }
  // Méthode pour récupérer les utilisateur
   GetUsers() {
   { headers : this.noAuthreqHeader}// headers est ici la clé et  this.noAuthreqHeader la valeur , c'est donc un objet anonyme
   return this.http.get(this.RootUrl + 'user', {headers : this.noAuthreqHeader});
   }
   getAllUsers(): Observable<Users[]>  {
    return this.http.get<Users[]>(`${API_URL}user`);
  }
  getAllBook() {
    return this.http.get(`${API_URL}Livres`);
  }
  getBookById(id: string){
    return this.books.find(b => b.idlivre === id);
  }
 updateUser(id: number , value: any): Observable<Object> {
   return this.http.put(`${API_URL}user/${id}`, value);
 }
  addBook(book){

    return this.http.post<Books>(`${API_URL}Livres`, book);
  }
  addBiblio(user){
    console.log(user);
    return this.http.post<any>(`${API_URL}bibliothequaire`, user);

  }

  addUser(user){
    console.log(user);
    return this.http.post<any>(`${API_URL}lecteur`, user);

  }
  louer(loc){
    return this.http.post<any>(`${API_URL}louer`, loc);
    console.log(loc);
  }
  addMana(user){
    console.log(user);
    return this.http.post<any>(`${API_URL}manaBiblio`, user);

  }
  getOneUser(id: number): Observable<any> {
    return this.http.get(`${API_URL}user/${id}`);
  }

  getOneBook(id: any){
    return this.http.get(`${API_URL}Livres/${id}`);
  }
  getBook(id: any ): Books {
    return this.books.find(x => x.idlivre === id);
  }
  updateBook(id: any, value: any){
    return this.http.put(`${API_URL}Livres/${id}`, value);
  }
  getMyLoc() {
    return this.http.get(`${API_URL}test1`);
  }

}
