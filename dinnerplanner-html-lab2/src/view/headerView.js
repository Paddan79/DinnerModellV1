class HeaderView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        let content = `
    <div class="header d-flex align-items-center justify-content-center">
      <h1>Dinner Planner</h1>
    </div>
  `;
        this.container.innerHTML = content;
        this.afterRender();
    }

    afterRender() {

    }
}