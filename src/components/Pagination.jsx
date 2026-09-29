import React from "react";
import PropTypes from "prop-types";
import paginator from "paginator";
import Page from "./Page";
import cx from "classnames";

export default class Pagination extends React.Component {
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    pageAriaLabel: PropTypes.string,
    prevPageAriaLabel: PropTypes.string,
    prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    nextPageAriaLabel: PropTypes.string,
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    lastPageAriaLabel: PropTypes.string,
    lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    firstPageAriaLabel: PropTypes.string,
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
    pageAriaLabel: "Go to page number :page",
    prevPageAriaLabel: "Go to previous page",
    prevPageText: "⟨",
    firstPageAriaLabel: "Go to first page",
    firstPageText: "«",
    nextPageAriaLabel: "Go to next page",
    nextPageText: "⟩",
    lastPageAriaLabel: "Go to last page",
    lastPageText: "»",
    innerClass: "pagination",
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    getPageUrl: () => "#",
    disabledClass: "disabled",
    ellipsis: false,
    ellipsisText: "…"
  };

  isFirstPageVisible(has_previous_page) {
    const { hideDisabled, hideFirstLastPages } = this.props;
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
    if (hideNavigation || (hideDisabled && !has_next_page)) return false;
    return true;
  }

  isLastPageVisible(has_next_page) {
    const { hideDisabled, hideFirstLastPages } = this.props;
    if (hideFirstLastPages || (hideDisabled && !has_next_page)) return false;
    return true;
  }

  renderPageNumber(i) {
    const {
      activePage,
      getPageUrl,
      onChange,
      itemClass,
      linkClass,
      activeClass,
      activeLinkClass,
      pageAriaLabel
    } = this.props;
    return (
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
        ariaLabel={pageAriaLabel.replace(":page", i)}
      />
    );
  }

  renderEllipsis(position) {
    const { itemClass, linkClass, disabledClass, ellipsisText } = this.props;
    return (
      <li key={"ellipsis-" + position} className={cx(itemClass, disabledClass)}>
        <span className={cx(linkClass) || undefined} aria-hidden="true">
          {ellipsisText}
        </span>
      </li>
    );
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
      itemClass,
      itemClassFirst,
      itemClassPrev,
      itemClassNext,
      itemClassLast,
      disabledClass,
      linkClass,
      linkClassFirst,
      linkClassPrev,
      linkClassNext,
      linkClassLast,
      getPageUrl,
      ellipsis,
      firstPageAriaLabel,
      prevPageAriaLabel,
      nextPageAriaLabel,
      lastPageAriaLabel
    } = this.props;

    // pageRangeDisplayed={0} shows only the navigation controls. paginator
    // turns a length of 0 into 10, so ask it for 1 and skip the numbers.
    const showNumbers = pageRangeDisplayed !== 0;
    const paginationInfo = new paginator(
      itemsCountPerPage,
      showNumbers ? pageRangeDisplayed : 1
    ).build(totalItemsCount, activePage);

    const { first_page, last_page, total_pages } = paginationInfo;

    // With ellipsis, keep the first and last page visible. A gap of a single
    // page shows that page instead of an ellipsis, since both take one slot.
    if (showNumbers && ellipsis && first_page > 1) {
      pages.push(this.renderPageNumber(1));
      if (first_page === 3) pages.push(this.renderPageNumber(2));
      else if (first_page > 3) pages.push(this.renderEllipsis("start"));
    }

    for (let i = first_page; showNumbers && i <= last_page; i++) {
      pages.push(this.renderPageNumber(i));
    }

    if (showNumbers && ellipsis && last_page < total_pages) {
      if (last_page === total_pages - 2) pages.push(this.renderPageNumber(total_pages - 1));
      else if (last_page < total_pages - 2) pages.push(this.renderEllipsis("end"));
      pages.push(this.renderPageNumber(total_pages));
    }

    this.isPrevPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key="prev"
          href={getPageUrl(paginationInfo.previous_page)}
          pageNumber={paginationInfo.previous_page}
          onClick={onChange}
          pageText={prevPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cx(itemClass, itemClassPrev)}
          linkClass={cx(linkClass, linkClassPrev)}
          disabledClass={disabledClass}
          ariaLabel={prevPageAriaLabel}
        />
      );

    this.isFirstPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key="first"
          href={getPageUrl(1)}
          pageNumber={1}
          onClick={onChange}
          pageText={firstPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cx(itemClass, itemClassFirst)}
          linkClass={cx(linkClass, linkClassFirst)}
          disabledClass={disabledClass}
          ariaLabel={firstPageAriaLabel}
        />
      );

    this.isNextPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key="next"
          href={getPageUrl(paginationInfo.next_page)}
          pageNumber={paginationInfo.next_page}
          onClick={onChange}
          pageText={nextPageText}
          isDisabled={!paginationInfo.has_next_page}
          itemClass={cx(itemClass, itemClassNext)}
          linkClass={cx(linkClass, linkClassNext)}
          disabledClass={disabledClass}
          ariaLabel={nextPageAriaLabel}
        />
      );

    this.isLastPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key="last"
          href={getPageUrl(paginationInfo.total_pages)}
          pageNumber={paginationInfo.total_pages}
          onClick={onChange}
          pageText={lastPageText}
          isDisabled={
            paginationInfo.current_page === paginationInfo.total_pages
          }
          itemClass={cx(itemClass, itemClassLast)}
          linkClass={cx(linkClass, linkClassLast)}
          disabledClass={disabledClass}
          ariaLabel={lastPageAriaLabel}
        />
      );

    return pages;
  }

  render() {
    const pages = this.buildPages();
    return <ul className={this.props.innerClass}>{pages}</ul>;
  }
}
