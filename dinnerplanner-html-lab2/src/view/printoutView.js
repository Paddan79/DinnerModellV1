class PrintoutView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.backBtn = null;
        this.model.addObserver(this);
        this.dishList = {};
    }
    
     update(model, change) {
     
        
        // se till att Ifen kommer med rätt typ
        if (change.type === "addToMenu" ||change.type === "num_of_guest_set" ){
           this.render();
        }
        
         
    }

   
    render() {

       
        this.container.innerHTML = "";
         this.dishList = this.model.getFullMenu();
        const people = this.model.getNumberOfGuests();
        console.log(people);

        const printout_div = this.container.appendChild(document.createElement('div'));
        printout_div.className = "noblackBorder  content-detail flexDetail ";


        //  let showloader = printout_div.appendChild(document.querySelector('#loader'));
        //showloader.style = "display: block";



        //  showloader.style = "display: none";
        printout_div.innerHTML = `

    <div  class="detailDish fcolumn">
        <div class ="  myDinHed">
            <span class="fStart">
                <h2>My Dinner: ${people} people</h3>
            </span>
            <span class="fEnd">
                <a "id="backToSearchBtn" class="btn-go btn-lg btn-primary-color">
                Go back and edit dinner
                </a>
            </span>
        </div>
              
    </div>   
  `
       let printCont = printout_div.appendChild(document.createElement('div'));
        printCont.id = "printCon";
        printCont.className = "fcolumn";
       
        console.log(this.dishList);

       
        
        

     printCont.innerHTML = this.dishList.map(dish =>`
            
                <div class="printBox">
                    <div   class = " flexPic ">
                        <img  src="${dish.image}" width="1000px" class="blackBorder fotoPrint" height="140">
                    </div>
                
                    <div class="foodDesk">
                        <h3>${dish.title}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam
                        magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet
                        arcu. Maecenas a efficitur leo.</p>
                    </div>
                    <div class="prepPrint " >
                        <h3> Preperation </h3>
                        <P> ${dish.instructions}</p>
                    </div>
                </div>

         ` ).join("");
        
        

        
this.afterRender();





    }

   



    afterRender() {

        this.backBtn = this.container.getElementsByClassName("#backToSearchBtn");
    }
}
