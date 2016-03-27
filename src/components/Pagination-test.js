/*eslint-env node, mocha */
import React from "react";
import expect, {createSpy} from "expect";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  const spy = createSpy();
  const context = {
    ...Pagination.prototype,
    props: {
      totalItemsCount: 20,
      onChange: spy,
      activePage: 1,
      pageRangeDisplayed: 10,
      itemsCountPerPage: 10,
      prevPageText: "<",
      nextPageText: ">",
      lastPageText: ">>",
      firstPageText: "<<"
    },
    onClick: Pagination.prototype.onClick,
    buildPages: Pagination.prototype.buildPages,
  };

  describe("render()", () => {
    it("renders a UL tag", () => {
      const result = Pagination.prototype.render.call(context);
      expect(result.type).toBe("ul");
    });

    it("renders the appropriate amount of children", () => {
      const result = Pagination.prototype.render.call(context);
      expect(result.props.children.length).toBe(3);
    });

    it("renders the next page link if there is one", () => {
      const result = Pagination.prototype.render.call(context);
      expect(result.props.children[result.props.children.length - 1].key).toBe("next2");
    });

    it("renders the prev page link if there is one", () => {
      const newCtx = {
        ...Pagination.prototype,
        props: {
          totalItemsCount: 20,
          onChange: spy,
          activePage: 2,
          pageRangeDisplayed: 10,
          itemsCountPerPage: 10,
          prevPageText: "<",
          nextPageText: ">",
          lastPageText: ">>",
          firstPageText: "<<"
        },
        onClick: Pagination.prototype.onClick,
        buildPages: Pagination.prototype.buildPages,
      };
      const result = Pagination.prototype.render.call(newCtx);
      expect(result.props.children[0].key).toBe("prev1");
    });

    it("renders the first page link if there is one", () => {
      const newCtx = {
        ...Pagination.prototype,
        props: {
          totalItemsCount: 30,
          onChange: spy,
          activePage: 3,
          pageRangeDisplayed: 2,
          itemsCountPerPage: 10,
          prevPageText: "<",
          nextPageText: ">",
          lastPageText: ">>",
          firstPageText: "<<"
        },
        onClick: Pagination.prototype.onClick,
        buildPages: Pagination.prototype.buildPages,
      };
      const result = Pagination.prototype.render.call(newCtx);
      expect(result.props.children[0].props.pageText).toBe("<<");
    });

    it("renders the last page link if there is one", () => {
      const newCtx = {
        ...Pagination.prototype,
        props: {
          totalItemsCount: 30,
          onChange: spy,
          activePage: 1,
          pageRangeDisplayed: 2,
          itemsCountPerPage: 10,
          prevPageText: "<",
          nextPageText: ">",
          lastPageText: ">>",
          firstPageText: "<<"
        },
        onClick: Pagination.prototype.onClick,
        buildPages: Pagination.prototype.buildPages,
      };
      const result = Pagination.prototype.render.call(newCtx);
      const expected = result.props.children[result.props.children.length - 1];
      expect(expected.props.pageText).toBe(">>");
    });
  });

  describe("onClick()", () => {
    it("calls the onChange prop", () => {
      const e = {
        preventDefault: () => {}
      };
      const result = Pagination.prototype.onClick.call(context, 1, e);
      expect(spy).toHaveBeenCalled();
    });
  });
});
