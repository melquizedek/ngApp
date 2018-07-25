import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Object> = [];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: object = {}

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: object) : void {
    // console.log('selected hero ', hero);
    this.selectedHero = hero
  }

}
