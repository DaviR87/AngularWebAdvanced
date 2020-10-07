import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Return a list of pokemon
   * @param num number of pokemon to retrieve
   */
  getPokemonList(num: number = 9) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
  }

  /**
   * Return the details of one pokemon
   * @param url pokemon detail API url
   */
  getPokemonInfo(url: string) {
    return this.httpClient.get(url);
  }

}
