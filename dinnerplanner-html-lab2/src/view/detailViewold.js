class DetailView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        
         this.model.getDish(1).then(dish => console.log(dish));
        
        
        /*<div class ="detailResult">
          
        </div>*/
        
        const detail_div = this.container.appendChild(document.createElement('div'));
        
              
   
        let content = `
<div class="noblackBorder  content-detail flexDetail "> 

    <div class="detailDish flexrow pagerow">
        

        <figure Style="width: 100px" class="blackBorder">
           <img src="https://spoonacular.com/recipeImages/1-556x370.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">uhfajkshdasdasj</figcaption>
         </figure>
         <a id="backToSearchBtn" class="btn btn-lg btn-primary-color">
          Back to search
         </a>
       

        <div class="ingredients blackBorder" >
         <h3>Toast</h3>
         
        <a id="backToSearchBtn" class="btn btn-lg btn-primary-color">
          Add to menu
         </a>
        </div>
    </div>    

    <div class="preparation " >
        <P> Gär så här </p>
        <P> Gär så här </p>
        <P> Gär så här </p>


    </div>
</div>
  `;
        this.container.innerHTML = content;
        this.afterRender();
    }


    afterRender() {

    }
}
        