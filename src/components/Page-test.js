/*eslint-env node, mocha */
import React from "react";
import expect from "expect";
import Page from "./Page";

describe("<Page />", () => {
  it("renders an li", () => {
    const context = {
      ...Page.prototype,
      props: {
        pageText: "1",
        pageNumber: 1,
        onClick: () => {},
        isActive: false
      }
    };
    const result = Page.prototype.render.call(context);
    expect(result.type).toBe("li");
  });

  it("sets the active class if the page is active", () => {
    const context = {
      ...Page.prototype,
      props: {
        pageText: "1",
        pageNumber: 1,
        onClick: () => {},
        isActive: true
      }
    };
    const result = Page.prototype.render.call(context);
    expect(result.props.className).toBe("active");
  });

  it("renders an element as a child if passed an one", () => {
    const child = <strong>1</strong>;
    const context = {
      ...Page.prototype,
      props: {
        pageText: child,
        pageNumber: 1,
        onClick: () => {},
        isActive: false
      }
    };
    const result = Page.prototype.render.call(context);
    expect(result.type).toBe("strong");
  });
});
