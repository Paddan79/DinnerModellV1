class SidebarView {

    constructor(container, model) {

        this.container = container;
        this.model = model;
        this.dishList = {};
        model.addObserver(this);
    }

    render() {


        const search_div = this.container.appendChild(document.createElement('div'));
        search_div.className = "noBorder sideBar content-sidebar";
        search_div.id = "sideBarView";

        search_div.innerHTML = "";
        search_div.innerHTML = `


     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
        <h3> My dinner </h3>
   
        <div id="rattPLats"  class="Mylinks">
        <form id="under" class="peopleBox">
         People   
        <input id="numberOfGuests" class="box-size" type="number" value="1" autofocus>
       </form> 
        

        
        </div>
`

        let ap = document.getElementById("rattPLats").appendChild(document.createElement('table'));
        ap.style = "width=100%";


        ap.innerHTML = `
        
             
  <tr class="topbottomline">
    <th>Dish Name</th>
    
    <th class="ar">Cost</th>
  </tr>
`;
        ap.id = "tableSidbar";


        let cB = search_div.appendChild(document.createElement('div'));
        cB.id = "confirmBtn";
        cB.className = "btn btn-lg btn-primary-color";
        cB.innerHTML = `<a>Confirm Dinner</a>`;



        this.afterRender();


    }


    update(model, change) {


        if (change.type === "num_of_guest_set") {
            
            let it = document.querySelector("#numberOfGuests");
            let people = this.model.getNumberOfGuests();
            it.innerHTML = "";
            it.innerHTML = "${people}"

        }


        //if en saksker gör detta annars ej
        if (change.type === "addToMenu") {
            let menu = document.querySelector("#tableSidbar > tbody").appendChild(document.createElement('tr'));

            menu.innerHTML = "";



            this.dishList = this.model.getFullMenu();


            console.log(this.dishList);

            this.dishList.map(dish => menu.innerHTML = `
            
            
            <td>${dish.title}  testar</td>
     
            <td class="ar">SEK: ${dish.pricePerServing}</td>


         `).join("");
        }
    }

    afterRender() {



    }
}
