import React, { Component } from"react";
import Pagination from"../components/Pagination";
import SyntaxHighlighter from"react-syntax-highlighter";
import { sunburst } from"react-syntax-highlighter/dist/styles";
import"./App.less";
import"bootstrap/less/bootstrap.less";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      itemCollection: [],
      activePage: 1,
      totalItemsCount: 450,
      itemsCountPerPage: 10,
      pageRangeDisplayed: 5,
      prevPageText:"⟨",
      firstPageText:"«",
      lastPageText:"»",
      nextPageText:"⟩",
      hideFirstLastPages : false,
      hideNavigation : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount(){
    let itemCollection = [];
    for (var i = 1; i <= this.state.itemsCountPerPage; i++) {
      itemCollection.push(i);
    }

    this.setState({
      itemCollection: itemCollection
    });
  }

  handlePageChange(pageNumber) {
    let itemCollection = [];
    for (var i = this.state.itemsCountPerPage * pageNumber + 1; i <= (this.state.itemsCountPerPage * pageNumber + this.state.itemsCountPerPage); i++) {
      itemCollection.push(i);
    }

    this.setState({ 
      activePage: pageNumber,
      itemCollection: itemCollection
    });
  }

  handleChange(evt) {
    if (evt.target.name ==="hideFirstLastPages") {
      this.setState({ hideFirstLastPages :  !this.state.hideFirstLastPages  });
    } else if(evt.target.name ==="hideNavigation") {
      this.setState({ hideNavigation :  !this.state.hideNavigation});
    } else  {
      this.setState({ [evt.target.name]: evt.target.value });
    }
  }

  render() {

    const defaultSnippet = `render() {
    return (
      <Pagination
        activePage = {` + this.state.activePage + `}
        itemsCountPerPage = {` + this.state.itemsCountPerPage + `}
        totalItemsCount = {` + this.state.totalItemsCount + `}
        pageRangeDisplayed = {` + this.state.pageRangeDisplayed + `}
        prevPageText = {"` + this.state.prevPageText + `"}
        firstPageText = {"` + this.state.firstPageText + `"}
        lastPageText = {"` + this.state.lastPageText + `"}
        nextPageText = {"` + this.state.nextPageText + `"}
        hideFirstLastPages = {` + this.state.hideFirstLastPages + `}
        hideNavigation = {` + this.state.hideNavigation + `}
        onChange = {this.handlePageChange}         
      />
    );
  }`;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className='leftPanel'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Pagination Configuration Option(s)</h4>
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          activePage
                      </label>
                        <input onChange={this.handleChange} value={this.state.activePage} className="form-control" id="activePage" name="activePage" type="number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          itemsCountPerPage
                      </label>
                        <input onChange={this.handleChange} value={this.state.itemsCountPerPage} className="form-control" id="itemsCountPerPage" name="itemsCountPerPage" type="number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          totalItemsCount
                      </label>
                        <input onChange={this.handleChange} value={this.state.totalItemsCount} className="form-control" id="totalItemsCount" name="totalItemsCount" type="number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          pageRangeDisplayed
                      </label>
                        <input onChange={this.handleChange} value={this.state.pageRangeDisplayed} className="form-control" id="pageRangeDisplayed" name="pageRangeDisplayed" type="number" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          prevPageText
                      </label>
                        <input onChange={this.handleChange} value={this.state.prevPageText} className="form-control" id="prevPageText" name="prevPageText" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          firstPageText
                      </label>
                        <input onChange={this.handleChange} value={this.state.firstPageText} className="form-control" id="firstPageText" name="firstPageText" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          lastPageText
                      </label>
                        <input onChange={this.handleChange} value={this.state.lastPageText} className="form-control" id="lastPageText" name="lastPageText" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          nextPageText
                      </label>
                        <input onChange={this.handleChange} value={this.state.nextPageText} className="form-control" id="nextPageText" name="nextPageText" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="checkbox">
                          <label><input value={this.state.hideFirstLastPages} onChange={this.handleChange} type="checkbox" name="hideFirstLastPages" id="hideFirstLastPages" />hideFirstLastPages</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                       <div className="checkbox">
                          <label><input value={this.state.hideNavigation} onChange={this.handleChange} type="checkbox"  name="hideNavigation" id="hideNavigation" />hideNavigation </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='leftPanel'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Pagination Configuration Option(s)</h4>
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <ul style={{marginLeft:0}}>
                    {this.state.itemCollection.map((data) => (<li key={data}>Item #{data}</li>))}
                  </ul>
                  <div className='text-center'>
                      <Pagination
                        activePage={this.state.activePage ? this.state.activePage : 1 }
                        itemsCountPerPage={this.state.itemsCountPerPage ? this.state.itemsCountPerPage : 10 }
                        totalItemsCount={this.state.totalItemsCount ? this.state.totalItemsCount : 450 }
                        pageRangeDisplayed={this.state.pageRangeDisplayed ? this.state.pageRangeDisplayed : 5 }
                        prevPageText={this.state.prevPageText ? this.state.prevPageText :"⟨" }
                        firstPageText={this.state.firstPageText ? this.state.firstPageText :"«" }
                        lastPageText={this.state.lastPageText ? this.state.lastPageText :"»" }
                        nextPageText={this.state.nextPageText ? this.state.nextPageText :"⟩" }
                        hideFirstLastPages={this.state.hideFirstLastPages}
                        hideNavigation = {this.state.hideNavigation}
                        onChange={this.handlePageChange}
                      />
                    </div>
                 </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='app'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a href='#default'>
                      <h4 id='default' className="panel-title">Pagination Configuration React</h4>
                    </a>
                  </div>
                  <div className="panel-body">
                    <SyntaxHighlighter language='javascript' style={sunburst}>{defaultSnippet}</SyntaxHighlighter>
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