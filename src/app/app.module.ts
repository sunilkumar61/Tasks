import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ParentMessageComponent } from './parent-message/parent-message.component';
import { ChildMessageComponent } from './child-message/child-message.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent, ParentMessageComponent, ChildMessageComponent, Parent2Component, Child2Component, Parent3Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
