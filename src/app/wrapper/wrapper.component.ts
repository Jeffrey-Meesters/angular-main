import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div>
      <p>
      Currently learning myself on how Angular(4) works.
      I put this, not realy a website, online... just because i can!
      </p>

      <p>Have a nice day!!!</p>
    </div>
  `,
  styles: [`
    div {
      min-width: 100%;
      height: 500px;
      border: 2px solid green;
      border-top: 0px;
      z-index: 1;
      line-height: 315px;
      text-align: center;
    }

    p {

    }
  `]
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
