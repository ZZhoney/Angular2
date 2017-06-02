import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 // selector: 'my-app',
//  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [HeroService],


  template:` <h1>{{title}}</h1>
 <base href="/">
 <nav>
 <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
 <a routerLink="/heroes" routerLinkActive="active">heroes</a>
</nav>

<router-outlet></router-outlet>`

})

//创建属性 暴露英雄
export class AppComponent {
  title = '1Tour of Heroes';
}

