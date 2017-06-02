import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.component';
export var HEROES: Hero[] = [
  {id:11, name:'Mr.nice'},
  {id:12, name:'Narco'},
  {id:13, name:'Bombasto'},
  {id:14, name:'Celeritas'},
  {id:15, name:'Magneta'},
  {id:16, name:'RubberMan'},
  {id:17, name:'Dynama'},
  {id:18, name:'Dr IQ'},
  {id:19, name:'Magma'},
  {id:20, name:'Tornado'},
];
@Component({
  selector: 'app-mock-heroes',
  templateUrl: './mock-heroes.component.html',
  styleUrls: ['./mock-heroes.component.css']
})
export class MockHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
