import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div></div>
  `,
  styles: [`
    div {
      min-width: 100%;
      height: 500px;
      border: 2px solid green;
      border-top: 0px;
      z-index: 1;
    }
  `]
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
