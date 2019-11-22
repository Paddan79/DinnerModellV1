class SidebarView {

    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {


        let content = `
       <div class="noBorder sideBar content-sidebar"> 
     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
        <h3> My dinner </h3>
   
        <div class="Mylinks">
       <form class="peopleBox">
         People   
        <input  class="box-size" type="number" value="3" autofocus>
       </form> 
<p> </p>

  <div class="topbottomline">
<table width=100%>
  <tr>
    <th>Dish Name</th>
    
    <th class="ar">Cost</th>
  </tr>

</div>
  <tr>
    <td>Smörgås</td>
    
    <td class="ar">SEK 50.00</td>
  </tr>
  <tr>
    <td>Svamp</td>
    
    <td class="ar">SEK 94.00</td>
  </tr>
</table>

</br>
</br>

       <a id="confirmBtn" class="btn btn-lg btn-primary-color clear">
          Confirm Dinner
        </a>
    
    </div>
       </div>
  `;
        this.container.innerHTML = content;
        this.afterRender();
    }

    afterRender() {

    }
}

