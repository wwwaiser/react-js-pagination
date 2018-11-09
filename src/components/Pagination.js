import React, { Component } from "react";
import PropTypes from "prop-types";
import paginator from "paginator";
import Page from "./Page";
import Ellipsis from "./Ellipsis";
import cx from "classnames";

export default class Pagination extends React.Component {
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabledClass: PropTypes.string,
    hideDisabled: PropTypes.bool,
    hideNavigation: PropTypes.bool,
    innerClass: PropTypes.string,
    itemClass: PropTypes.string,
    itemClassFirst: PropTypes.string,
    itemClassPrev: PropTypes.string,
    itemClassNext: PropTypes.string,
    itemClassLast: PropTypes.string,
    linkClass: PropTypes.string,
    activeClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    linkClassFirst: PropTypes.string,
    linkClassPrev: PropTypes.string,
    linkClassNext: PropTypes.string,
    linkClassLast: PropTypes.string,
    hideFirstLastPages: PropTypes.bool,
    getPageUrl: PropTypes.func,
    ellipsis: PropTypes.bool,
    ellipsisText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: "⟨",
    firstPageText: "«",
    nextPageText: "⟩",
    lastPageText: "»",
    innerClass: "pagination",
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    getPageUrl: (i) => "#",
    ellipsisText: "…"
  };

  isFirstPageVisible(has_previous_page) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    if (hideFirstLastPages || (hideDisabled && !has_previous_page)) return false;
    return true;
  }

  isPrevPageVisible(has_previous_page) {
    const { hideDisabled, hideNavigation } = this.props;
    if (hideNavigation || (hideDisabled && !has_previous_page)) return false;
    return true;
  }

  isNextPageVisible(has_next_page) {
    const { hideDisabled, hideNavigation } = this.props;
    if(hideNavigation || (hideDisabled && !has_next_page)) return false;
    return true;
  }

  isLastPageVisible(has_next_page) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    if (hideFirstLastPages || (hideDisabled && !has_next_page)) return false;
    return true;
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
      activeClass,
      itemClass,
      itemClassFirst,
      itemClassPrev,
      itemClassNext,
      itemClassLast,
      activeLinkClass,
      disabledClass,
      hideDisabled,
      hideNavigation,
      linkClass,
      linkClassFirst,
      linkClassPrev,
      linkClassNext,
      linkClassLast,
      hideFirstLastPages,
      getPageUrl,
      ellipsis,
      ellipsisText
    } = this.props;

    const paginationInfo = new paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage);

    if (ellipsis && paginationInfo.first_page > 1) {
      pages.push(
        <Page
          isActive={1 === activePage}
          key={1}
          href={getPageUrl(1)}
          pageNumber={1}
          pageText={"1"}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
        />
      );

      if (paginationInfo.first_page > 2) {
        pages.push(
          <Ellipsis
            key="startEllipsis"
            itemClass={itemClass}
            linkClass={linkClass}
            disabledClass={disabledClass}
            ellipsisText={ellipsisText}
          />
        );
      }
    }

    for (
      let i = paginationInfo.first_page;
      i <= paginationInfo.last_page;
      i++
    ) {
      pages.push(
        <Page
          isActive={i === activePage}
          key={i}
          href={getPageUrl(i)}
          pageNumber={i}
          pageText={i + ""}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
        />
      );
    }

    if (ellipsis && paginationInfo.last_page < paginationInfo.total_pages) {
      if (paginationInfo.last_page < paginationInfo.total_pages - 1) {
        pages.push(
          <Ellipsis
            key="endEllipsis"
            itemClass={itemClass}
            linkClass={linkClass}
            disabledClass={disabledClass}
            ellipsisText={ellipsisText}
          />
        );
      }

      pages.push(
        <Page
          isActive={paginationInfo.total_pages === activePage}
          key={paginationInfo.total_pages}
          href={getPageUrl(paginationInfo.total_pages)}
          pageNumber={paginationInfo.total_pages}
          pageText={paginationInfo.total_pages + ""}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
        />
      );
    }

    this.isPrevPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"prev" + paginationInfo.previous_page}
          pageNumber={paginationInfo.previous_page}
          onClick={onChange}
          pageText={prevPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cx(itemClass, itemClassPrev)}
          linkClass={cx(linkClass, linkClassPrev)}
          disabledClass={disabledClass}
        />
      );

    this.isFirstPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"first"}
          pageNumber={1}
          onClick={onChange}
          pageText={firstPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cx(itemClass, itemClassFirst)}
          linkClass={cx(linkClass, linkClassFirst)}
          disabledClass={disabledClass}
        />
      );

    this.isNextPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"next" + paginationInfo.next_page}
          pageNumber={paginationInfo.next_page}
          onClick={onChange}
          pageText={nextPageText}
          isDisabled={!paginationInfo.has_next_page}
          itemClass={cx(itemClass, itemClassNext)}
          linkClass={cx(linkClass, linkClassNext)}
          disabledClass={disabledClass}
        />
      );

    this.isLastPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"last"}
          pageNumber={paginationInfo.total_pages}
          onClick={onChange}
          pageText={lastPageText}
          isDisabled={
            paginationInfo.current_page === paginationInfo.total_pages
          }
          itemClass={cx(itemClass, itemClassLast)}
          linkClass={cx(linkClass, linkClassLast)}
          disabledClass={disabledClass}
        />
      );

    return pages;
  }

  render() {
    const pages = this.buildPages();
    return <ul className={this.props.innerClass}>{pages}</ul>;
  }
}
