import { Component, OnInit } from '@angular/core';
import { Dropbox2Component } from '../dropbox2/dropbox2.component'

@Component({
  selector: 'app-dropdwnbtn2',
  template: `
      <button>Dropdown2</button>
  `,
    styles: [`
    button {
      color: #E91E63;
      background-color: rgba(233, 30, 99, 0.02);
      // margin: 3px 20px 0px 0px;
      text-align: center;
      font-size: 2.0em;
      line-height: 69px;
      font-family: monospace;
      border-left: 2px solid white;
      border-radius: 10px;
      border-right: 2px solid white;
      padding: 0px 2px 0px 4px;
      margin-left: -15px;
      width: 160px;
    }

    button:focus {
      outline: 0;
    }
  `],
})
export class Dropdwnbtn2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
