import { Books } from 'src/app/interface/book';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private appS: AppareilsService , private route: ActivatedRoute) { }
  book: Books ;
    books: Books[] = [];
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.appS.getOneBook(id).subscribe((book: Books) => {
    console.log(book);
    this.book = book as Books;
      });
    }
    tst() {

    const id = this.route.snapshot.params.id;
    this.appS.getOneBook(id).subscribe((data: any[]) => {
    console.log(data);

    });

    }
    onLocation() {
      const id = this.route.snapshot.params.id;
      this.appS.getOneBook(id).subscribe((book: Books) => {
    this.book = book as Books;
      });
      console.log(this.book);
      this.appS.louer(this.book).subscribe(data => {

      });

    }


}
