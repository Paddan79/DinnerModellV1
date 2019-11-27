class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.dishList = {};
    }

    render() {

        
        let showloader = this.container.appendChild(document.querySelector('#loader'));
        showloader.style = "display: block";
        
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
        
    console.log(this.model.getAllDishes());
    this.model.getAllDishes().then((data) => {
        
        this.dishList = data;
        /*creates an new array of the divs for all the dishes.*/
        
        const divList = this.container.appendChild(document.createElement('div'));
        
        divList.innerHTML = this.dishList.map(dish => ` 
                
                <figure Style="width: 100px height: 140px;" class="blackBorder dishbox">
                    <img src="https://spoonacular.com/recipeImages/${dish.image}" width="100" height="140">
                    <figcaption style="width:100px" class="align-center blackBorder">${dish.title}</figcaption>
                </figure>
                
            `).join("");
        
        divList.className = " pagerow dishContianer";
        this.afterRender();
    });
        
    }
        
        /*
        <figure Style="width: 100px" class="blackBorder">
            <img src="images/meatballs.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Meatballs</figcaption>
        </figure>
        <figure Style="width: 100px" class="blackBorder">
            <img src="images/meatballs.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Meatballs</figcaption>
        </figure>

    </div>*/
        
        
        
        
    


    afterRender() {

    }
}
