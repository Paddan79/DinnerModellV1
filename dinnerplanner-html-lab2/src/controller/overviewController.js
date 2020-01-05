class OverviewController {
    constructor(gsc, overView) {
        this.gsc = gsc;
        this.overview = overView;
    }

    rend() {

        // window.location.hash = "search";
        //show("home");

        this.startBtnListener();

    }


    startBtnListener() {


        this.overview.container.addEventListener("click", (e) => {


            if (e.target.textContent === "Print Full Recipe") {

                this.gsc.overviewDone();
            }
            if (e.target.textContent === "go back and edit dinner") {

                this.gsc.gotoSearch();
            }

        });
    }




}
