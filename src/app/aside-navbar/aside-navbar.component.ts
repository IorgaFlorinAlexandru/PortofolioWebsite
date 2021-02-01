import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styleUrls: ['./aside-navbar.component.css']
})
export class AsideNavbarComponent implements OnInit {

  constructor() { }


  //Not efficient should have made components of <a></a> but lazy and need to do the pages next
  is_active=1
  homepage_click(){
    this.is_active=1
  }
  aboutpage_click(){
    this.is_active=2
  }
  skillspage_click(){
    this.is_active=3
  }
  projectspage_click(){
    this.is_active=4
  }
  contactpage_click(){
    this.is_active=5
  }

  ngOnInit(): void {
  }


}
