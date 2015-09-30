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
          activePage={4} 
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
React.render(<App />, document.getElementById("root"));
```

![Example](https://i.gyazo.com/d8eb2bdd165a0c5830242198bb61bb1d.png)

## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`totalItemCount` | Number | | Total count of items which you are going to display
`itemsCountPerPage` | Number | `10` | Count of items per  page
`acivePage` | Number | `1` | Active page
`pageRangeDisplayed` | Number | `5` | Range of pages in paginator, exclude navigation blocks (prev, next, first, last pages)
`onChange` | Function | | Page change handler. Receive pageNumber as arg

