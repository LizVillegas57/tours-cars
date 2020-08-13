import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Jeep', image: "assets/jeep.jpg" },
      { id: 12, name: 'Mazda', image: "assets/mazda.jpg" },
      { id: 13, name: 'Ford', image: "assets/ford.jpg" },
      { id: 14, name: 'Audi', image: "assets/audi.jpg" },
      { id: 15, name: 'Nissan', image: "assets/nissan.jpg" },
      { id: 16, name: 'Mitsubishi', image: "assets/mitsubishi.jpg" },
      { id: 17, name: 'Renault', image: "assets/renault.jpg" },
      { id: 18, name: 'Chevrolet', image: "assets/chevrolet.jpg" },
      { id: 19, name: 'Kia', image: "assets/kia.jpg" },
      { id: 20, name: 'Suzuki', image: "assets/suzuki.jpg" }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}