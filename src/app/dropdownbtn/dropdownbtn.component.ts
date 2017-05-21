import { Component, OnInit, Output } from '@angular/core';
import { DropboxComponent } from '../dropbox/dropbox.component';

@Component({
  selector: 'app-dropdownbtn',
  template: `
    <button (mouseenter)="show()">Dropdown</button>
    <app-dropbox *ngIf="showIt" (resetShow)='reset($event)'></app-dropbox>
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
export class DropdownbtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showIt = false;

  show() {
    if (this.showIt) {
      this.showIt = false;
    } else {
      this.showIt = true;
    }
  }

  reset(event):void {
    this.showIt= false;
  }

}
