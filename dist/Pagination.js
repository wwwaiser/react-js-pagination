"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paginator = _interopRequireDefault(require("paginator"));
var _Page = _interopRequireDefault(require("./Page"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Pagination = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Pagination() {
    _classCallCheck(this, Pagination);
    return _callSuper(this, Pagination, arguments);
  }
  _inherits(Pagination, _React$Component);
  return _createClass(Pagination, [{
    key: "isFirstPageVisible",
    value: function isFirstPageVisible(has_previous_page) {
      var _this$props = this.props,
        hideDisabled = _this$props.hideDisabled,
        hideFirstLastPages = _this$props.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isPrevPageVisible",
    value: function isPrevPageVisible(has_previous_page) {
      var _this$props2 = this.props,
        hideDisabled = _this$props2.hideDisabled,
        hideNavigation = _this$props2.hideNavigation;
      if (hideNavigation || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isNextPageVisible",
    value: function isNextPageVisible(has_next_page) {
      var _this$props3 = this.props,
        hideDisabled = _this$props3.hideDisabled,
        hideNavigation = _this$props3.hideNavigation;
      if (hideNavigation || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "isLastPageVisible",
    value: function isLastPageVisible(has_next_page) {
      var _this$props4 = this.props,
        hideDisabled = _this$props4.hideDisabled,
        hideFirstLastPages = _this$props4.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "renderPageNumber",
    value: function renderPageNumber(i) {
      var _this$props5 = this.props,
        activePage = _this$props5.activePage,
        getPageUrl = _this$props5.getPageUrl,
        getPageText = _this$props5.getPageText,
        onChange = _this$props5.onChange,
        itemClass = _this$props5.itemClass,
        linkClass = _this$props5.linkClass,
        activeClass = _this$props5.activeClass,
        activeLinkClass = _this$props5.activeLinkClass,
        inactiveClass = _this$props5.inactiveClass,
        inactiveLinkClass = _this$props5.inactiveLinkClass,
        pageAriaLabel = _this$props5.pageAriaLabel;
      return /*#__PURE__*/_react["default"].createElement(_Page["default"], {
        isActive: i === activePage,
        key: i,
        href: getPageUrl(i),
        pageNumber: i,
        pageText: getPageText(i),
        onClick: onChange,
        itemClass: itemClass,
        linkClass: linkClass,
        activeClass: activeClass,
        activeLinkClass: activeLinkClass,
        inactiveClass: inactiveClass,
        inactiveLinkClass: inactiveLinkClass,
        ariaLabel: pageAriaLabel.replace(":page", i)
      });
    }
  }, {
    key: "renderEllipsis",
    value: function renderEllipsis(position) {
      var _this$props6 = this.props,
        itemClass = _this$props6.itemClass,
        linkClass = _this$props6.linkClass,
        disabledClass = _this$props6.disabledClass,
        ellipsisText = _this$props6.ellipsisText;
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: "ellipsis-" + position,
        className: (0, _classnames["default"])(itemClass, disabledClass)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])(linkClass) || undefined,
        "aria-hidden": "true"
      }, ellipsisText));
    }
  }, {
    key: "buildPages",
    value: function buildPages() {
      var pages = [];
      var _this$props7 = this.props,
        itemsCountPerPage = _this$props7.itemsCountPerPage,
        pageRangeDisplayed = _this$props7.pageRangeDisplayed,
        activePage = _this$props7.activePage,
        prevPageText = _this$props7.prevPageText,
        nextPageText = _this$props7.nextPageText,
        firstPageText = _this$props7.firstPageText,
        lastPageText = _this$props7.lastPageText,
        totalItemsCount = _this$props7.totalItemsCount,
        onChange = _this$props7.onChange,
        itemClass = _this$props7.itemClass,
        itemClassFirst = _this$props7.itemClassFirst,
        itemClassPrev = _this$props7.itemClassPrev,
        itemClassNext = _this$props7.itemClassNext,
        itemClassLast = _this$props7.itemClassLast,
        disabledClass = _this$props7.disabledClass,
        inactiveClass = _this$props7.inactiveClass,
        inactiveLinkClass = _this$props7.inactiveLinkClass,
        linkClass = _this$props7.linkClass,
        linkClassFirst = _this$props7.linkClassFirst,
        linkClassPrev = _this$props7.linkClassPrev,
        linkClassNext = _this$props7.linkClassNext,
        linkClassLast = _this$props7.linkClassLast,
        getPageUrl = _this$props7.getPageUrl,
        ellipsis = _this$props7.ellipsis,
        firstPageAriaLabel = _this$props7.firstPageAriaLabel,
        prevPageAriaLabel = _this$props7.prevPageAriaLabel,
        nextPageAriaLabel = _this$props7.nextPageAriaLabel,
        lastPageAriaLabel = _this$props7.lastPageAriaLabel;

      // pageRangeDisplayed={0} shows only the navigation controls. paginator
      // turns a length of 0 into 10, so ask it for 1 and skip the numbers.
      var showNumbers = pageRangeDisplayed !== 0;
      var paginationInfo = new _paginator["default"](itemsCountPerPage, showNumbers ? pageRangeDisplayed : 1).build(totalItemsCount, activePage);
      var first_page = paginationInfo.first_page,
        last_page = paginationInfo.last_page,
        total_pages = paginationInfo.total_pages;

      // With ellipsis, keep the first and last page visible. A gap of a single
      // page shows that page instead of an ellipsis, since both take one slot.
      if (showNumbers && ellipsis && first_page > 1) {
        pages.push(this.renderPageNumber(1));
        if (first_page === 3) pages.push(this.renderPageNumber(2));else if (first_page > 3) pages.push(this.renderEllipsis("start"));
      }
      for (var i = first_page; showNumbers && i <= last_page; i++) {
        pages.push(this.renderPageNumber(i));
      }
      if (showNumbers && ellipsis && last_page < total_pages) {
        if (last_page === total_pages - 2) pages.push(this.renderPageNumber(total_pages - 1));else if (last_page < total_pages - 2) pages.push(this.renderEllipsis("end"));
        pages.push(this.renderPageNumber(total_pages));
      }
      this.isPrevPageVisible(paginationInfo.has_previous_page) && pages.unshift(/*#__PURE__*/_react["default"].createElement(_Page["default"], {
        key: "prev",
        control: "prev",
        href: getPageUrl(paginationInfo.previous_page),
        pageNumber: paginationInfo.previous_page,
        onClick: onChange,
        pageText: prevPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassPrev),
        linkClass: (0, _classnames["default"])(linkClass, linkClassPrev),
        disabledClass: disabledClass,
        inactiveClass: inactiveClass,
        inactiveLinkClass: inactiveLinkClass,
        ariaLabel: prevPageAriaLabel
      }));
      this.isFirstPageVisible(paginationInfo.has_previous_page) && pages.unshift(/*#__PURE__*/_react["default"].createElement(_Page["default"], {
        key: "first",
        control: "first",
        href: getPageUrl(1),
        pageNumber: 1,
        onClick: onChange,
        pageText: firstPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassFirst),
        linkClass: (0, _classnames["default"])(linkClass, linkClassFirst),
        disabledClass: disabledClass,
        inactiveClass: inactiveClass,
        inactiveLinkClass: inactiveLinkClass,
        ariaLabel: firstPageAriaLabel
      }));
      this.isNextPageVisible(paginationInfo.has_next_page) && pages.push(/*#__PURE__*/_react["default"].createElement(_Page["default"], {
        key: "next",
        control: "next",
        href: getPageUrl(paginationInfo.next_page),
        pageNumber: paginationInfo.next_page,
        onClick: onChange,
        pageText: nextPageText,
        isDisabled: !paginationInfo.has_next_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassNext),
        linkClass: (0, _classnames["default"])(linkClass, linkClassNext),
        disabledClass: disabledClass,
        inactiveClass: inactiveClass,
        inactiveLinkClass: inactiveLinkClass,
        ariaLabel: nextPageAriaLabel
      }));
      this.isLastPageVisible(paginationInfo.has_next_page) && pages.push(/*#__PURE__*/_react["default"].createElement(_Page["default"], {
        key: "last",
        control: "last",
        href: getPageUrl(paginationInfo.total_pages),
        pageNumber: paginationInfo.total_pages,
        onClick: onChange,
        pageText: lastPageText,
        isDisabled: paginationInfo.current_page === paginationInfo.total_pages,
        itemClass: (0, _classnames["default"])(itemClass, itemClassLast),
        linkClass: (0, _classnames["default"])(linkClass, linkClassLast),
        disabledClass: disabledClass,
        inactiveClass: inactiveClass,
        inactiveLinkClass: inactiveLinkClass,
        ariaLabel: lastPageAriaLabel
      }));
      return pages;
    }
  }, {
    key: "render",
    value: function render() {
      var pages = this.buildPages();
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: this.props.innerClass
      }, pages);
    }
  }]);
}(_react["default"].Component);
_defineProperty(Pagination, "propTypes", {
  totalItemsCount: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  activePage: _propTypes["default"].number,
  itemsCountPerPage: _propTypes["default"].number,
  pageRangeDisplayed: _propTypes["default"].number,
  pageAriaLabel: _propTypes["default"].string,
  prevPageAriaLabel: _propTypes["default"].string,
  prevPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  nextPageAriaLabel: _propTypes["default"].string,
  nextPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  lastPageAriaLabel: _propTypes["default"].string,
  lastPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  firstPageAriaLabel: _propTypes["default"].string,
  firstPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  disabledClass: _propTypes["default"].string,
  hideDisabled: _propTypes["default"].bool,
  hideNavigation: _propTypes["default"].bool,
  innerClass: _propTypes["default"].string,
  itemClass: _propTypes["default"].string,
  itemClassFirst: _propTypes["default"].string,
  itemClassPrev: _propTypes["default"].string,
  itemClassNext: _propTypes["default"].string,
  itemClassLast: _propTypes["default"].string,
  linkClass: _propTypes["default"].string,
  activeClass: _propTypes["default"].string,
  activeLinkClass: _propTypes["default"].string,
  inactiveClass: _propTypes["default"].string,
  inactiveLinkClass: _propTypes["default"].string,
  linkClassFirst: _propTypes["default"].string,
  linkClassPrev: _propTypes["default"].string,
  linkClassNext: _propTypes["default"].string,
  linkClassLast: _propTypes["default"].string,
  hideFirstLastPages: _propTypes["default"].bool,
  getPageUrl: _propTypes["default"].func,
  getPageText: _propTypes["default"].func,
  ellipsis: _propTypes["default"].bool,
  ellipsisText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
});
_defineProperty(Pagination, "defaultProps", {
  itemsCountPerPage: 10,
  pageRangeDisplayed: 5,
  activePage: 1,
  pageAriaLabel: "Go to page number :page",
  prevPageAriaLabel: "Go to previous page",
  prevPageText: "⟨",
  firstPageAriaLabel: "Go to first page",
  firstPageText: "«",
  nextPageAriaLabel: "Go to next page",
  nextPageText: "⟩",
  lastPageAriaLabel: "Go to last page",
  lastPageText: "»",
  innerClass: "pagination",
  itemClass: undefined,
  linkClass: undefined,
  activeLinkClass: undefined,
  hideFirstLastPages: false,
  getPageUrl: function getPageUrl() {
    return "#";
  },
  getPageText: function getPageText(i) {
    return i + "";
  },
  disabledClass: "disabled",
  ellipsis: false,
  ellipsisText: "…"
});