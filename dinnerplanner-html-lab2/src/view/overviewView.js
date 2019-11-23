class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
	const paragraph = this.container.appendChild(document.createElement('h3'));
	paragraph.innerHTML = "This dinner will be Awesome!";
        
        

	// TODO: read this from the model!!
	const num_people_val = this.model.getNumberOfGuests();
	const paragraph2 = 
          this.container.appendChild(document.createElement('P'));      
        
	const num_people =    paragraph2.appendChild(document.createElement('SPAN'));
      
     paragraph2.innerHTML += " My dinner:  " ;
     paragraph2.innerHTML += num_people_val;
     paragraph2.innerHTML += "  people";
        
        const backbtn = this.container.appendChild(document.createElement('a'));
        backbtn.innerHTML = "go back and edit dinner"
        backbtn.className = "btn btn-lg btn-primary-color btnBack"

	const paragraph3 = this.container.appendChild(document.createElement('P'));
        paragraph3.className= "mat";
	paragraph3.innerHTML = "We will be eating the following:";
	
	const list = this.container.appendChild(document.createElement('UL'));

	for(const food of ["Bread!", "Ham!", "Pizza!"]) {
            list.appendChild(document.createElement('UL')).innerHTML = food;
	}
	
	this.afterRender();
    }
    
    afterRender() {
    }
}
