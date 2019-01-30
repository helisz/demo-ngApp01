import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteNavComponent } from './shared/site-nav/site-nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteNavComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
