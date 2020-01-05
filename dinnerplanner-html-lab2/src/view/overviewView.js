class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.model.addObserver(this);
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    
    
    
    update(model, change){
        if (change.type == "addToMenu"){
         this.render();
        }
        
        
        
    if(change.type === "num_of_guest_set"){        
        this.render();            
    }   
    }
    
    
    render() {
	/*const paragraph = this.container.appendChild(document.createElement('h3'));
	paragraph.innerHTML = "This dinner will be Awesome!";*/
        this.container.innerHTML = "";
        
        
	
	    const num_people_val = this.model.getNumberOfGuests();
        const colflexOv =        this.container.appendChild(document.createElement('SPAN'));
        const mydin =      colflexOv.appendChild(document.createElement('SPAN'));
	    const paragraph2 = 
          mydin.appendChild(document.createElement('SPAN')); 
        const span3 =    mydin.appendChild(document.createElement('SPAN'));
        const myList =  colflexOv.appendChild(document.createElement('SPAN'));
        const span4 =    colflexOv.appendChild(document.createElement('SPAN'));
    
        
	const num_people =    paragraph2.appendChild(document.createElement('h3'));
      
     num_people.innerHTML = " My dinner:  " + num_people_val + " people" ;
     
        
        const backbtn = span3.appendChild(document.createElement('a'));       
        backbtn.innerHTML = "go back and edit dinner";
        backbtn.className = "btn btn-lg btn-primary-color btnBack";
        backbtn.id = "backToDinner";
        paragraph2.className ="mydet";
        mydin.className = "flexrow";
        span3.className ="mydet t-right backspace";
        colflexOv.className="spanFLexCol";

		
	const list = myList.appendChild(document.createElement('UL'));
        
        /*myList.className="fill";*/
        list.className = "filler sepLine flexrow";
        
     
        
        //showloader.style = "display: none";
        this.dishList = this.model.getFullMenu();
        /*creates an new array of the divs for all the dishes.*/
        
         let total = 0;
         this.dishList.map(dish => 
                        {
              total = total + (dish.pricePerServing * num_people_val);             
                           
                           list.appendChild(document.createElement('UL')).innerHTML = 
               `<figure Style="width: 100px height: 140px;" class="dishbox">
                    <img class="blackBorder" src="${dish.image}" width="100" height="140">
                    <figcaption style="width:100px" class="t-center blackBorder">${dish.title}</figcaption>
                    <div> <p>Sek: ${dish.pricePerServing * num_people_val}</p> </div>
                </figure>
                    `;
        
                                   }).join("");

        list.innerHTML += `<div> <p>total: ${total}</p> </div>`
    
    
        
       
        
        this.afterRender();
    
        
	
    
    const recipeBtn = span4.appendChild(document.createElement('a'));       
        recipeBtn.innerHTML = "Print Full Recipe";
        recipeBtn.className = "btn btn-lg btn-primary-color ";
        recipeBtn.id = "toPrintBtn"; 
        mydin.className = "flexrow";
        span4.className ="t-center backspace";
        colflexOv.className="spanFLexCol";  
	
	this.afterRender();
    }
    
    

        
        
        
        
    
    
    
    afterRender() {
        
    }
}
