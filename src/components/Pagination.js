import React, {Component, PropTypes} from "react";
import Pager from "paginator";
import classNames from "classnames";
import Page from "./Page";

const lt = "⟨";
const Lt = "«";
const gt = "⟩";
const Gt = "»";

const prevPageText = lt;
const firstPageText = Lt;

const nextPageText = gt;
const lastPageText = Gt;

export default class Pagination extends React.Component {
    constructor(props) {
        super();
        this.buildPages();
    }

    static propTypes = {
      onChange: React.PropTypes.func,
      activePage: React.PropTypes.number,
      pageRangeDisplayed: React.PropTypes.number,
      itemsCountPerPage: React.PropTypes.number,
      totalItemsCount: React.PropTypes.number
    }

    onClick(page, e) {
        e.preventDefault();
        this.props.onChange(page);
    }

    buildPages() {
        let pages = [];
    }

    render() {
        let {
            itemsCountPerPage = 10,
            pageRangeDisplayed = 5,
            activePage = 1, 
            totalItemsCount
        } = this.props;

        let pagination = new Pager(itemsCountPerPage, pageRangeDisplayed);

        let paginationInfo = pagination.build(totalItemsCount, activePage);
        let pages = [];

        if (paginationInfo.first_page !== paginationInfo.last_page) {
            for(let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                pages.push(
                    <Page 
                        isActive={i === activePage} 
                        key={i} 
                        pageNumber={i} 
                        onClick={this.onClick.bind(this, i)} 
                    />
                );
            }
        }

        paginationInfo.has_previous_page && pages.unshift(
            <Page 
                isActive={false} 
                key={"prev" + paginationInfo.previous_page} 
                pageNumber={paginationInfo.previous_page} 
                onClick={this.onClick.bind(this, paginationInfo.previous_page)} 
                pageText={prevPageText}
            />
        );

        paginationInfo.first_page > 1 && pages.unshift(
            <Page 
                isActive={false}
                key={1} 
                pageNumber={1} 
                onClick={this.onClick.bind(this, 1)} 
                pageText={firstPageText}
            />
        );

        paginationInfo.has_next_page && pages.push(
            <Page 
                isActive={false}
                key={"next" + paginationInfo.next_page} 
                pageNumber={paginationInfo.next_page} 
                onClick={this.onClick.bind(this, paginationInfo.next_page)} 
                pageText={nextPageText}
            />
        );

        paginationInfo.last_page !== paginationInfo.total_pages && pages.push(
            <Page 
                isActive={false}
                key={paginationInfo.total_pages} 
                pageNumber={paginationInfo.total_pages} 
                onClick={this.onClick.bind(this, paginationInfo.total_pages)} 
                pageText={lastPageText}
            />
        );

        return (
            <ul className="pagination"> {pages} </ul>
        );
    }
}
