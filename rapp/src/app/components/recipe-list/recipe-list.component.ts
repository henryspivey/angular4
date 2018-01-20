import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[];
  recipes_loaded: boolean;
  current_classes: any;  
  current_styles: any; 
  use_dark_bg: boolean;

  recipe_in_progress : Recipe;

   constructor(private router: Router, private recipe_service: RecipeService) {
    this.current_classes = {'darkbg': false};
    this.current_styles=  {'font-size': '150%'};

    this.recipe_in_progress = Recipe.createBlank();
   	// this.recipes = [
   	// new Recipe(1,"Banana Bread", "This is my favorite banana bread recipe", 60, 4, null, null, null, [""]), 
   	// new Recipe(2, "Zucchini Bread", "This is my favorite zucchini bread recipe", 60, 6, null, null, null, [""])];
   }

  ngOnInit() {
      this.recipes_loaded = true;
      this.recipe_service.getAllRecipes()
      .then((recipes)=> this.recipes = recipes);

  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2))
    this.recipes.unshift(this.recipe_in_progress)
    this.recipe_in_progress=  Recipe.createBlank();
  }

  public zoomInOnRecipe(recipe) {
    console.log("The user clicked on an event");
    console.log(JSON.stringify(recipe, null, 2));
  }

  public toggleBackground() {
    const newValue = !this.current_classes['darkbg'];
    this.current_classes= {'darkbg': newValue};
  }

  public toggleFontsize() {
    if (this.current_styles['font-size'] === '150%') {
     this.current_styles['font-size'] = '175%';
    } else {
      this.current_styles['font-size'] = '150%';
    }
  }

  userClickedOnRecipe(recipe): void {
    console.log(recipe);
    this.router.navigateByUrl('/recipes/'+ recipe.id);
  }

  addNewRecipePressed(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
