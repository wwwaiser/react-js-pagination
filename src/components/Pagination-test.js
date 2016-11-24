/*eslint-env node, mocha */
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
      expect(wrapper.find("ul")).to.have.length(1);
    });

    it("renders the appropriate amount of children", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children()).to.have.length(6);
    });

    it("renders the next page link", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(4).text()).to.eql(wrapper.prop("nextPageText"));
    });

    it("renders the prev page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(1).text()).to.eql(wrapper.prop("prevPageText"));
    });

    it("renders the first page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(0).text()).to.eql(wrapper.prop("firstPageText"));
    });

    it("renders the last page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(5).text()).to.eql(wrapper.prop("lastPageText"));
    });

    it("renders class in UL tag", () => {
      const wrapper = mount(<Pagination {...props} innerClass="pagination list-inline center-block text-center" />);
      expect(wrapper.find("ul").hasClass("pagination")).to.be.true;
      expect(wrapper.find("ul").hasClass("list-inline")).to.be.true;
      expect(wrapper.find("ul").hasClass("center-block")).to.be.true;
      expect(wrapper.find("ul").hasClass("text-center")).to.be.true;
    });
  });
});
