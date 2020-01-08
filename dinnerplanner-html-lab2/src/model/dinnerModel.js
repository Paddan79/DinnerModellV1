//DinnerModel class
class DinnerModel extends Observable  {

  constructor() {
    super();
    this.dishes = dishesConstOld;
    this.numberOfGuests = 0;
    //TODO Lab 1
    // implement the data structure that will hold number of guests
    // and selected dishes for the dinner menu
      this.menu = [];

  }
    


  setNumberOfGuests(num) {
    //if the num is 0 or less then set the guest number to 1.
      if (num <= 0) {
          this.numberOfGuests = 1
      } else {
          this.numberOfGuests = num;
      }
  }

  getNumberOfGuests() {
    //Return the number of guests from this object.
      return this.numberOfGuests;
      
  }

  //Returns the dishes that are on the menu for selected type
  getSelectedDishes(type) {
    //TODO Lab 1
    return this.menu.filter(dish => dish.dishTypes.includes(type));
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    //TODO Lab 1
      return this.menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    //TODO Lab 1
     /* return menu.filter(x => {
          console.log(x.extendedIngredients)
          return x.extendedIngredients 
          
      });*/
      
      return this.getFullMenu().map(dish => dish.extendedIngredients).flat();
      
  }

  //Returns the total price of the menu (price per serving of each dish multiplied by number of guests).
  getTotalMenuPrice() {
    //TODO Lab 1
    return this.menu.reduce((tot,val) => tot + val.pricePerServing, 0) * this.numberOfGuests;  
  }

  //Adds the passed dish to the menu.
  addDishToMenu(dish) {
    //TODO Lab 1
      this.menu.push(dish);
      this.notifyObservers({
            type: "addToMenu",
            value: dish
        });
      
  }

  //Removes dish with specified id from menu
  removeDishFromMenu(id) {
    //TODO Lab 1
     this.menu = this.menu.filter(dish => dish.id !== id);
  }

  //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
  //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
  //if you don't pass any query, all the dishes will be returned
  getAllDishes(type, query) {
        
      if (type == undefined){
          type = "";
      }
      if (query == undefined){
          query = "";
      }
      console.log("Type: " + type);
      console.log("Query: " + query);
   return queryApi("/recipes/search?type="+type+"&query="+query )
       .then(dishes => dishes.results)
      //Borde inte behövas då den finns i funktionen queryApi, men vi får se.
      .catch(function(error){
          console.log(error);
      });
      
      
  }

  //Returns a dish of specific ID
  getDish(id) {
    //Returns a promise with the dishes. 
    
    return queryApi("/recipes/"+id+"/information");
    }
}

    
  function queryApi(query){
 

  return fetch(ENDPOINT + query,
    {
      headers: {
        'X-MASHAPE-KEY': API_KEY
      }
    }
  )
      // Handleerrors meddelar ifall responsen inte är korrekt/blir undefined 
    .then(handleErrors)
    .then(response => response.json())
      .catch(function(error) {
        console.log(error);
    })
      // Finally används för att inte duplicera kod.
    .finally(load => {
           
      return load;
  });
    
}
function handleErrors(response){
    if(!response.ok){
        return undefined;
    }
    return response;
}


// the dishes constant contains an array of all the
// dishes in the database. Each dish has id, name, array of dishTypes,
// image (name of the image file), instructions and
// array of ingredients. Each ingredient has name,
// amount (a number) and unit (string
// defining the unit i.e. "g", "slices", "ml". Unit
// can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
const dishesConstOld= [{
  'id': 1,
  'name': 'French toast',
  'dishTypes': ['starter', 'breakfast'],
  'image': 'toast.jpg',
  'instructions': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
  'pricePerServing': 32.5,
  'extendedIngredients': [{
    'name': 'eggs',
    'amount': 0.5,
    'unit': '',
  }, {
    'name': 'milk',
    'amount': 30,
    'unit': 'ml',
  }, {
    'name': 'brown sugar',
    'amount': 7,
    'unit': 'g',
  }, {
    'name': 'ground nutmeg',
    'amount': 0.5,
    'unit': 'g',
  }, {
    'name': 'white bread',
    'amount': 2,
    'unit': 'slices',
  }]
}, {
  'id': 2,
  'name': 'Sourdough Starter',
  'dishTypes': ['starter'],
  'image': 'sourdough.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 43.2,
  'extendedIngredients': [{
    'name': 'active dry yeast',
    'amount': 0.5,
    'unit': 'g',
  }, {
    'name': 'warm water',
    'amount': 30,
    'unit': 'ml',
  }, {
    'name': 'all-purpose flour',
    'amount': 15,
    'unit': 'g',
  }]
}, {
  'id': 3,
  'name': 'Baked Brie with Peaches',
  'dishTypes': ['starter', 'lunch'],
  'image': 'bakedbrie.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 52.8,
  'extendedIngredients': [{
    'name': 'round Brie cheese',
    'amount': 10,
    'unit': 'g',
  }, {
    'name': 'raspberry preserves',
    'amount': 15,
    'unit': 'g',
  }, {
    'name': 'peaches',
    'amount': 1,
    'unit': '',
  }]
}, {
  'id': 100,
  'name': 'Meat balls',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  'pricePerServing': 33.5,
  'extendedIngredients': [{
    'name': 'extra lean ground beef',
    'amount': 115,
    'unit': 'g',
  }, {
    'name': 'sea salt',
    'amount': 0.7,
    'unit': 'g',
  }, {
    'name': 'small onion, diced',
    'amount': 0.25,
    'unit': '',
  }, {
    'name': 'garlic salt',
    'amount': 0.7,
    'unit': 'g',
  }, {
    'name': 'Italian seasoning',
    'amount': 0.6,
    'unit': 'g',
  }, {
    'name': 'dried oregano',
    'amount': 0.3,
    'unit': 'g',
  }, {
    'name': 'crushed red pepper flakes',
    'amount': 0.6,
    'unit': 'g',
  }, {
    'name': 'Worcestershire sauce',
    'amount': 6,
    'unit': 'ml',
  }, {
    'name': 'milk',
    'amount': 20,
    'unit': 'ml',
  }, {
    'name': 'grated Parmesan cheese',
    'amount': 5,
    'unit': 'g',
  }, {
    'name': 'seasoned bread crumbs',
    'amount': 15,
    'unit': 'g',
  }]
}, {
  'id': 101,
  'name': 'MD 2',
  'dishTypes': ['main dish'],
  'image': 'bakedbrie.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 43.2,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 1,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 15,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 10,
    'unit': 'ml',
  }]
}, {
  'id': 102,
  'name': 'MD 3',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 25.2,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 2,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 10,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 5,
    'unit': 'ml',
  }]
}, {
  'id': 103,
  'name': 'MD 4',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 52.0,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 1,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 12,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 6,
    'unit': 'ml',
  }]
}, {
  'id': 200,
  'name': 'Chocolat Ice cream',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 12.2,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}, {
  'id': 201,
  'name': 'Vanilla Ice cream',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 21.2,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}, {
  'id': 202,
  'name': 'Strawberry',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 15.0,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}
];

// Deepfreeze, you can ignore this function
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
        && o[prop] !== null
        && (typeof o[prop] === "object" || typeof o[prop] === "function")
        && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
}

deepFreeze(dishesConstOld);
