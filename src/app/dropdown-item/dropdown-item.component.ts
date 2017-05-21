import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  template: `
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
    <li>Item4</li>
  `,
  styles: [`
    li {
      list-style-type: none;
      font-size: 1.8em;
      margin: 0px 0px 0px -40px;
      padding: 10px;
      border-bottom: 1px solid rgb(214, 241, 253);
      text-align: center;
    }

    li:hover { 
        background-color: rgba(3, 169, 244, 0.16);
        font-size: 2em;
    }
  `]
})
export class DropdownItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
