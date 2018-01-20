import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {
	

  // looks for input recipe when component is created
  @Input()
  recipe: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public userClicked() {    
    
    //this.userClick.emit(this.recipe.id);
    console.log("summary clicked");
    return this.recipe.id;
  }

  public zoomClicked() {
    this.zoomIn.emit(this.recipe);
  }

  ngOnInit() {
  }

}
