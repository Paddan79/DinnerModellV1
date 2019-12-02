class DetailView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {

        this.model.getDish(1).then(dish => console.log(dish));
        const people = this.model.getNumberOfGuests();

        /*<div class ="detailResult">
          
        </div>*/

        const detail_div = this.container.appendChild(document.createElement('div'));
        detail_div.className = "noblackBorder  content-detail flexDetail "

        this.model.getDish(1).then(dish => {
            detail_div.innerHTML = `

    <div  class="detailDish flexrow pagerow">

      <div  class="detailResult fcolumn">
        <figure   class"align-center">
           <img  src="${dish.image}" class="blackBorder foto" height="140">
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
         <h3>INGREDIENTS FOR ${people} PEOPLE</h3> 
        <table class="align-center ingredamount">
        ${dish.extendedIngredients.map(ingredient => `<tr><td> ${ingredient.name}</td>
        <td> ${ingredient.amount}</td>
        <td> ${ingredient.unit}</td></tr>`).reduce((accumulator, currentvalue) => accumulator + currentvalue,"" )}                    
        </table>                    
        <a id="addToMenuBtn" class="btn btn-lg btn-primary-color">
          Add to menu
         </a>
        <p class = "text-right"> SEK ${dish.pricePerServing} </p>
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
