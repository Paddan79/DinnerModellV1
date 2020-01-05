class detailController {
    constructor(gsc,detail,model) {
        this.gsc = gsc;
        this.detailView = detail;
        this.model = model;
        
    }

    rend() {    
        let locDishId = localStorage.getItem("detailDishId");            
        if (locDishId){
            this.gsc.setDishId(locDishId)
            this.updateDish();
        }
        
        this.detailView.render();
        this.startBtnListener();
        this.addDishToMenuButton();
        
       
        
    }
    
    updateDish(){
        this.detailView.dishId(this.gsc.getDishId());
    }
    
    addDishToMenuButton() {
         this.detailView.container.addEventListener("click", (e) => {                
                
                if (e.target.innerText === "Add to menu")
                {
                    let dish = e.path[3].children[0].children[0].firstElementChild.id;
                    
                     this.model.getDish(dish).then((data) => { 
                    
                     console.log(data);
                     let info = data;
                         
                         this.model.addDishToMenu(data);     
                         
                     });
                    
                }
             
            });
    }
    
    startBtnListener()  {
           
        
           this.detailView.container.addEventListener("click", (e) => {
               
               
                if (e.target.textContent.trim() === "Back to search"){
                    
                    this.gsc.gotoSearch();
                }
               
           });
    }         
        


}
    
    
