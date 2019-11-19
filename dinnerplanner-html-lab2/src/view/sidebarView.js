class SidebarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render() {
  
    
   let content = `
       <div> 
       <form>
         People
            <input type="number">
        </form> 
    </div>
  `;
    this.container.innerHTML = content;
    this.afterRender();
  }
  
  afterRender() {
                
  }
}