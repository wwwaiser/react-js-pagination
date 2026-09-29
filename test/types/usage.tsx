import * as React from "react";
import Pagination, { ReactJsPaginationProps, PaginationProps, PaginationControl } from "react-js-pagination";

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

export function NewProps() {
  const track = (page: number, control: PaginationControl) => void [page, control];
  return (
    <Pagination
      totalItemsCount={450}
      onChange={track}
      ellipsis
      ellipsisText={<span>…</span>}
      pageRangeDisplayed={0}
      getPageText={(i) => i.toLocaleString()}
      inactiveClass="off"
      inactiveLinkClass="bg-danger"
    />
  );
}

// @ts-expect-error control is one of the five known names
export const WrongControl: PaginationControl = "middle";

// @ts-expect-error totalItemsCount is required
export const MissingTotal = <Pagination onChange={() => {}} />;

// @ts-expect-error onChange receives a number
export const WrongHandler = <Pagination totalItemsCount={1} onChange={(page: string) => void page} />;
