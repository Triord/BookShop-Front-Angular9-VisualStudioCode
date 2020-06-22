import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Books } from './../../../interface/book';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { Locution } from 'src/app/interface/location';
import { Role } from 'src/app/interface/Role';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private appS: AppareilsService , private route: ActivatedRoute) { }
  loc  = [];
  livre = [];
  r: Role;
  ngOnInit() {
 this.appS.getAllBook().subscribe((response: any) => {
      this.appS.books = response;
      this.appS.getMyLoc().subscribe((reponse: any) => {
      this.loc = reponse ;
      this.loc.forEach(l => { if (Number.isInteger(l.livre[0]))  {
        l.livre[0] = this.appS.getBookById(l.livre[0]);
        console.log(l)
        }});
    }, erreur => {
    console.log('erreur');
 });
});




}
rendre(id: number) {
  this.appS.rendreBook(id)
    .subscribe(
      data => {
        console.log(data);
        this.appS.getAllBook().subscribe(( data: any) => {
          this.loc = data;
      });
     },
      error => console.log(error));
}
}
