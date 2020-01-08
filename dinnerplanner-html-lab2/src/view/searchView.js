class SearchView {
    constructor(container, model) {
        
        this.container = container;
        this.model = model;
        model.addObserver(this);
        this.dishList = {};
        this.loading = document.querySelector('#loader');
    }   

    update () {
        
    }
    
  render(query, type) {
       
      this.container.innerHTML = "";
        let  searchBoxDiv = this.container.appendChild(document.createElement('DIV'));
        
        searchBoxDiv.className ="noblackBorder  content-search flexSearch"
        searchBoxDiv.innerHTML = `
        <div class="searchBar flexrow">
         <form class="searchBox">
            <h3>FIND A DISH</h3>
            <input  id ="serchInput" class="box-size" type="Text" placeholder="Enter key words" name="search">
        </form> 
       
        <div  class="selectBox">
        <select id="typeInput">
            <option value="" selected>All</option>
            <option value="maincourse">Main Course</option>
            <option value="sidedish">Side Dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
        </select>
        </div>

        <div class="padd">
       <a id="searchBtn" class="btn btn-lg btn-primary-color">
          search
        </a>
    </div>    
    </div>
  `;    
        
      showLoader();
        
    this.model.getAllDishes(type,query).then((data) => {
        console.log(data);
         hideLoader();
        this.dishList = data;
        /*creates an new array of the divs for all the dishes.*/
        
        const divList = searchBoxDiv.appendChild(document.createElement('div'));
        divList.id = "dishContainer";
        
        divList.innerHTML = this.dishList.map(dish => ` 
                
                <figure Style="width: 100px height: 140px;" class="dishbox">
                    <img id="${dish.id}" class="blackBorder" src="https://spoonacular.com/recipeImages/${dish.image}" width="100" height="140">
                    <figcaption style="width:100px" class="align-center blackBorder">${dish.title}</figcaption>
                </figure>
                
            `).join("");
        
        divList.className = " dishContainer";
        
        this.afterRender();
    });
        
    
    
  }
    
        
        
        
        
    


    afterRender() {

    }
}
