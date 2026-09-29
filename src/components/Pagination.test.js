import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  const props = {
    totalItemsCount: 20,
    onChange: () => {}
  };

  const renderPagination = (extra = {}) => {
    const { container } = render(<Pagination {...props} {...extra} />);
    const ul = container.querySelector("ul");
    return { ul, items: Array.from(ul.children), links: Array.from(ul.querySelectorAll("a")) };
  };

  const texts = (items) => items.map((li) => li.textContent);

  describe("render()", () => {
    it("renders a UL tag", () => {
      const { ul } = renderPagination();
      expect(ul).not.toBeNull();
    });

    it("renders the appropriate amount of children", () => {
      const { items } = renderPagination();
      expect(items).toHaveLength(6);
    });

    it("renders first, prev, pages, next and last in order", () => {
      const { items } = renderPagination();
      expect(texts(items)).toEqual(["«", "⟨", "1", "2", "⟩", "»"]);
    });

    it("renders class in UL tag", () => {
      const { ul } = renderPagination({ innerClass: "pagination list-inline center-block text-center" });
      ["pagination", "list-inline", "center-block", "text-center"].forEach((c) =>
        expect(ul.classList.contains(c)).toBe(true)
      );
    });

    it("passes down disabledClass to the prev, first, next and last pages", () => {
      const { items } = renderPagination({ hideDisabled: false, totalItemsCount: 1, disabledClass: "somethingElse" });
      [0, 1, 3, 4].forEach((i) => expect(items[i].classList.contains("somethingElse")).toBe(true));
    });

    it("passes down itemClass to the prev, first, next and last pages", () => {
      const { items } = renderPagination({ hideDisabled: false, totalItemsCount: 1, itemClass: "somethingElse" });
      [0, 1, 3, 4].forEach((i) => expect(items[i].classList.contains("somethingElse")).toBe(true));
    });

    it("passes down linkClass to the prev, first, next and last pages links", () => {
      const { links } = renderPagination({ hideDisabled: false, totalItemsCount: 1, linkClass: "somethingElse" });
      [0, 1, 3, 4].forEach((i) => expect(links[i].classList.contains("somethingElse")).toBe(true));
    });

    it.each([
      ["linkClassFirst", "first", 0, 1, "a"],
      ["itemClassFirst", "first", 0, 1, "li"],
      ["linkClassPrev", "prev", 1, 2, "a"],
      ["itemClassPrev", "prev", 1, 2, "li"],
      ["linkClassNext", "next", 7, 8, "a"],
      ["itemClassNext", "next", 7, 8, "li"],
      ["linkClassLast", "last", 8, 7, "a"],
      ["itemClassLast", "last", 8, 7, "li"]
    ])("assigns %s only to its own control", (prop, value, own, other, tag) => {
      const { items, links } = renderPagination({
        hideDisabled: false,
        totalItemsCount: 80,
        itemClass: "item",
        linkClass: "link",
        [prop]: value
      });
      const nodes = tag === "a" ? links : items;
      expect(nodes[own].classList.contains(value)).toBe(true);
      expect(nodes[other].classList.contains(value)).toBe(false);
    });
  });

  describe("visibility options", () => {
    it("hideDisabled hides first and prev on the first page", () => {
      const { items } = renderPagination({ totalItemsCount: 100, activePage: 1, hideDisabled: true });
      expect(texts(items)).toEqual(["1", "2", "3", "4", "5", "⟩", "»"]);
    });

    it("hideDisabled hides next and last on the last page", () => {
      const { items } = renderPagination({ totalItemsCount: 100, activePage: 10, hideDisabled: true });
      expect(texts(items)).toEqual(["«", "⟨", "6", "7", "8", "9", "10"]);
    });

    it("hideNavigation hides prev and next", () => {
      const { items } = renderPagination({ totalItemsCount: 100, activePage: 5, hideNavigation: true });
      expect(texts(items)).toEqual(["«", "3", "4", "5", "6", "7", "»"]);
    });

    it("hideFirstLastPages hides first and last", () => {
      const { items } = renderPagination({ totalItemsCount: 100, activePage: 5, hideFirstLastPages: true });
      expect(texts(items)).toEqual(["⟨", "3", "4", "5", "6", "7", "⟩"]);
    });

    it("pageRangeDisplayed={0} shows only the navigation controls", () => {
      const onChange = jest.fn();
      const { items } = renderPagination({ totalItemsCount: 230, activePage: 3, pageRangeDisplayed: 0, ellipsis: true, onChange });
      expect(texts(items)).toEqual(["«", "⟨", "⟩", "»"]);
      fireEvent.click(screen.getByLabelText("Go to next page"));
      fireEvent.click(screen.getByLabelText("Go to last page"));
      expect(onChange.mock.calls.map((c) => c[0])).toEqual([4, 23]);
    });

    it("pageRangeDisplayed controls how many page numbers show", () => {
      const { items } = renderPagination({ totalItemsCount: 1000, activePage: 20, pageRangeDisplayed: 3, itemsCountPerPage: 25 });
      expect(texts(items)).toEqual(["«", "⟨", "19", "20", "21", "⟩", "»"]);
    });
  });

  describe("accessibility", () => {
    it("marks only the active page with aria-current", () => {
      renderPagination({ totalItemsCount: 100, activePage: 3 });
      const current = document.querySelectorAll("[aria-current]");
      expect(current).toHaveLength(1);
      expect(current[0].textContent).toBe("3");
      expect(current[0].getAttribute("aria-current")).toBe("page");
    });

    it("marks disabled controls with aria-disabled", () => {
      const { links } = renderPagination({ totalItemsCount: 100, activePage: 1 });
      expect(links[0].getAttribute("aria-disabled")).toBe("true");
      expect(links[1].getAttribute("aria-disabled")).toBe("true");
      expect(links[links.length - 1].hasAttribute("aria-disabled")).toBe(false);
    });

    it("uses the default aria labels", () => {
      renderPagination({ totalItemsCount: 100, activePage: 3 });
      ["Go to first page", "Go to previous page", "Go to page number 4", "Go to next page", "Go to last page"].forEach((l) =>
        expect(screen.getByLabelText(l)).toBeTruthy()
      );
    });

    it("accepts custom aria labels", () => {
      renderPagination({
        totalItemsCount: 100,
        activePage: 3,
        pageAriaLabel: "Seite :page",
        firstPageAriaLabel: "Erste Seite",
        prevPageAriaLabel: "Vorherige Seite",
        nextPageAriaLabel: "Nächste Seite",
        lastPageAriaLabel: "Letzte Seite"
      });
      ["Erste Seite", "Vorherige Seite", "Seite 4", "Nächste Seite", "Letzte Seite"].forEach((l) =>
        expect(screen.getByLabelText(l)).toBeTruthy()
      );
    });
  });

  describe("links and clicks", () => {
    it("uses getPageUrl for every href", () => {
      const { links } = renderPagination({ totalItemsCount: 100, activePage: 3, getPageUrl: (i) => `/list?page=${i}` });
      expect(links.map((a) => a.getAttribute("href"))).toEqual([
        "/list?page=1",
        "/list?page=2",
        "/list?page=1",
        "/list?page=2",
        "/list?page=3",
        "/list?page=4",
        "/list?page=5",
        "/list?page=4",
        "/list?page=10"
      ]);
    });

    it.each([
      ["Go to first page", 1, "first"],
      ["Go to previous page", 4, "prev"],
      ["Go to page number 6", 6, "page"],
      ["Go to next page", 6, "next"],
      ["Go to last page", 10, "last"]
    ])("clicking \"%s\" calls onChange(%i, \"%s\")", (label, expected, control) => {
      const onChange = jest.fn();
      renderPagination({ totalItemsCount: 100, activePage: 5, onChange });
      fireEvent.click(screen.getByLabelText(label));
      expect(onChange).toHaveBeenCalledWith(expected, control);
    });

    it("passes the control to state setters without warnings", () => {
      const errors = jest.spyOn(console, "error").mockImplementation(() => {});
      function Controlled() {
        const [page, setPage] = useState(1);
        return <Pagination totalItemsCount={100} activePage={page} onChange={setPage} />;
      }
      render(<Controlled />);
      fireEvent.click(screen.getByLabelText("Go to last page"));
      expect(document.querySelector("[aria-current]").textContent).toBe("10");
      expect(errors).not.toHaveBeenCalled();
      errors.mockRestore();
    });

    it("does not call onChange for disabled controls", () => {
      const onChange = jest.fn();
      renderPagination({ totalItemsCount: 100, activePage: 1, onChange });
      fireEvent.click(screen.getByLabelText("Go to previous page"));
      fireEvent.click(screen.getByLabelText("Go to first page"));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("works as a controlled component", () => {
      function Controlled() {
        const [page, setPage] = useState(1);
        return <Pagination totalItemsCount={100} activePage={page} onChange={setPage} />;
      }
      render(<Controlled />);
      fireEvent.click(screen.getByLabelText("Go to next page"));
      fireEvent.click(screen.getByLabelText("Go to next page"));
      expect(document.querySelector("[aria-current]").textContent).toBe("3");
    });
  });

  describe("ellipsis", () => {
    const base = { totalItemsCount: 450, ellipsis: true };

    it("is off by default", () => {
      const { items } = renderPagination({ totalItemsCount: 450, activePage: 20 });
      expect(texts(items)).toEqual(["«", "⟨", "18", "19", "20", "21", "22", "⟩", "»"]);
    });

    it("shows the first and last page around the range", () => {
      const { items } = renderPagination({ ...base, activePage: 20 });
      expect(texts(items)).toEqual(["«", "⟨", "1", "…", "18", "19", "20", "21", "22", "…", "45", "⟩", "»"]);
    });

    it("shows a single hidden page instead of an ellipsis", () => {
      const { items } = renderPagination({ ...base, activePage: 5 });
      expect(texts(items)).toEqual(["«", "⟨", "1", "2", "3", "4", "5", "6", "7", "…", "45", "⟩", "»"]);
      const end = renderPagination({ ...base, totalItemsCount: 100, activePage: 6 });
      expect(texts(end.items)).toEqual(["«", "⟨", "1", "…", "4", "5", "6", "7", "8", "9", "10", "⟩", "»"]);
    });

    it("adds nothing when the range already reaches both ends", () => {
      const { items } = renderPagination({ ...base, totalItemsCount: 50, activePage: 3 });
      expect(texts(items)).toEqual(["«", "⟨", "1", "2", "3", "4", "5", "⟩", "»"]);
    });

    it("renders the ellipsis as a disabled item that is not a link", () => {
      const { items } = renderPagination({ ...base, activePage: 20, itemClass: "page-item", linkClass: "page-link" });
      const gap = items[3];
      expect(gap.className).toBe("page-item disabled");
      expect(gap.querySelector("a")).toBeNull();
      const span = gap.querySelector("span");
      expect(span.className).toBe("page-link");
      expect(span.getAttribute("aria-hidden")).toBe("true");
    });

    it("accepts custom ellipsisText", () => {
      const { items } = renderPagination({ ...base, activePage: 20, ellipsisText: <b>...</b> });
      expect(items[3].innerHTML).toContain("<b>...</b>");
    });

    it("links the first and last page numbers", () => {
      const onChange = jest.fn();
      renderPagination({ ...base, activePage: 20, onChange, getPageUrl: (i) => `?page=${i}` });
      const last = screen.getByLabelText("Go to page number 45");
      expect(last.getAttribute("href")).toBe("?page=45");
      fireEvent.click(last);
      fireEvent.click(screen.getByLabelText("Go to page number 1"));
      expect(onChange.mock.calls.map((c) => c[0])).toEqual([45, 1]);
    });
  });

  describe("getPageText", () => {
    it("formats page numbers but keeps numeric aria labels", () => {
      const { items } = renderPagination({ totalItemsCount: 20000, activePage: 1002, getPageText: (i) => i.toLocaleString("en-US") });
      expect(texts(items).slice(2, 7)).toEqual(["1,000", "1,001", "1,002", "1,003", "1,004"]);
      expect(screen.getByLabelText("Go to page number 1002").textContent).toBe("1,002");
    });

    it("can return an element and applies to ellipsis end pages", () => {
      const { items } = renderPagination({ totalItemsCount: 450, activePage: 20, ellipsis: true, getPageText: (i) => <em>{i}</em> });
      expect(items[2].innerHTML).toContain("<em>1</em>");
      expect(items[10].innerHTML).toContain("<em>45</em>");
    });
  });

  describe("rerendering", () => {
    it("keeps the navigation controls mounted when the page changes", () => {
      const icon = (name) => <i className={name}>{name}</i>;
      const props = { totalItemsCount: 100, onChange: () => {}, firstPageText: icon("first"), prevPageText: icon("prev"), nextPageText: icon("next"), lastPageText: icon("last") };
      const { container, rerender } = render(<Pagination {...props} activePage={3} />);
      const before = ["first", "prev", "next", "last"].map((c) => container.querySelector(`.${c}`));
      rerender(<Pagination {...props} activePage={4} />);
      const after = ["first", "prev", "next", "last"].map((c) => container.querySelector(`.${c}`));
      after.forEach((node, i) => expect(node).toBe(before[i]));
    });
  });

  describe("edge cases", () => {
    it("renders only disabled controls when there are no items", () => {
      const { items } = renderPagination({ totalItemsCount: 0 });
      expect(texts(items)).toEqual(["«", "⟨", "⟩", "»"]);
      items.forEach((li) => expect(li.classList.contains("disabled")).toBe(true));
    });

    it("never renders the class \"undefined\"", () => {
      const { ul } = renderPagination({ totalItemsCount: 450, activePage: 15 });
      expect(ul.outerHTML).not.toContain("undefined");
    });
  });
});
