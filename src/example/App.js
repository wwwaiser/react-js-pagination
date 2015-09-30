import React, { Component } from "react";
import Paginator from "../components/Paginator";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  render() {
    return (
      <div>
        <Paginator activePage={8} itemsCountPerPage={10} totalItemsCount={450} visiblePagesCount={5} />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("root"));
