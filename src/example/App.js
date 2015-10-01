import React, { Component } from "react";
import Pagination from "../components/Pagination";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 15
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <Pagination 
          activePage={this.state.activePage} 
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
