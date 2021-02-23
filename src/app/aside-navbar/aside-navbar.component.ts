import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styleUrls: ['./aside-navbar.component.css']
})
export class AsideNavbarComponent implements OnInit {

  darktheme=false
  @Output() get_val:EventEmitter<any>= new EventEmitter()
  constructor() { }

  nav_open=false

  flag=false
  show_flag(){
    this.flag=true;
  }
  hide_flag(){
    this.flag=false;
  }


  open_navbar(){
    if(this.nav_open==true){
      this.nav_open=false
    }
    else{
      this.nav_open=true
    }
  }

  dark_theme(){
    if(this.darktheme){
      this.darktheme=false;
    }
    else{
      this.darktheme=true
    }
    this.get_val.emit(this.darktheme)
  }

  ngOnInit(): void {
  }


}
