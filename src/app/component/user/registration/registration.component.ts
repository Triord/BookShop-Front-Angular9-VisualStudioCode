import { RouterModule, Router } from '@angular/router';
import { Users } from './../../../interface/user';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private appS: AppareilsService ,private router: Router) { }
  user: Users = new Users();
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user.dDN);
    this.appS.addUser(this.user)
      .subscribe( data => {
        alert("Compte créée avec succès!");
        this.router.navigate(['/home']);
      });
  }

}
