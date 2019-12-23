class OverviewController {
    constructor(gsc) {
        this.gsc = gsc;
        
    }

    rend() {

        // window.location.hash = "search";
        //show("home");
        
    }
    
    startBtnListener = () => {
            //add eventListener to button
        
            document.getElementById("toPrintBtn").addEventListener("click" , () => {
                this.gsc.overviewDone();
            });
            document.getElementById("backToDinner").addEventListener("click",() => {    
                
                console.log("do something, event has been trigerd");
                this.gsc.gotoSearch();
            });
        }


}
