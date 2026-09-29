import * as React from "react";
import Pagination, { ReactJsPaginationProps, PaginationProps } from "react-js-pagination";

export function Minimal() {
  return <Pagination totalItemsCount={100} onChange={(page: number) => void page} />;
}

export function Full() {
  const props: ReactJsPaginationProps = {
    totalItemsCount: 450,
    activePage: 3,
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    onChange: () => {},
    prevPageText: <span>Prev</span>,
    nextPageText: "Next",
    pageAriaLabel: "Page :page",
    itemClass: "page-item",
    linkClass: "page-link",
    getPageUrl: (i) => `/items?page=${i}`
  };
  const alias: PaginationProps = props;
  return <Pagination {...alias} hideDisabled />;
}

// @ts-expect-error totalItemsCount is required
export const MissingTotal = <Pagination onChange={() => {}} />;

// @ts-expect-error onChange receives a number
export const WrongHandler = <Pagination totalItemsCount={1} onChange={(page: string) => void page} />;
