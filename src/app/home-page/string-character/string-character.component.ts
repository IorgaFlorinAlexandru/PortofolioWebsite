import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-character',
  templateUrl: './string-character.component.html',
  styleUrls: ['./string-character.component.css'],
  
})
export class StringCharacterComponent implements OnInit {
  constructor() { }

  @Input() char: any;
  ngOnInit(): void {
  }
  isSpace(){
    if(this.char==' '){
      return true
    }
    return false
  }

}
