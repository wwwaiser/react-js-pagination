import React, { Component, PropTypes } from "react";
import paginator from "paginator";
import Page from "./Page";

export default class Pagination extends React.Component {
    static propTypes = {
      totalItemsCount: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
      activePage: PropTypes.number,
      pageRangeDisplayed: PropTypes.number,
      itemsCountPerPage: PropTypes.number,
      prevPageText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      nextPageText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      lastPageText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      firstPageText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      innerClass: PropTypes.string,
      activeClass: PropTypes.string,
      disabledClass: PropTypes.string
    }

    static defaultProps = {
      itemsCountPerPage: 10,
      pageRangeDisplayed: 5,
      activePage: 1,
      prevPageText: "⟨",
      firstPageText: "«",
      nextPageText: "⟩",
      lastPageText: "»",
      innerClass: "pagination",
    }

    buildPages() {
        const pages = [];
        const {
            itemsCountPerPage,
            pageRangeDisplayed,
            activePage,
            prevPageText,
            nextPageText,
            firstPageText,
            lastPageText,
            totalItemsCount,
            onChange,
            activeClass
        } = this.props;

        const paginationInfo = new paginator(itemsCountPerPage, pageRangeDisplayed)
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

        pages.unshift(
            <Page
                key={"prev" + paginationInfo.previous_page}
                pageNumber={paginationInfo.previous_page}
                onClick={onChange}
                pageText={prevPageText}
                isDisabled={!paginationInfo.has_previous_page}
            />
        );

        pages.unshift(
            <Page
                key={"first"}
                pageNumber={1}
                onClick={onChange}
                pageText={firstPageText}
                isDisabled={paginationInfo.current_page === paginationInfo.first_page}
            />
        );

        pages.push(
            <Page
                key={"next" + paginationInfo.next_page}
                pageNumber={paginationInfo.next_page}
                onClick={onChange}
                pageText={nextPageText}
                isDisabled={!paginationInfo.has_next_page}
            />
        );

        pages.push(
            <Page
                key={"last"}
                pageNumber={paginationInfo.total_pages}
                onClick={onChange}
                pageText={lastPageText}
                isDisabled={paginationInfo.current_page === paginationInfo.total_pages}
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
