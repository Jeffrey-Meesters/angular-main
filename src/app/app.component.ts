import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { LogOutComponent } from './log-out/log-out.component';
import { DropdownbtnComponent } from './dropdownbtn/dropdownbtn.component';
import { Dropdwnbtn2Component } from './dropdwnbtn2/dropdwnbtn2.component';
import { Dropbox2Component } from './dropbox2/dropbox2.component'

import { WrapperComponent } from './wrapper/wrapper.component';



@Component({
  selector: 'app-root',
  template: `
    <nav>
      <app-logo></app-logo>
      <app-dropdownbtn></app-dropdownbtn>
      <app-dropbox2>
      </app-dropbox2>
      <app-log-out></app-log-out>
    </nav>
    <app-wrapper></app-wrapper>
  `,
  styles: [`
    nav {
      min-width: 100%;
      height: 80px;
      background-color: white;
      font-family: monospace;
      display: flex;
      flex-direction: row;
      padding: 0px 5px 0px 5px;
      border-bottom: 2px solid rgba(3, 169, 244, 0.16);
    }

    app-log-out {
      margin-left: auto;
      margin-right: 0px;
    }

    app-dropdownbtn {
      margin: 3px 20px 0px 0px;
    }

    app-dropdwnbtn2 {
      margin: 3px 20px 0px 0px;
    }
  `]
})
export class AppComponent {

}
