class SearchController {
    constructor(gsc,searchView, model, detail) {
        this.gsc = gsc;
        this.model = model;
        this.searchView = searchView;
        //lite fusk, ändra så att detail gör detta. Test för nu.
        this.detailView = detail;
    }

   /* rend =  
            
        // window.location.hash = "search";
        //show("home");
        () => {
            document.getElementById("searchBtn").addEventListener("click", () => {
        
            let sInput = document.getElementById("serchInput").value;
            let typeBoxInput = document.getElementById("typeInput").value;
            console.log(typeBoxInput);
            console.log(sInput);
            let model = new DinnerModel();
            model.getAllDishes(sInput, typeBoxInput);
            console.log(model.getAllDishes("",""));
    });
            
        
        
    }*/
    
    
    
   
    
    
    
    startBtnListener = () => {
            
            
        this.searchView.container.addEventListener("click", (e) => {
            
            if (e.target.textContent.trim() === "search"){
                
            let sInput = document.getElementById("serchInput").value;
            let typeBoxInput = document.getElementById("typeInput").value;
            console.log(typeBoxInput);
            console.log(sInput);
            this.searchView.render(typeBoxInput,sInput);
            }
            
            
            
                if(e.target.parentNode.tagName === "FIGURE"){
                    console.log(e.target.id);
                    this.detailView.render(e.target.id); 
                    
                    this.gsc.goToDetail(); 
                    
                }
                
            
            
   
        });
        
        /*document.getElementById("dishContainer").addEventListener("click", () => {
            
            alert('help');
        });*/


}
}
