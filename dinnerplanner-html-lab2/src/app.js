// helper function to find the container by short name
const container = function (containerName) {
    return document.body.querySelector("#container-" + containerName);
};

// the View containers will not all be visible at the same time. 
// Various screens will show different Views                                                              
const screens = {
    home: ["home"],
    search: ["header", "sidebar", "search"],
    overview: ["header", "overview"],
    // TODO: add more screens here!    
    detail: ["header", "sidebar", "detail"],
    printout: ["header", "printout"],
};



// switching between screens
const show = function (screenName) {
    // hide all views first 
    // optional FIXME: we could avoid hiding the containers that are part of the screen to be shown

    // optional FIXME: finding the containers could be done automatically
    // by looking at document.body.firstChild.children
    ["header", "home", "overview", "search", "sidebar", "detail", "printout"]
    .forEach(containerName => container(containerName).style.display = "none");

    // now we show all the Views used by the indicated screen
    screens[screenName]
        .forEach(containerName => container(containerName).style.display = "block");

};

window.onload = function () {
    //We instantiate our model
     const observable = new Observable();
    const model = new DinnerModel();
   

    // TODO:  more views here
    // TODO: The views are not being rendered yet. Figure out how to do so.

    
    const homeView = new HomeView(container("home"), model);
    const overviewView = new OverviewView(container("overview"), model);
    const searchView = new SearchView(container("search"), model);
    const sidebarView = new SidebarView(container("sidebar"), model);
    const headerView = new HeaderView(container("header"), model);
    const detailView = new DetailView(container("detail"), model);
    const printoutView = new PrintoutView(container("printout"),model);
    homeView.render();    
    overviewView.render();
    searchView.render("","");
    //sidebarView.render();
    headerView.render();
    detailView.render(1);
    printoutView.render();
    // TODO:  more views here
    
    
    const gensc = new gsc();
    const homecontroller = new HomeController(gensc,homeView);
    const searchController = new SearchController(gensc,searchView,model,detailView);
    const oveController = new OverviewController(gensc);
    const printoutController = new PrintoutController(gensc, printoutView);    
    const sidebarController = new SidebarController(gensc,sidebarView,model);
    const detailcontroller = new detailController(gensc,detailView,model);    
    homecontroller.startBtnListener();
    searchController.startBtnListener();
    oveController.startBtnListener();
    sidebarController.rend();
    printoutController.startBtnListener();
    detailcontroller.rend();
    show("search");
    
    
    
   /* document.getElementById("startBtn").addEventListener("click",() => { show("search") });
    document.getElementById("confirmBtn").addEventListener("click",() => { show("overview") });
    document.getElementById("searchBtn").addEventListener("click", () => {
        
       let sInput = document.getElementById("serchInput").value;
        let typeBoxInput = document.getElementById("typeInput").value;
        console.log(typeBoxInput);
        console.log(sInput);
        let model = new DinnerModel();
        console.log(model.getAllDishes("",""));
    });
    
    document.getElementById("backToDinner").addEventListener("click",() => { show("search") }); 
    
    //Förstår ej hur api skickar informationen tillbaka, samt behöver jag veta hur jag ska få in informationen till homecontroller. 
    
   // gör som alla views och fixa så att generalstate controller får rätt vy. 
    
    document.getElementById("toPrintBtn").addEventListener("click",()=> { show("printout") });
     
    document.getElementById("backToSearchBtn").addEventListener("click",() => { show("search")
    console.log("testbuttonfixed")});
    */
  


    /**
     * IMPORTANT: app.js is the only place where you are allowed to use document.body
     * In other Views you should limit your DOM searches to children of that View. For that, you must use querySelector()
     * It is possible to implement Views using no DOM search at all, using DOM fields like element.firstChild, 
     * element.nextSibling...
     */
};

/*btnTest = () => {
   document.getElementById("startBtn").addEventListener("click",() => { show("search") });
    
}

function changeText(id) {
  id.innerHTML = "Ooops!";
    
}*/
