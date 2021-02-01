import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        query('.char',[
          style({opacity: 0 }),
          stagger(150,[
            animate('2000ms',style({opacity: 1}))
          ])
        ])
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }
  String_line=['H','e','l','l','o',' ','m','y',' ','n','a','m','e',' ','i','s',' ','I','o','r','g','a']
  ngOnInit(): void {
  }

}
