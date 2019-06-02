import React from "react";
import {mount, shallow} from "enzyme";
import Pagination from "./Pagination";


describe("<Pagination />", () => {
  const props = {
    totalItemsCount: 20,
    onClick: () => {},
    onChange: () => {}
  };

  describe("render()", () => {
    it("renders a UL tag", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.find("ul").length).toBe(1);
    });

    it("renders the appropriate amount of children", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children().children().length).toBe(6);
    });

    it("renders the next page link", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children().childAt(4).text()).toBe(wrapper.prop("nextPageText"));
    });

    it("renders the prev page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children().childAt(1).text()).toBe(wrapper.prop("prevPageText"));
    });

    it("renders the first page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children().childAt(0).text()).toBe(wrapper.prop("firstPageText"));
    });

    it("renders the last page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children().childAt(5).text()).toBe(wrapper.prop("lastPageText"));
    });

    it("renders class in UL tag", () => {
      const wrapper = mount(<Pagination {...props} innerClass="pagination list-inline center-block text-center" />);
      expect(wrapper.find("ul").hasClass("pagination")).toBe(true);
      expect(wrapper.find("ul").hasClass("list-inline")).toBe(true);
      expect(wrapper.find("ul").hasClass("center-block")).toBe(true);
      expect(wrapper.find("ul").hasClass("text-center")).toBe(true);
    });

    it("passes down disabledClass to the prev, first, next and last pages", () => {
      const disabledClass="somethingElse";
      const wrapper = mount(
        <Pagination {...props} hideDisabled={false} totalItemsCount={1} disabledClass={disabledClass} />
      );

      const innerUl = wrapper.find("ul");
      const firstPage = innerUl.childAt(0);
      const prevPage = innerUl.childAt(1);
      const nextPage = innerUl.childAt(3);
      const lastPage = innerUl.childAt(4);

      expect(firstPage.find("li").hasClass(disabledClass)).toBe(true);
      expect(prevPage.find("li").hasClass(disabledClass)).toBe(true);
      expect(nextPage.find("li").hasClass(disabledClass)).toBe(true);
      expect(lastPage.find("li").hasClass(disabledClass)).toBe(true);
    });
		
    it("passes down itemClass to the prev, first, next and last pages", () => {
      const itemClass="somethingElse";
      const wrapper = mount(
        <Pagination {...props} hideDisabled={false} totalItemsCount={1} itemClass={itemClass} />
      );
      const innerUl = wrapper.find("ul");
      const firstPage = innerUl.childAt(0);
      const prevPage = innerUl.childAt(1);
      const nextPage = innerUl.childAt(2);
      const lastPage = innerUl.childAt(3);

      expect(firstPage.find("li").hasClass(itemClass)).toBe(true);
      expect(prevPage.find("li").hasClass(itemClass)).toBe(true);
      expect(nextPage.find("li").hasClass(itemClass)).toBe(true);
      expect(lastPage.find("li").hasClass(itemClass)).toBe(true);
    });
		
    it("passes down linkClass to the prev, first, next and last pages links", () => {
      const linkClass="somethingElse";
      const wrapper = mount(
        <Pagination {...props} hideDisabled={false} totalItemsCount={1} linkClass={linkClass} />
      );
      const innerUl = wrapper.find("ul");
      const firstPage = innerUl.childAt(0).find("a");
      const prevPage = innerUl.childAt(1).find("a");
      const nextPage = innerUl.childAt(2).find("a");
      const lastPage = innerUl.childAt(3).find("a");

      expect(firstPage.hasClass(linkClass)).toBe(true);
      expect(prevPage.hasClass(linkClass)).toBe(true);
      expect(nextPage.hasClass(linkClass)).toBe(true);
      expect(lastPage.hasClass(linkClass)).toBe(true);
    });

    it("assigns linkClassFirst to first link", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={1}
          linkClass="link"
          linkClassFirst="first"
        />
      );

      expect(wrapper.find("ul").childAt(0).find("a").hasClass("first")).toBe(true);
      expect(wrapper.find("ul").childAt(1).find("a").hasClass("first")).toBe(false);
    });

    it("assigns itemClassFirst to first list item", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={1}
          itemClass="item"
          itemClassFirst="first"
        />
      );

      expect(wrapper.find("ul").childAt(0).find("li").hasClass("first")).toBe(true);
      expect(wrapper.find("ul").childAt(1).find("li").hasClass("first")).toBe(false);
    });

    it("assigns linkClassPrev to prev link", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          linkClass="link"
          linkClassPrev="prev"
        />
      );

      expect(wrapper.find("ul").childAt(1).find("a").hasClass("prev")).toBe(true);
      expect(wrapper.find("ul").childAt(2).find("a").hasClass("prev")).toBe(false);
    });

    it("assigns itemClassPrev to prev list item", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          itemClass="item"
          itemClassPrev="prev"
        />
      );

      expect(wrapper.find("ul").childAt(1).find("li").hasClass("prev")).toBe(true);
      expect(wrapper.find("ul").childAt(2).find("li").hasClass("prev")).toBe(false);
    });

    it("assigns linkClassNext to next link", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          linkClass="link"
          linkClassNext="next"
        />
      );

      expect(wrapper.find("ul").childAt(7).find("a").hasClass("next")).toBe(true);
      expect(wrapper.find("ul").childAt(8).find("a").hasClass("next")).toBe(false);
    });

    it("assigns itemClassNext to next list item", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          itemClass="item"
          itemClassNext="next"
        />
      );

      expect(wrapper.find("ul").childAt(7).find("li").hasClass("next")).toBe(true);
      expect(wrapper.find("ul").childAt(8).find("li").hasClass("next")).toBe(false);
    });

    it("assigns linkClassLast to last link", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          linkClass="link"
          linkClassLast="last"
        />
      );

      expect(wrapper.find("ul").childAt(8).find("a").hasClass("last")).toBe(true);
      expect(wrapper.find("ul").childAt(7).find("a").hasClass("last")).toBe(false);
    });

    it("assigns itemClassLast to last list item", () => {
      const wrapper = mount(
        <Pagination
          {...props}
          hideDisabled={false}
          totalItemsCount={80}
          itemClass="item"
          itemClassLast="last"
        />
      );

      expect(wrapper.find("ul").childAt(8).find("li").hasClass("last")).toBe(true);
      expect(wrapper.find("ul").childAt(7).find("li").hasClass("last")).toBe(false);
    });
  });
});
