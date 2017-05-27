import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';

@Component({
  selector: 'app-dropbox',
  template: `
    <ul (mouseleave)="stay()" *ngIf="stayOpen">
      <app-dropdown-item></app-dropdown-item>
    </ul>
  `,
  styles: [`
      ul {
        position: absolute;
        width: 150px;
        height: auto;
        border: 2px solid #E91E63;
        border-top: 1px solid rgba(3, 169, 244, 0.16);
        margin-left: -11px;
        z-index: 100;
      }
  `],
})
export class DropboxComponent implements OnInit {
    @Output() resetShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.stayOpen = true
  }

  stayOpen = true

  stay() {
    this.stayOpen = this.stayOpen ? false : true;
  
    this.resetShow.emit(false);
  }
}
