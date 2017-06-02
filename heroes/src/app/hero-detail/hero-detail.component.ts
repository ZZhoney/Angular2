import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from'@angular/router';
import { Location } from'@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';
import { Hero }from '../hero/hero.component';


@Component({
  moduleId:module.id,
  selector: 'my-hero-detail',
  templateUrl: `./hero-detail.component.html`,
})
export class HeroDetailComponent implements OnInit{
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
goBack(): void{
    this.location.back();
}
  heroes:Hero[];
  selectedHero: Hero;

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

 // @Input()
   hero: Hero;
  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location:Location,
  ){}
}

