class DetailView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        
         this.model.getDish(1).then(dish => console.log(dish));
        
        const content_detail = this.container.appendChild(document.createElement('div'));
        content_detail.className = "noblackBorder  content-detail flexDetail ";
        
        const detail_div = content_detail.appendChild(document.createElement('div'));
        detail_div.className ="detailDish flexrow pagerow";
        
        
        this.model.getDish(1).then(dish => {
            const detailFoto = detail_div.appendChild(document.createElement('div'));
            detailFoto.className = "detailResult";
            console.log(dish.image);
            detailFoto.innerHTML = ` <figure Style="width: 100px" class="blackBorder">
           <img src="${dish.image}" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">${dish.title}</figcaption>
         </figure>
         <a id="backToSearchBtn" class="btn btn-lg btn-primary-color">
          Back to search
         </a>
        `
            const ingred = detailFoto.appendChild(document.createElement('div'));
            ingred.className= "ingredients blackBorder";
            
            const rubrik = ingred.appendChild(document.createElement('h3'));
            rubrik.innerHTML = `${dish.title}`;
            
            
            
            const textIngred = ingred.appendChild(document.createElement('p'));
            
           
            
            
            
            //hur kan jag få ut alla ingridenser. 
           
            textIngred.innerHTML =   `${dish.extendedIngredients[0].name} `;
            
            
            const backToSearchBtn = ingred.appendChild(document.createElement('a'));
            backToSearchBtn.id = "backToSearchBtn";
            backToSearchBtn.className = "btn btn-lg btn-primary-color";
            backToSearchBtn.innerHTML = `Add to menu`;
            
            
            
        });
   
        let content = `


    
        


       

        
    


    <div class="preparation " >
        <P> Gär så här </p>
    <P> Gär så här </p>
    <P> Gär så här </p>


    </div>

  `;
        /*Äthis.container.innerHTML = content;*/
        this.afterRender();
    }


    afterRender() {

    }
}
        