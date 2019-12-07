class HomeController {
    constructor(app) {
        this.app = app;

    }

    rend() {

        // window.location.hash = "search";
        //show("home");

        startBtnListener() => {
            //add eventListener to button
            document.getElementById("startBtn").addEventListener("click",() => {
                window.location.hash = "searh";
                console.log("do something, event has been trigerd");
                show("search");
            });
        }
    }


}
