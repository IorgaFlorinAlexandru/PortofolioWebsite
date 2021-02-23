import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  @Input() dark: boolean;
  constructor() { }
  ngOnInit(): void {
  }
  test(){
    console.log(this.dark)
  }
}
