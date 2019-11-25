class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
	/*const paragraph = this.container.appendChild(document.createElement('h3'));
	paragraph.innerHTML = "This dinner will be Awesome!";*/
        
        
        
	// TODO: read this from the model!!
        this.model.setNumberOfGuests(3);
	    const num_people_val = this.model.getNumberOfGuests();
        const colflexOv =        this.container.appendChild(document.createElement('SPAN'));
        const mydin =      colflexOv.appendChild(document.createElement('SPAN'));
	    const paragraph2 = 
          mydin.appendChild(document.createElement('SPAN')); 
        const span3 =    mydin.appendChild(document.createElement('SPAN'));
        const myList =  colflexOv.appendChild(document.createElement('SPAN'));
        const span4 =    colflexOv.appendChild(document.createElement('SPAN'));
    
        
	const num_people =    paragraph2.appendChild(document.createElement('h3'));
      
     paragraph2.innerHTML = " My dinner:  " ;
     num_people.innerHTML =+ num_people_val;
    /* paragraph2.innerHTML += "  people";*/
        
        const backbtn = span3.appendChild(document.createElement('a'));       
        backbtn.innerHTML = "go back and edit dinner";
        backbtn.className = "btn btn-lg btn-primary-color btnBack";
        paragraph2.className ="mydet";
        mydin.className = "flexrow";
        span3.className ="mydet t-right backspace";
        colflexOv.className="spanFLexCol";

		
	const list = myList.appendChild(document.createElement('UL'));
        
        /*myList.className="fill";*/
        list.className = "fill sepLine flexrow t-center";
        

	for(const food of ["Bread!", "Ham!", "Pizza!"]) {
            list.appendChild(document.createElement('UL')).innerHTML = food;
        list.lastChild.className ="fill t-center";
	}
    
    const recipeBtn = span4.appendChild(document.createElement('a'));       
        recipeBtn.innerHTML = "Print Full Recipe";
        recipeBtn.className = "btn btn-lg btn-primary-color recipeBtn";
        recipeBtn.id = "toPrintBtn"; 
        mydin.className = "flexrow";
        span4.className ="t-center backspace";
        colflexOv.className="spanFLexCol";  
	
	this.afterRender();
    }
    
    afterRender() {
    }
}
