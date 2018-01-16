import { Component, OnInit } from '@angular/core';
import { Recipe } from '../.././model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  recipes: Recipe[]; 

  constructor(private route:ActivatedRoute) { 
    this.recipes = [
      new Recipe(1,"Banana Bread", "This is my favorite banana bread recipe", 60, 4, null, null, null, [""]), 
      new Recipe(2, "Zucchini Bread", "This is my favorite zucchini bread recipe", 60, 6, null, null, null, [""])
    ];

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
        this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    })
  }


  findRecipeById(id: number): Recipe {
    for(let recipe of this.recipes) {
      if(recipe.id === id) {
        return recipe;
      }
    }

    return null;
  }

}
