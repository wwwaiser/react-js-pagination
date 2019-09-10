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
      itemCollection: []
    };
    this.handlePageChange = this._handlePageChange.bind(this);
  }

  componentDidMount() {
    let itemCollection = [];
    for (var i = 1; i <= PER_PAGE; i++) {
      itemCollection.push(i);
    }

    this.setState({ itemCollection: itemCollection });
  }

  _handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);

    let itemCollection = [];
    for (var i = PER_PAGE * pageNumber + 1; i <= (PER_PAGE * pageNumber + PER_PAGE); i++) {
      itemCollection.push(i);
    }

    this.setState({
      activePage: pageNumber,
      itemCollection: itemCollection
    });
  }

  render() {


    const defaultSnippet = `render() {
  return (
    <Pagination
      activePage={this.state.activePage}
      itemsCountPerPage={PER_PAGE}
      totalItemsCount={TOTAL_COUNT}
      onChange={this.handlePageChange}
    />
  );
}`;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className='leftPanel'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Item Collection(s)</h4>
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <ul>
                    {this.state.itemCollection.map((data) => (<li key={data}>Item #{data}</li>))}
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="col-md-8">
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
                        itemsCountPerPage={PER_PAGE}
                        totalItemsCount={TOTAL_COUNT}
                        onChange={this.handlePageChange}
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