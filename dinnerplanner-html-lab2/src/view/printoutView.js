class PrintoutView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {

        this.model.getDish(1).then(dish => console.log(dish));
        const people = this.model.getNumberOfGuests();

        /*<div class ="detailResult">
          
        </div>*/

        const printout_div = this.container.appendChild(document.createElement('div'));
        printout_div.className = "noblackBorder  content-detail flexDetail "

        this.model.getDish(1).then(dish => {
            printout_div.innerHTML = `

    <div  class="detailDish fcolumn">
        <div class =" flexrow myDinHed">
            <span class="fStart">
                <h2>My Dinner: ${people} people</h3>
            </span>
            <span class="fEnd">
                <a "id="backToSearchBtn" class="btn-go btn-lg btn-primary-color">
                Go back and edit dinner
                </a>
            </span>
        </div>
            <div  class="DetPrint fcolumn">
                <div class = "pagerow ">
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
            
    </div>   
        
    
    
  `
        });



        this.afterRender();
    }


    afterRender() {

    }
}
