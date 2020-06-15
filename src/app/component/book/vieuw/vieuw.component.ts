import { ShoppingCart } from './../../../interface/shoppingCart';

import { AppareilsService } from './../../../services/appareils.service';
import { Books } from './../../../interface/book';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { API_URL } from 'src/app/app.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Locution } from 'src/app/interface/location';

@Component({
  selector: 'app-vieuw',
  styleUrls: ['./vieuw.component.css'],
  templateUrl: './vieuw.component.html'
})
export class VieuwComponent implements OnInit {


  constructor(private appS: AppareilsService, public fb: FormBuilder, private  http: HttpClient ,private route: ActivatedRoute,
              private router: Router) {}
Users: any[];
  books : Books[] = [];
  form: FormGroup;
  selectedId: number;
  sc: ShoppingCart; // Changer la propriété book en livre ou inversément <- dans l'objet of course
  loc: Locution;

  ngOnInit() {
    this.loadBook();
    this.sc = new ShoppingCart();
  }


  loadBook() {
       this.appS.getAllBook().subscribe((reponse: Books[]) => {
        this.books = reponse;
        console.log(this.books);
      }, erreur => {
        console.log(erreur);
      });
  }

    employeeDetails(id: any){

      this.router.navigate(['/bookDetails/' + id]);
      console.log(id);
    }

    addtocart(book: Books){
      this.sc.livre.push(book);
      console.log(this.sc);
      for( const key in this.sc ) {
        if( this.sc.hasOwnProperty(key) ) {

        }
   }
      this.sc.quantity += 1;
      this.sc.price = book.prix + this.sc.price  ;
      console.log('qtt: ' + this.sc.quantity);
      console.log('prix:' + this.sc.price);
    }


    onLocation() {

      this.loc = new Locution();
      this.loc.livre = this.sc.livre;


      console.log(this.loc);

      this.appS.louer(this.loc).subscribe(data => {
        console.log(data);
            });

    }
    tst(){
     window.alert('Location effectué');
     this.router.navigate(['/profil']);
    }


    }



