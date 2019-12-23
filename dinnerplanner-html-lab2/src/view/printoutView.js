class PrintoutView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.backBtn = null;
        this.model.addObserver(this);
        this.dishList = {};
    }
    
    
    render() {
        
        // flexrow css måste ändras så 100procent inte fylls på search button.
        this.container.innerHTML ="";
        
        const people = this.model.getNumberOfGuests();
        

        /*<div class ="detailResult">
          
        </div>*/

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
            <div id="printBox"  class="DetPrint fcolumn">
                
            </div>  
    </div>   
        
    
    
  `
            
            this.afterRender();
            
        



        
    }
    
    update(model, change){
        // se till att Ifen kommer med rätt typ
        this.render();
        let printBox = document.getElementById("printBox").appendChild(document.createElement('div'));
        printBox.className = "printBox pagerow";
        
         this.dishList = this.model.getFullMenu();


            console.log(this.dishList + "TEstar för pritout");

            this.dishList.map(dish => printBox.innerHTML = `
            
            
           
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
                

         `).join("");
    }



    afterRender() {
        
        this.backBtn = this.container.getElementsByClassName("#backToSearchBtn");
    }
}
