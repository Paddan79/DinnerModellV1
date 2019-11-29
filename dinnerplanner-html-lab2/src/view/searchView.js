class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.dishList = {};
    }

    render() {

        
        
        
        
        const  searchBoxDiv = this.container.appendChild(document.createElement('DIV'));
        searchBoxDiv.className ="noblackBorder  content-search flexSearch"
        searchBoxDiv.innerHTML = `
        <div class="searchBar flexrow">
         <form class="searchBox">
            <h3>FIND A DISH</h3>
            <input  class="box-size" type="Text"  value="Enter key words" name="search">
        </form> 
       
        <div  class="selectBox">
        <select>
            <option value="all">All</option>
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
    let showloader = searchBoxDiv.appendChild(document.querySelector('#loader'));
       showloader.style = "display: block"; 
    this.model.getAllDishes().then((data) => {
        showloader.style = "display: none";
        this.dishList = data;
        /*creates an new array of the divs for all the dishes.*/
        
        const divList = searchBoxDiv.appendChild(document.createElement('div'));
        
        divList.innerHTML = this.dishList.map(dish => ` 
                
                <figure Style="width: 100px height: 140px;" class="dishbox">
                    <img class="blackBorder" src="https://spoonacular.com/recipeImages/${dish.image}" width="100" height="140">
                    <figcaption style="width:100px" class="align-center blackBorder">${dish}</figcaption>
                </figure>
                
            `).join("");
        
        divList.className = " dishContainer";
        this.afterRender();
    });
        
    }
        
       
        
        
        
        
    


    afterRender() {

    }
}
