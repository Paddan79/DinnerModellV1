class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.dishList = {};
    }

    render(dishId) {
        
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
       
        <div class="selectBox">
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
        
        
    
        
        /*<div class="result flexrow pagerow" >
        <figure Style="width: 100px" class="blackBorder">
            <img src="images/toast.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Toast</figcaption>
        </figure>
        <figure Style="width: 100px" class="blackBorder">
            <img src="images/meatballs.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Meatballs</figcaption>
        </figure>
        <figure Style="width: 100px" class="blackBorder">
            <img src="images/meatballs.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Meatballs</figcaption>
        </figure>

    </div>*/
        
        
        
        this.afterRender();
    }


    afterRender() {

    }
}
