import { LazyElementsModule } from '@angular-extensions/elements';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildWrapperModule } from './child-wrapper/child-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule,
    ChildWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
