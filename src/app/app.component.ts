import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnimations',[
      transition('HomePage => *',[
          style({opacity:0}),
         animate('600ms ease',style({opacity:1})),
    ]),
    transition('AboutPage => *',[
          style({opacity:0}),
         animate('600ms ease',style({opacity:1})),
    ]),
    transition('SkillsPage => *',[
          style({opacity:0}),
         animate('600ms ease',style({opacity:1})),
    ]),
    transition('ProjectsPage => *',[
          style({opacity:0}),
         animate('600ms ease',style({opacity:1})),
    ]),
    transition('ContactPage => *',[
          style({opacity:0}),
         animate('600ms ease',style({opacity:1})),
    ]),
    ])
  ]  
})
export class AppComponent {
  title = 'Portofolio-Site';
  darktheme=false
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  get_theme_val(val){
    this.darktheme=val;
  }

}
