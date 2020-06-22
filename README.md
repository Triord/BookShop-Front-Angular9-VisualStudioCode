# TestBE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Fonctionnalité développé
- Se connecter
- S'inscrire
- Voir la liste des livre
- Louer un ou plusieurs livre
- Panier
- Voir ses locations
- Ajouter un lecteur, bibliothequaire , manaBiblio
- Ajouter un livre
- Modifier un livre
- Livre non louable si utilisateur a une amende
- Verification de toute les location ce qui crée les amendes avec indication pour qui les amendes sont créée (bouton check dans management/book)
- Gestion des quantité , si la quantité d'un livre n'est plus capable de soutenir une location le bouton add panier n'apparait plus
- Possibilité de rendre le livre dans l'espace profil , ce qui supprime la location en cours et don évite tous forme d'amende , le rendu du livre réaugmente bien sur la quantité du livre rendu de 1
- Page details pour chaque produit
- Page contact(inutile mais donc nécéssaire)
- Espace Management réservé qu'au admin du site 
- Dans management visualisation de la liste des user contenant leur role avec la possibilité de le changer
- AuthGuard pour éviter au non-utilisateur d'acceder au site 
- Beaucoup de modification et d'ajout dans le backend pour gérer la sécurité et la logique du site 

