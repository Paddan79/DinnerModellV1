class HomeController {
    constructor(gsc,homview) {
        this.gsc = gsc;
        this.home = homview;
    }

    rend() {

        //window.location.hash = "search";
        //show("home");
        
       // document.getElementById("startBtn").addEventListener("click" );
        console.log("bör vara klar");
        
            //add eventListener to button
        
        }
    
    startBtnListener = () => {
            //add eventListener to button
            document.getElementById("startBtn").addEventListener("click",() => {
                console.log("do something, event has been trigerd");
                this.gsc.gotoSearch();
            });
        }
    
    /*confirmBtn(){
        document.getElementById("startBtn").addEventListener("click",this.gsc.homeDone());
    }*/
    


}
