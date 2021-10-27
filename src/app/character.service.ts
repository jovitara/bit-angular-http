import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Angular Dekoratorius */
@Injectable({
  providedIn: 'root'
})

/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {

  //Konstruktorius

  // Injectiname angular HttpClient
  constructor(private http: HttpClient) {
    // kolkas konstruktoriuje nedarom nieko

  }

  // Klases metodai/funkcijos

  // Susikureme nauja funkcija, gauti veikeju duomenims

  /*
    Parametrai:
    page - Klaustukas gale nurodo, kad sitas parametras nera privalomas
    : number - nurodo tipa, kad tai turi buti skaicius
  */
  getCharacters(page: number) {
    console.log("Page parametras");
    console.log(page);
    // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

    // url kintamasis, nurodo i koki API endpoint'a krepsimes

    // Dokumentacija kokie duomenys grazinami:
    // https://rickandmortyapi.com/documentation/#character-schema
    let url: string = 'https://rickandmortyapi.com/api/character';

    // Sukuriamas angular Http Parametru objektas
    let params = new HttpParams();


    // Jei http Parametru objektas jau sukurtas, naudoti append funkcija prideti papildomiems parametrams
    // Pries siunciant uzklausa
    params = params.append('page', page);

    console.log("API Uzklausa:");
    console.log(url);

    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
    let data = this.http.get(url, {params});

    return data;
  }
}
