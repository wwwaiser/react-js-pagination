import React, { Component } from "react";
import Pagination from "../components/Pagination";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/styles";
import "./App.less";
import "bootstrap/less/bootstrap.less";

const PER_PAGE = 10;
const TOTAL_COUNT = 450;

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 1,
      itemCollection: [],
      totalItemsCount: 450,
      activePage: 1,
      itemsCountPerPage: 10,
      pageRangeDisplayed : 5
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {

    const defaultSnippet = `render() {
    return (
      <Pagination
        activePage={` + this.state.activePage + `}
        itemsCountPerPage={` + this.state.itemsCountPerPage + `}
        totalItemsCount={` + this.state.totalItemsCount + `}
        pageRangeDisplayed={` + this.state.pageRangeDisplayed + `}
        onChange={this.handlePageChange} //YOUR PAGE CHANGE EVENT
      />
    );
  }`;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className='leftPanel'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Item Collection(s)</h4>
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label class="control-label " for="name">
                          activePage
                      </label>
                        <input onChange={this.handleChange} value={this.state.activePage} class="form-control" id="activePage" name="activePage" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label class="control-label " for="name">
                          itemsCountPerPage
                      </label>
                        <input onChange={this.handleChange} value={this.state.itemsCountPerPage} class="form-control" id="itemsCountPerPage" name="itemsCountPerPage" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label class="control-label " for="name">
                          totalItemsCount
                      </label>
                        <input onChange={this.handleChange} value={this.state.totalItemsCount} class="form-control" id="totalItemsCount" name="totalItemsCount" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label class="control-label " for="name">
                        pageRangeDisplayed
                      </label>
                      <input onChange={this.handleChange} value={this.state.pageRangeDisplayed} class="form-control" id="pageRangeDisplayed" name="pageRangeDisplayed" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className='app'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Default</h4>
                    </a>
                  </div>
                  <div className="panel-body">
                    <SyntaxHighlighter language='javascript' style={sunburst}>{defaultSnippet}</SyntaxHighlighter>
                    <div className='text-center'>
                      <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}