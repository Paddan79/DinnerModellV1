class DetailView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        
        let content = `
<div class="noblackBorder  content-detail flexDetail "> 

    <div class="detailDish flexrow pagerow">
        <div class ="detailResult">
          <figure Style="width: 100px" class="blackBorder">
            <img src="images/toast.jpg" width="100" height="140">
            <figcaption style="width:100px" class="align-center blackBorder">Toast</figcaption>
         </figure>
         <a id="backToSearchBtn" class="btn btn-lg btn-primary-color">
          Back to search
         </a>
        </div>

        <div class="ingredients blackBorder" >
         <h3>Toast</h3>
         <p>Butter</p>
         <p>Bread</p>
         <p>Cheese</p>
         <p>Cheese</p>
         <p>Cheese</p>
         <p>Cheese</p>
         <p>Cheese</p>
         <p>Cheese</p>
        </div>
    </div>
    
</div>

    <div class="preparation " >
        <P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p><P> Gär så här </p>
<P> Gär så här </p><P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p><P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>
<P> Gär så här </p>

    </div>
</div>
  `;
        this.container.innerHTML = content;
        this.afterRender();
    }


    afterRender() {

    }
}
        