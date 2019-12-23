class PrintoutController {
    constructor(gsc, printoutView) {
        this.gsc = gsc;
        this.printoutView = printoutView
        
    }

    rend() {

        // window.location.hash = "search";
        //show("home");
        
    }
    
   startBtnListener = () => {
            //add eventListener to button
       
            
              this.printoutView.container.addEventListener("click", (e) => {
                  
                 if(e.target.outerText === "Go back and edit dinner"){
                                        
                    this.gsc.gotoSearch(); 
                }
                
            });
        
   }


}
