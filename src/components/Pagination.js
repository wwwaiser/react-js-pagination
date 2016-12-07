import React, { Component, PropTypes } from "react";
import pagiator from "paginator";
import Page from "./Page";

export default class Pagination extends React.Component {
    static propTypes = {
      totalItemsCount: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
      activePage: PropTypes.number,
      pageRangeDisplayed: PropTypes.number,
      itemsCountPerPage: PropTypes.number,
      prevPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
      nextPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
      lastPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
      firstPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
      innerClass: PropTypes.string
    }

    static defaultProps = {
      itemsCountPerPage: 10,
      pageRangeDisplayed: 5,
      activePage: 1,
      prevPage: {text: "⟨", overrideElement: false},
      firstPage: {text: "«", overrideElement: false},
      nextPage: {text: "⟩", overrideElement: false},
      lastPage: {text: "»", overrideElement: false},
      innerClass: "pagination",
    }

    buildPages() {
        const pages = [];
        const {
            itemsCountPerPage,
            pageRangeDisplayed,
            activePage,
            prevPage,
            nextPage,
            firstPage,
            lastPage,
            totalItemsCount,
            onChange,
            activeClass
        } = this.props;

        const paginationInfo = new pagiator(itemsCountPerPage, pageRangeDisplayed)
            .build(totalItemsCount, activePage);

        if (paginationInfo.first_page !== paginationInfo.last_page) {
            for(let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                pages.push(
                    <Page
                        isActive={i === activePage}
                        key={i}
                        pageNumber={i}
                        onClick={onChange}
                        activeClass={activeClass}
                    />
                );
            }
        }

        paginationInfo.has_previous_page && pages.unshift(
            <Page
                isActive={false}
                key={"prev"}
                pageNumber={paginationInfo.previous_page}
                onClick={onChange}
                pageText={prevPage.text}
                overrideElement={prevPage.overrideElement}
            />
        );

        paginationInfo.first_page > 1 && pages.unshift(
            <Page
                isActive={false}
                key={1}
                pageNumber={1}
                onClick={onChange}
                pageText={firstPage.text}
                overrideElement={firstPage.overrideElement}
            />
        );
        paginationInfo.has_next_page && pages.push(
            <Page
                isActive={false}
                key={"next"}
                pageNumber={paginationInfo.next_page}
                onClick={onChange}
                pageText={nextPage.text}
                overrideElement={nextPage.overrideElement}
            />
        );

        paginationInfo.last_page !== paginationInfo.total_pages && pages.push(
            <Page
                isActive={false}
                key={paginationInfo.total_pages}
                pageNumber={paginationInfo.total_pages}
                onClick={onChange}
                pageText={lastPage.text}
                overrideElement={lastPage.overrideElement}
            />
        );
        
        return pages;
    }

    render() {
        const pages = this.buildPages();
        return (
            <ul className={this.props.innerClass}>{pages}</ul>
        );
    }
}
