import { AppareilsService } from './../../../services/appareils.service';
import { Books } from './../../../interface/book';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { API_URL } from 'src/app/app.constants';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vieuw',
  templateUrl: './vieuw.component.html'
})
export class VieuwComponent implements OnInit {

  constructor(private appS: AppareilsService, public fb: FormBuilder, private  http: HttpClient ,private route: ActivatedRoute,
              private router: Router) {}
Users: any[];
  books : Books[] =[];
  form: FormGroup;
selectedId: number;

  ngOnInit() {

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
    }



