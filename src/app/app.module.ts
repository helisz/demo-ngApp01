import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteNavComponent } from './shared/site-nav/site-nav.component';
import { TestModComponent } from './test-mod/test-mod.component';
import { DennisComponent } from './dennis/dennis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteNavComponent,
    TestModComponent,
    DennisComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    TestModComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
