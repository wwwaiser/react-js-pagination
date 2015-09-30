# react-js-pagination

**A ReactJS component to render a pagination.**

The component comes with no built-in styles. HTML layout compatible with Bootstrap pagination stylesheets.

## Installation

Install `react-js-pagination` with [npm](https://www.npmjs.com/):

```
$ npm install react-js-pagination
```

## Usage

Very easy to use. Just provide props with amount of items that you want to display and amount of items per page.

```jsx
import React, { Component } from "react";
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
  }
  
  render() {
    return (
      <div>
        <Pagination 
          totalItemsCount={450}
          itemsCountPerPage={10}
          activePage={1} 
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
React.render(<App />, document.getElementById("root"));
```
