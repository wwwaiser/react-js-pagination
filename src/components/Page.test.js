import React from "react";
import Page from "./Page";
import { mount, shallow } from "enzyme";

describe("<Page />", () => {
  const props = {
    onClick: () => {},
    pageNumber: 1
  };

  it("renders an li", () => {
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find("li").length).toBe(1);
  });

  it("sets the active class if the page is active", () => {
    const wrapper = mount(<Page {...props} isActive={true} />);
    expect(wrapper.prop("isActive")).toBe(true);
    expect(wrapper.find("li").hasClass("active")).toBe(true);
  });

  it("sets the disabled class if the page is disabled", () => {
    const wrapper = mount(<Page {...props} isDisabled={true} />);
    expect(wrapper.prop("isDisabled")).toBe(true);
    expect(wrapper.find("li").hasClass("disabled")).toBe(true);
  });

  it("is not disabled by default", () => {
    const wrapper = mount(<Page {...props} />);
    expect(wrapper.prop("isDisabled")).toBe(false);
    expect(wrapper.find("li").hasClass("disabled")).toBe(false);
  });
	
  it("assigns a custom class to the list item", () => {
    const wrapper = mount(<Page {...props} itemClass="page-item" />);
    expect(wrapper.find("li").hasClass("page-item")).toBe(true);
  });

  it("assigns a link class to the link", () => {
    const wrapper = mount(<Page {...props} linkClass="page-link" />);
    expect(wrapper.find("a").hasClass("page-link")).toBe(true);
  });

  it("renders an element as a child if passed an one", () => {
    const child = <strong>1</strong>;
    const wrapper = mount(<Page {...props} pageText={child} />);
    expect(wrapper.html()).toBe("<li class=\"\"><a class=\"\" href=\"#\"><strong>1</strong></a></li>");
  });
});
