import { Component } from '@angular/core';
import { Hero } from './hero/hero.component';
import { OnInit } from '@angular/core';
//import { HEROES } from './mock-heroes/mock-heroes.component'
import { HeroService } from './hero.service'
import { Router }  from'@angular/router'
// export class Hero {
//   id: number;
//   name: string;
// }

//   const HEROES: Hero[] = [
//   {id:11, name:'Mr.nice'},
//   {id:12, name:'Narco'},
//   {id:13, name:'Bombasto'},
//   {id:14, name:'Celeritas'},
//   {id:15, name:'Magneta'},
//   {id:16, name:'RubberMan'},
//   {id:17, name:'Dynama'},
//   {id:18, name:'Dr IQ'},
//   {id:19, name:'Magma'},
//   {id:20, name:'Tornado'},
// ];

  //   //  this.heroes = this.heroService.getHeroes();
  //   getHeroes():void {
  //     this.heroes = this.heroService.getHeroes();
  // }
  //   getHeroes(): void {
  //     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }
//}

@Component({
  //selector: 'app-root',
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //providers: [HeroService],
  //template:'<h1>{{title}}</h1><h2>my favorite hero is:{{myHero}}</h2>'


})

export class HeroesComponent implements OnInit{

  title = '22Tour of Heroes';
  // hero='windowstorm';
 // heroes =HEROES;         //heroes是在template中创建的类
  heroes:Hero[];
  selectedHero: Hero;

  hero:Hero={
    id:1,
    name:'windstorm'}


  constructor(
    private heroService: HeroService,
  private router: Router,){  }

  ngOnInit() :void{
    this.getHeroes();
  }

  Select(hero: Hero): void {
    this.selectedHero = hero;}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  // getHeroes() :void{//普通方式
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes():void{//承诺方式
    this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
    alert(this.heroes);
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
//创建属性 暴露英雄
// export class AppComponent {
//   title = 'Tour of Heroes';
//  // hero='windowstorm';
//  heroes =HEROES;         //heroes是在template中创建的类
//   selectedHero: Hero;
//
//   hero:Hero={
//     id:1,
//     name:'windstorm'}
//   Select(hero: Hero): void {
//     this.selectedHero = hero;}
//
//     constructor(private heroService: HeroService){
//
//     }
//   getHeroes() :void{
//     this.heroes = this.heroService.getHeroes();
//   }
// }

