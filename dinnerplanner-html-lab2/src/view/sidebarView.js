class SidebarView {

    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {


        let content = `
       <div class="blackBorder sideBar"> 
        <h3> My dinner </h3>
       <form class="peopleBox ">
         People
            <input id="range" class="box-size" type="number" size="2">
        </form> 
    </div>
  `;
        this.container.innerHTML = content;
        this.afterRender();
    }

    afterRender() {

    }
}

