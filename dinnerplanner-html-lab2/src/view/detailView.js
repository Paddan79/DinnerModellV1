class DetailView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.model.addObserver(this);
        this.ident = 1;
    }
    
    update(model, change) {
        console.log(change);
    if(change.type === "num_of_guest_set"){        
        this.render();            
    }   
    
    }
    
    dishId(id){
        this.ident = id;
    }
    
    dishGetID () {
        return this.ident;
    }

    render() {
        
        this.container.innerHTML = "";

        //this.model.getDish(this.ident).then(dish => console.log(dish));
        const people = this.model.getNumberOfGuests();
        console.log(this.ident);
       // let dishIDET = this.dishGetID(); 
        console.log(people)

        /*<div class ="detailResult">
          
        </div>*/

        const detail_div = this.container.appendChild(document.createElement('div'));
        detail_div.className = "noblackBorder  content-detail flexDetail ";
       // let showloader = detail_div.appendChild(document.querySelector('#loader'));
        
        showLoader();

        this.model.getDish(this.ident).then(dish => {
          hideLoader();
            detail_div.innerHTML = `

    <div  class="detailDish flexrow pagerow">

      <div  class="detailResult fcolumn">
        <figure   class"align-center">
           <img id="${dish.id}" src="${dish.image}" class="blackBorder foto" height="140">
            <figcaption  class="align-center blackBorder detCap">${dish.title}</figcaption>
         </figure>
        <p class="spacing">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam
          magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet
          arcu. Maecenas a efficitur leo.</p>
        

         <a id="backToSearchBtn" class="btn btn-lg btn-primary-color">
          Back to search
         </a>
         </div>

        <div class="ingredients blackBorder" >
        <div class ="f1">
         <h3>INGREDIENTS FOR ${people} PEOPLE</h3> 
        </div>
        <table class="align-center ingredamount ">
        ${dish.extendedIngredients.map(ingredient => `<tr><td> ${ingredient.name}</td>
        <td> ${ingredient.amount * people}</td>
        <td> ${ingredient.unit}</td></tr>`).reduce((accumulator, currentvalue) => accumulator + currentvalue,"" )}                    
        </table>  
        <div class ="f1">
        <a id="addToMenuBtn" class="btn btn-lg btn-primary-color">
          Add to menu
         </a>
        <p class = "text-right"> SEK ${dish.pricePerServing* people} </p>
        </div>
        </div>
    
    </div>
    <div class="preparation " >
        <h3> Preperation </h3>
        <P> ${dish.instructions}</p>
    </div>
  `});

    

        this.afterRender();
    }


    afterRender() {

    }
}
