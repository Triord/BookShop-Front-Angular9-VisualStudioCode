import { Users } from './interface/user';
import { AppareilsService } from './services/appareils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testBE';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private appS: AppareilsService){}
  users: Users[];
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    //  Appels du end point afin de récupérer la liste de nos utilisateur
  //  .subscribe() => définit qu'on s'ouscrit a la réponse que allons recevoir de notre services
  //  (reponse : any) => on attends un objet reponse qui est d'un type non définit (any)
  //  La première acollade signife ce que l'on fait en cas de réponse valide
  //  La deuxième accolade signifie ce que l'on fait en cas de réponse non valide

  }


}

