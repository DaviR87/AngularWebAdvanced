import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/datamodel/datamodel';
import { BackendService } from 'src/app/services/backend.service';
import { flipInY } from 'ng-animate';

@Component({
  selector: 'app-service-examples',
  animations: [
    trigger('flip', [
      transition(':enter', useAnimation(flipInY))
    ])
  ],
  templateUrl: './service-examples-page.component.html',
  styleUrls: ['./service-examples-page.component.scss']
})
export class ServiceExamplesPageComponent implements OnInit {
  public title = 'Pokedex';
  public pokemonNumber: number;
  public pokemonList: Pokemon[] = [];
  flip: any;

  constructor(
    private backendService: BackendService
  ) {
  }

  ngOnInit() {
  }

  searchPokemon() {
    this.backendService.getPokemonList(this.pokemonNumber).subscribe((x: any) => {
      console.log(x);
      this.pokemonList = x.results;
    });
  }

  showDetails(pokemon: Pokemon) {
    this.backendService.getPokemonInfo(pokemon.url).subscribe((res: any) => {
      console.log(res);
      this.pokemonList = this.pokemonList.map(x => {
        if (x.name === pokemon.name) {
          x.types = res.types.map(x => x.type.name);
        }
        return x;
      })
    })
  }

}
