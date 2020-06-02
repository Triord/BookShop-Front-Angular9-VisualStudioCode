import { Books } from './../../../interface/book';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { Locution } from 'src/app/interface/location';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private appS: AppareilsService) { }
  loc: Locution[] = [];
  livre: Books[] = [];
  ngOnInit() {
 this.appS.getAllBook().subscribe((response: Books[]) => {
      this.appS.books = response;
      this.appS.getMyLoc().subscribe((reponse: Locution[]) => {
      this.loc = reponse ;
      this.loc.forEach(l => { if (typeof l.livre === 'number' )  {
        l.livre = this.appS.getBookById(l.livre);console.log(l.dFinLocation)
        }});
    }, erreur => {
    console.log('erreur');
 });
});

}
}
