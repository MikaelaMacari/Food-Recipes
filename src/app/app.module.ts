 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ShoppingEditComponent } from './components/shopping-list-components/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './components/recipes-components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes-components/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
 import {RecipeDetailComponent} from "./components/recipes-components/recipe-detail/recipe-detail.component";
 import {ShoppingListComponent} from "./pages/shopping-list/shopping-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
