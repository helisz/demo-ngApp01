import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteNavComponent } from './shared/site-nav/site-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteNavComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
