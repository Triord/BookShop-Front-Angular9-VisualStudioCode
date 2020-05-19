import { RoleService } from './../../../services/role.service';
import { Users } from './../../../interface/user';
import { Role } from './../../../interface/Role';
import { Component, OnInit } from '@angular/core';
import { AppareilsService } from 'src/app/services/appareils.service';

import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  user: Users = new Users();
  user1: Users = new Users();
  role: Role;
  idUtilisateur: number;
  userr: Users;
  submitted = false;
  constructor(private appS: AppareilsService , private router: Router,private route: ActivatedRoute, private roleS: RoleService) {

   }
  users: Users[];

  ngOnInit() {
this.roleS.getAllRole().subscribe((response: Role[]) =>{
      this.roleS.roles = response;
      this.appS.getAllUsers().subscribe((reponse: Users[]) => {
        this.users = reponse;
        this.users.forEach(u => {if (Number.isInteger(u.role[0]) ) {
        u.role[0] = this.roleS.getRoleById(u.role[0]);
        }});
        // {
        console.log(this.users);
      }, erreur => {
        console.log(erreur);

      });
    });
  }

    onCreateBiblio(){
      this.appS.addBiblio(this.user)
        .subscribe( data => {
          alert("bibliothecaire created successfully.");
        });

    }
    onCreateMana(){
      this.appS.addMana(this.user)
        .subscribe( data => {
          alert("Manager created successfully.");
        });

    }



    upUser(){
      this.appS.updateUser(this.idUtilisateur, this.userr)
      .subscribe(data => console.log(data), error => console.log(error));
      this.userr = new Users();
      this.gotoList();

    }
    onSubmitt() {
      this.upUser();
    }
  gotoList() {
      this.router.navigate(['user']);
    }
}
