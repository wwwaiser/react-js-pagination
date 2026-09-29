import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Page from "./Page";

describe("<Page />", () => {
  const props = {
    onClick: () => {},
    pageNumber: 1
  };

  const renderPage = (extra = {}) => {
    const { container } = render(<Page {...props} {...extra} />);
    return { li: container.querySelector("li"), a: container.querySelector("a"), container };
  };

  it("renders an li", () => {
    const { container } = renderPage();
    expect(container.querySelectorAll("li")).toHaveLength(1);
  });

  it("sets the active class and aria-current if the page is active", () => {
    const { li, a } = renderPage({ isActive: true });
    expect(li.classList.contains("active")).toBe(true);
    expect(a.getAttribute("aria-current")).toBe("page");
  });

  it("does not add an \"undefined\" class to the active link", () => {
    const { a } = renderPage({ isActive: true });
    expect(a.className).toBe("");
  });

  it("adds activeLinkClass to the active link", () => {
    const { a } = renderPage({ isActive: true, activeLinkClass: "is-current" });
    expect(a.classList.contains("is-current")).toBe(true);
  });

  it("sets the disabled class and aria-disabled if the page is disabled", () => {
    const { li, a } = renderPage({ isDisabled: true });
    expect(li.classList.contains("disabled")).toBe(true);
    expect(a.getAttribute("aria-disabled")).toBe("true");
  });

  it("is not disabled by default", () => {
    const { li, a } = renderPage();
    expect(li.classList.contains("disabled")).toBe(false);
    expect(a.hasAttribute("aria-disabled")).toBe(false);
    expect(a.hasAttribute("aria-current")).toBe(false);
  });

  it("assigns a custom class to the list item", () => {
    const { li } = renderPage({ itemClass: "page-item" });
    expect(li.classList.contains("page-item")).toBe(true);
  });

  it("assigns a link class to the link", () => {
    const { a } = renderPage({ linkClass: "page-link" });
    expect(a.classList.contains("page-link")).toBe(true);
  });

  it("renders an element as a child if passed one", () => {
    const { container } = renderPage({ pageText: <strong>1</strong> });
    expect(container.innerHTML).toBe("<li class=\"\"><a class=\"\" href=\"#\"><strong>1</strong></a></li>");
  });

  it("calls onClick with the page number", () => {
    const onClick = jest.fn();
    const { a } = renderPage({ onClick, pageNumber: 7 });
    fireEvent.click(a);
    expect(onClick).toHaveBeenCalledWith(7);
  });

  it("does not call onClick when disabled", () => {
    const onClick = jest.fn();
    const { a } = renderPage({ onClick, isDisabled: true });
    fireEvent.click(a);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("lets modified clicks on a real URL open normally", () => {
    const onClick = jest.fn();
    const { a } = renderPage({ onClick, href: "/items?page=2", pageNumber: 2 });
    const notCancelled = fireEvent.click(a, { ctrlKey: true });
    expect(notCancelled).toBe(true);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("still handles modified clicks when there is no real URL", () => {
    const onClick = jest.fn();
    const { a } = renderPage({ onClick, pageNumber: 2 });
    const notCancelled = fireEvent.click(a, { metaKey: true });
    expect(notCancelled).toBe(false);
    expect(onClick).toHaveBeenCalledWith(2);
  });
});
