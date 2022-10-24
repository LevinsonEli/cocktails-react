export default class Cocktail {
  constructor({id, name, image, info, category, glass, instruction, ingredients}) {
    this.id = id
    this.name = name;
    this.image = image;
    this.info = info;
    this.category = category;
    this.glass = glass;
    this.instruction = instruction;
    this.ingredients = ingredients.slice(0);
  }

  static convertFetchedData(drink) {
    const {
      idDrink: id,
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strInstructions: instruction,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = drink;
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];

    return { id, name, image, info, category, glass, instruction, ingredients };
  }
}
