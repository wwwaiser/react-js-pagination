import * as React from "react";

/** Which control the user clicked, passed to onChange as the second argument. */
export type PaginationControl = "first" | "prev" | "page" | "next" | "last";

export interface ReactJsPaginationProps {
    /** Total number of items across all pages. */
    totalItemsCount: number;
    /** Called with the page number the user picked and the control they clicked. */
    onChange: (pageNumber: number, control: PaginationControl) => void;
    /** Current page, starting at 1. Defaults to 1. */
    activePage?: number | undefined;
    /** Items shown per page. Defaults to 10. */
    itemsCountPerPage?: number | undefined;
    /** How many page numbers to show, not counting the navigation controls. 0 shows only the controls. Defaults to 5. */
    pageRangeDisplayed?: number | undefined;
    /** Keep the first and last page visible, with an ellipsis for the pages in between. Defaults to false. */
    ellipsis?: boolean | undefined;
    /** Content of the ellipsis item. Defaults to "…". */
    ellipsisText?: string | React.ReactElement | undefined;
    /** Content of each page link. Defaults to the page number. */
    getPageText?: ((pageNumber: number) => string | React.ReactElement) | undefined;
    prevPageText?: string | React.ReactElement | undefined;
    nextPageText?: string | React.ReactElement | undefined;
    lastPageText?: string | React.ReactElement | undefined;
    firstPageText?: string | React.ReactElement | undefined;
    /** aria-label for page links; ":page" is replaced with the page number. Defaults to "Go to page number :page". */
    pageAriaLabel?: string | undefined;
    prevPageAriaLabel?: string | undefined;
    nextPageAriaLabel?: string | undefined;
    firstPageAriaLabel?: string | undefined;
    lastPageAriaLabel?: string | undefined;
    disabledClass?: string | undefined;
    hideDisabled?: boolean | undefined;
    hideNavigation?: boolean | undefined;
    hideFirstLastPages?: boolean | undefined;
    innerClass?: string | undefined;
    itemClass?: string | undefined;
    itemClassFirst?: string | undefined;
    itemClassPrev?: string | undefined;
    itemClassNext?: string | undefined;
    itemClassLast?: string | undefined;
    linkClass?: string | undefined;
    activeClass?: string | undefined;
    activeLinkClass?: string | undefined;
    /** Class of every <li> except the active page. */
    inactiveClass?: string | undefined;
    /** Class of every <a> except the active page link. */
    inactiveLinkClass?: string | undefined;
    linkClassFirst?: string | undefined;
    linkClassPrev?: string | undefined;
    linkClassNext?: string | undefined;
    linkClassLast?: string | undefined;
    /** Builds the href for each page link. Defaults to "#". */
    getPageUrl?: ((pageNumber: number) => string) | undefined;
}

export type PaginationProps = ReactJsPaginationProps;

declare class Pagination extends React.Component<ReactJsPaginationProps> {}

export default Pagination;
