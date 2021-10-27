import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  // Veikeju masyvas, kurio duomenis uzpildysime is CharacterService
  public characters: any = [];
  public charactersInfo: any = {};

  public page: number = 1;

  // "Injectiname" character service i komponenta
  constructor(private _characterService: CharacterService) {

  }

  ngOnInit(): void {
      this.getCharacters();
  }

  getCharacters() {
    this._characterService.getCharacters(this.page)
    // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
    // data - kintamasis su grazintais duomenimis is musu uzklausos
    .subscribe((data: any) => {
      // Gautus duomenis priskiriame komponento kintamajam
      // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos

      this.characters = data.results;
      this.charactersInfo = data.info;
      /*
      Dokumentacija kokie duomenys grazinami:
      https://rickandmortyapi.com/documentation/#character-schema
      */

    });
  }

  nextPage() {
    // alert("Kitas puslapis veiks jau netrukus");
    // Pridedame vieneta
    this.page++;

    console.log("Next page:");
    console.log(this.page);

    this.getCharacters();
  }

  previousPage() {

    // Patikriname ar page reiksme nera neigiama, -1 puslapio nera
    if(this.page > 1) {
      this.page--;
    }


    // Iskvieciame characters service atnaujinti duomenis
    this.getCharacters();
  }

}
