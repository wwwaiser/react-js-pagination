import * as React from "react";

export interface ReactJsPaginationProps {
    /** Total number of items across all pages. */
    totalItemsCount: number;
    /** Called with the page number the user picked. */
    onChange: (pageNumber: number) => void;
    /** Current page, starting at 1. Defaults to 1. */
    activePage?: number | undefined;
    /** Items shown per page. Defaults to 10. */
    itemsCountPerPage?: number | undefined;
    /** How many page numbers to show, not counting the navigation controls. Defaults to 5. */
    pageRangeDisplayed?: number | undefined;
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
