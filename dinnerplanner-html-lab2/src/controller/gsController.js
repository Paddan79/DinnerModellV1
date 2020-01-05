class gsc {
    contructor(){
        this.detail;
        this.id = 1;
    }
    
    
//fixa in detailview.
    
    
    gotoSearch(){
    
    show("search");
    localStorage.setItem("currentState", "search");
    }
    
    goToDetail(){
        this.detail.updateDish();
        this.detail.rend();
        show("detail");
        localStorage.setItem("currentState", "detail");
    }
    
    sidebarDone (){
        show("overview");
        localStorage.setItem("currentState", "overview");
    }
    
    overviewDone (){
        show("printout");
        localStorage.setItem("currentState", "home");
    }
    
    setDishId(Id) {
     this.id = Id;    
    }
    
    getDishId(){        
        return this.id;
    }
    
    
    controller = (detail) =>{
        this.detail = detail;
    }
    

}
