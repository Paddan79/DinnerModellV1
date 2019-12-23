class gsc {
    
    construct(){
        
    }
    
//fixa in detailview.
    rend(){

        // window.location.hash = "search";
        //show("home");
    }
    
    gotoSearch(){
    
    show("search");
    
    }
    
    goToDetail(){
        show("detail");
    }
    
    sidebarDone (){
        show("overview");
    }
    
    overviewDone (){
        show("printout");
    }
    
    setDishId(Id) {
     this.id = Id;
    }
    
    getDishId(){
        return this.id;
    }
    
    

}
