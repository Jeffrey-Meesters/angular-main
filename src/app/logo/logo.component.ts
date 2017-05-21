import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div>{{logo}}</div>
  `,
  styles: [`
    div {
      color: #E91E63;
      text-align: center;
      max-width: 15%;
      margin-right: 100px;
      font-size: 3.5em;
      line-height: 69px;
      font-family: monospace;
      font-weight: bold;
    }
  `]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logo = "logo";

}
