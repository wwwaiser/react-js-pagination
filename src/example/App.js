import React, { Component } from "react";
import Pagination from "../components/Pagination";
require("bootstrap/less/bootstrap.less");

const PER_PAGE = 10;

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 1
    };
    this.handlePageChange = ::this._handlePageChange;
  }

  _handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <h2>Default:</h2>
        <Pagination 
          activePage={this.state.activePage} 
          itemsCountPerPage={PER_PAGE} 
          totalItemsCount={450} 
          onChange={this.handlePageChange}
        />

        <h2>Hide disabled:</h2>
        <Pagination 
          activePage={this.state.activePage} 
          itemsCountPerPage={PER_PAGE} 
          totalItemsCount={450} 
          onChange={this.handlePageChange}
          hideDisabled
        />

        <h2>Custom pages range:</h2>
        <Pagination 
          activePage={this.state.activePage} 
          itemsCountPerPage={PER_PAGE} 
          totalItemsCount={450} 
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        />

        <h2>Custom navigation texts:</h2>
        <Pagination 
          activePage={this.state.activePage} 
          itemsCountPerPage={PER_PAGE} 
          totalItemsCount={450} 
          onChange={this.handlePageChange}
          prevPageText='prev'
          nextPageText='next'
          firstPageText='first'
          lastPageText='last'
        />

        <h2>Custom navigation elements:</h2>
        <Pagination 
          activePage={this.state.activePage} 
          itemsCountPerPage={PER_PAGE} 
          totalItemsCount={450} 
          onChange={this.handlePageChange}
          firstPageElement={<li><a href='#'><i className='glyphicon glyphicon-chevron-left'/></a></li>}
          lastPageElement={<li><a href='#'><i className='glyphicon glyphicon-chevron-right'/></a></li>}
          prevPageElement={<li><a href='#'><i className='glyphicon glyphicon-menu-left'/></a></li>}
          nextPageElement={<li><a href='#'><i className='glyphicon glyphicon-menu-right'/></a></li>}
        />

      </div>
    );
  }
}