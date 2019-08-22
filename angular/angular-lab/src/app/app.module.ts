import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { FriendsComponent } from './friends/friends.component';
import { PersonEditorTemplateComponent } from './person-editor-template/person-editor-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    FriendsComponent,
    PersonEditorTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
