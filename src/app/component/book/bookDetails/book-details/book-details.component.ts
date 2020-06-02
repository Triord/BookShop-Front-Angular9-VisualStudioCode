import { AuthenticationService, AUTHENTICATED_USER } from './../../../../services/authentication.service';
import { Books } from 'src/app/interface/book';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locution } from 'src/app/interface/location';
import { Users } from 'src/app/interface/user';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private appS: AppareilsService , private route: ActivatedRoute, private authS: AuthenticationService) { }
  loc: Locution;
  book: Books ;
  books: Books[] = [];

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.appS.getOneBook(id).subscribe((book: Books) => {
    console.log(book);
    this.book = book;
    console.log(this.book);
      });

    }

    tst() {

    const id = this.route.snapshot.params.id;
    this.appS.getOneBook(id).subscribe((data: any[]) => {
    console.log(data);

    });

    }
    onLocation() {

      this.loc = new Locution();
      this.loc.livre = this.book;


      console.log(this.loc);

      this.appS.louer(this.loc).subscribe(data => {
        console.log(data);
            });

    }



}
