import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { ArticlesComponent } from './articles/articles.component';
import { SiteLinksComponent } from './site-links/site-links.component';
import { VisitComponent } from './visit/visit.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    FeaturedArticlesComponent,
    ArticlesComponent,
    SiteLinksComponent,
    VisitComponent,
    VisitDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
