import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { LogOutComponent } from './log-out/log-out.component';
import { DropdownbtnComponent } from './dropdownbtn/dropdownbtn.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Dropdwnbtn2Component } from './dropdwnbtn2/dropdwnbtn2.component';
import { Dropbox2Component } from './dropbox2/dropbox2.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogOutComponent,
    DropdownbtnComponent,
    DropboxComponent,
    DropdownItemComponent,
    WrapperComponent,
    Dropdwnbtn2Component,
    Dropbox2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
