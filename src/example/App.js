import React, { Component } from "react";
import Paginator from "../components/Paginator";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
  }

  render() {
    return (
      <div>
        <Paginator 
          activePage={2} 
          itemsCountPerPage={10} 
          totalItemsCount={450} 
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("root"));
