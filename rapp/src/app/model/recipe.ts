export interface Ingredient {
	ingredient: string;
	measure: string;
}

export interface Instruction {
	instruction: string;
	photo: string;	
}




export class Recipe {
	public id: number;
	public title: string;
	public description: string;
	public feeds_this_many: number;
	public preparation_time: number;
	public ingredients: Ingredient[];
	public instructions: Instruction[];
	public cover_photo: string;
	public keywords: string[];

	constructor(id: number, t: string, d: string, pt: number, feeds: number, ingr: Ingredient[], instr: Instruction[], cp: string, keywords: string[]) {
		this.id = id;
		this.title = t;
		this.description = d;		
		this.preparation_time = pt;
		this.feeds_this_many = feeds;
		this.ingredients = ingr;
		this.instructions = instr;
		this.cover_photo = cp;
		this.keywords = keywords;
	}

	public static recipeFromJSON(obj: any): Recipe {
		return new Recipe(obj.id, obj.title, obj.description, obj.feeds_this_many, obj.preparation_time,
											obj.ingredients, obj.instructions, obj.cover_photo, obj.keywords);
}

	public static createBlank() {
		return new Recipe(null,'', '', 1, 1, [], [], null, [""])
	}

}