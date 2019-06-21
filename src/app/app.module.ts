import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { ArticlesComponent } from './articles/articles.component';
import { SiteLinksComponent } from './site-links/site-links.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    SearchBarComponent,
    MainContentComponent,
    FeaturedArticlesComponent,
    ArticlesComponent,
    SiteLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
