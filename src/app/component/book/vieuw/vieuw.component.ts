import { Books } from 'src/app/interface/book';
import { ShoppingCart } from './../../../interface/shoppingCart';

import { AppareilsService } from './../../../services/appareils.service';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { API_URL } from 'src/app/app.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Locution } from 'src/app/interface/location';
import { equal } from 'assert';

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
  price: number;
  test: number;
  livre: Books;

  ngOnInit() {
    this.loadBook();
    this.sc = new ShoppingCart();
  }


  loadBook() {
       this.appS.getAllBook().subscribe((reponse: Books[]) => {
        this.books = reponse;

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
      this.price = this.sc.price ;
    }


    onLocation() {
      this.livre  = new Books();

      console.log('livre :' + this.livre);
      this.loc = new Locution();
      this.loc.livre = this.sc.livre;
      this.loc.priceTotal = this.sc.price;
      for (let i = 0; i < this.sc.livre.length; i++) {
        this.loc.livre[i].quantity = this.loc.livre[i].quantity -= 1;


      }



      console.log(this.loc);

      this.appS.louer(this.loc).subscribe(data => {
        this.loc = data;
        console.log(this.loc.idLocation)


        if ( parseInt(this.loc.idLocation) === 0) {
          window.alert('location non effectué , amende en cours')
        }
        if ( parseInt(this.loc.idLocation) > 0) {
          this.tst();
        }
            });

    }
    tst(){
     window.alert('Location effectué');
     this.router.navigate(['/profil']);
    }
    tst2(){
      window.alert('Location non possible');
     }


    }



