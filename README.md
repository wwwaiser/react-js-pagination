# react-js-pagination

**A ReactJS [dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) component to render a pagination.**

The component comes with no built-in styles. HTML layout compatible with [Bootstrap](http://getbootstrap.com/components/#pagination) pagination stylesheets.

## Installation

Install `react-js-pagination` with [npm](https://www.npmjs.com/):

```
$ npm install react-js-pagination
```

## Usage

Very easy to use. Just provide props with total amount of things that you want to display on the page.

```jsx
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
    this.setState({activePage: pageNumber});
    console.log(`active page is ${pageNumber}`);
  }

  render() {
    return (
      <div>
        <Pagination 
          activePage={this.state.activePage} 
          totalItemsCount={450} 
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("root"));

```

Check [Live example](http://vayser.github.io/react-js-pagination)

![Example](https://i.gyazo.com/9af4c2b9e20aa95a67597d3ca64efde3.png)

## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`totalItemCount` | Number | | Total count of items which you are going to display
`itemsCountPerPage` | Number | `10` | Count of items per  page
`acivePage` | Number | `1` | Active page
`pageRangeDisplayed` | Number | `5` | Range of pages in paginator, exclude navigation blocks (prev, next, first, last pages)
`onChange` | Function | | Page change handler. Receive pageNumber as arg
`firstPageText` | String / ReactElement | `«` | Text of first page navigation button or whole element
`lastPageText` | String / ReactElement | `»` | Text of last page navigation button or whole element
`prevPageText` | String / ReactElement | `⟨` | Text of prev page navigation button or whole element
`nextPageText` | String / ReactElement | `⟩` | Text of next page navigation button or whole element

