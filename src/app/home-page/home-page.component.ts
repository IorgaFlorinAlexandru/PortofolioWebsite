import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations:[
    trigger('write',[
      transition('void => *',[
        query('.char',[
          style({visibility:'hidden'}),
          stagger(50,[
            animate('2000ms',style({visibility:'visible'}))
          ])
        ])
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }
  String_line_first=['H','i',',',' ','m','y',' ','n','a','m','e',' ','i','s',' ','I','o','r','g','a',' ','F','.',' ','A','l','e','x','a','n','d','r','u']
  String_line_second=[' ','a','n','d',' ','I',"'",'m',' ','a','n',' ','a','s','p','i','r','i','n','g',' ','p','r','o','g','r','a','m','m','e','r','.']
  String_line_third=[' ',' ',' ',' ','T','h','i','s',' ','i','s',' ','m','y',' ','p','o','r','t','o','f','o','l','i','o',' ','w','e','b','s','i','t','e','.']
  ngOnInit(): void {
  }

}
