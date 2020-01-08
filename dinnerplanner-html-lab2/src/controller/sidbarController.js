class SidebarController {
    constructor(gsc, sidebar , model) {
        this.gsc = gsc;
        this.sidebarView = sidebar;
        this.model = model;
    }

    rend() {
        
       this.sidebarView.render();
       // this.numPeople();
    // document.getElementById("container-sidebar").addEventListener("DOMSubtreeModified", () => {
           this.startBtnListener();           
    //   });
        
    }
    
    startBtnListener() {
            //add eventListener to button
        
        
         this.sidebarView.container.addEventListener("click", (e) => {
            // debugger;
             
            if (e.target.textContent === "Confirm Dinner") {
                
                console.log("do something, event has been trigerd");
                this.gsc.sidebarDone();
            }
             
             
            if (e.target.id === "numberOfGuests") {

                 let numberOfPpl = this.sidebarView.container.children[0].children[2].children[0].children[0].value;
                 console.log(numberOfPpl);
               this.model.setNumberOfGuests(numberOfPpl); 
                localStorage.setItem("numberOfPpl", numberOfPpl);
            }

        });
    
          /*  document.getElementById("confirmBtn").addEventListener("click",() => {
                
               
            });*/       
        
        }
    
   
     /*numPeople() {
        document.getElementById("numberOfGuests").addEventListener("click", () => {
                  
              
                                                                              
           });
    }*/
    


}
