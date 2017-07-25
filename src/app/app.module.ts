import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootcaveComponent } from './rootcave/rootcave.component';
import { RootcaveschoolComponent } from './rootcaveschool/rootcaveschool.component';
import { RootcaveDirective } from './rootcave.directive';

@NgModule({
  declarations: [
    AppComponent,
    RootcaveComponent,
    RootcaveschoolComponent,
    RootcaveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
