import { Component, OnInit } from '@angular/core';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Books } from 'src/app/interface/book';
import { Amende } from 'src/app/interface/amende';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  book: Books = new Books();
    amende: Amende;

  constructor(private appS: AppareilsService) { }

  ngOnInit(): void {
  }


  createBook(): void {
    this.appS.addBook(this.book)
        .subscribe( data => {
          alert("book created successfully.");
        });
  }
  onClick(){
    console.log('successful')
  }
  check() {
    this.appS.checkAmende().subscribe((reponse: Amende) => {
      this.amende  = reponse;
      console.log(this.amende);
      });
}
}
