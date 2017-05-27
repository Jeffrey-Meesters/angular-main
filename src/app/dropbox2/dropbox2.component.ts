import { Component, OnInit } from '@angular/core';
import { Dropdwnbtn2Component } from '../dropdwnbtn2/dropdwnbtn2.component';


@Component({
  selector: 'app-dropbox2',
  template: `
      <div class="dropdown">
        <app-dropdwnbtn2></app-dropdwnbtn2>
        <app-dropdown-item class="dropdown-content"></app-dropdown-item>
      </div>

  `,
  styles: [`
    .dropdown {
      position: relative;
      display: inline-block;
      margin-top: 3px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    li {
      list-style-type: none;
    /* min-width: 100%; */
    font-size: 1.8em;
    margin: 0px -41px 0px -40px;
    padding: 10px;
    border-bottom: 1px solid rgb(214, 241, 253);
    text-align: center;
    background-color: white;
    }
  `],
})
export class Dropbox2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stayOpen = false;

  showDropdown() {
    this.stayOpen = this.stayOpen ? false : true; 
  }

}
