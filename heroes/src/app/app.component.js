"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var mock_heroes_component_1 = require('./mock-heroes/mock-heroes.component');
var hero_service_1 = require('./hero.service');
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
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        // hero='windowstorm';
        this.heroes = mock_heroes_component_1.HEROES; //heroes是在template中创建的类
        this.hero = {
            id: 1,
            name: 'windstorm' };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroesSlowly;
        //this.getHeroes();
    };
    AppComponent.prototype.Select = function (hero) {
        this.selectedHero = hero;
    };
    // getHeroes() :void{//普通方式
    //   this.heroes = this.heroService.getHeroes();
    // }
    // getHeroes():void{//承诺方式
    //   this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
    // }
    AppComponent.prototype.getHeroesSlowly = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [hero_service_1.HeroService],
            //template:'<h1>{{title}}</h1><h2>my favorite hero is:{{myHero}}</h2>'
            template: " <h1>{{title}}</h1>\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"Select(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n  <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
