import { Role } from './interface/Role';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpInterceptorAuthService } from './services/httpInterceptorAuth.service';
import { AuthenticationService, AUTHENTICATED_USER } from './services/authentication.service';
import { LoginComponent } from './component/login/login/login.component';
import { Users } from './interface/user';
import { AppareilsService } from './services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testBE';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private appS: AppareilsService , private s: AuthenticationService , private route: ActivatedRoute, private router: Router ) {}
  users: Users[];
  f = false;
  r: Role;
  i: String ;
  t = true;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    if (this.s.getAuthenticatedUser().length > 1) {
      this.f = true;


    }
    const id = this.route.snapshot.params.id;
    this.appS.getRole().subscribe((response: any) => {
      this.r = response;
      console.log(this.r);

      if (this.r[0]) {
      this.t = false;
      }
       });
    const username =  this.s.getAuthenticatedUser();
    console.log(username);
    //  Appels du end point afin de récupérer la liste de nos utilisateur
  //  .subscribe() => définit qu'on s'ouscrit a la réponse que allons recevoir de notre services
  //  (reponse : any) => on attends un objet reponse qui est d'un type non définit (any)
  //  La première acollade signife ce que l'on fait en cas de réponse valide
  //  La deuxième accolade signifie ce que l'on fait en cas de réponse non valide

  }
  logout() {
    this.s.logout();
    this.f =  false;
    this.router.navigate(['/login']);
    this.reload();
  }
  canActivate(route: ActivatedRouteSnapshot) {
    console.log(route.data);
  }
  reload(){
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}

