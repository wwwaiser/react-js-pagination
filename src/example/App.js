import React, { Component } from "react";
import Pagination from "../components/Pagination";
require("bootstrap/less/bootstrap.less");

class App extends Component {

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
  }

  render() {
    return (
      <div>
        <Pagination 
          activePage={4} 
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
