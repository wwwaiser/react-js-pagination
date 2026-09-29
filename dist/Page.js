"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var Page = exports["default"] = /*#__PURE__*/function (_Component) {
  function Page() {
    _classCallCheck(this, Page);
    return _callSuper(this, Page, arguments);
  }
  _inherits(Page, _Component);
  return _createClass(Page, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
        isDisabled = _this$props.isDisabled,
        pageNumber = _this$props.pageNumber,
        href = _this$props.href;
      // Let the browser open real page URLs in a new tab or window.
      var opensElsewhere = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      if (opensElsewhere && href && href !== "#" && !isDisabled) {
        return;
      }
      e.preventDefault();
      if (isDisabled) {
        return;
      }
      this.props.onClick(pageNumber);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        pageText = _this$props2.pageText,
        activeClass = _this$props2.activeClass,
        itemClass = _this$props2.itemClass,
        linkClass = _this$props2.linkClass,
        activeLinkClass = _this$props2.activeLinkClass,
        disabledClass = _this$props2.disabledClass,
        isActive = _this$props2.isActive,
        isDisabled = _this$props2.isDisabled,
        href = _this$props2.href,
        ariaLabel = _this$props2.ariaLabel;
      var css = (0, _classnames["default"])(itemClass, isActive && activeClass, isDisabled && disabledClass);
      var linkCss = (0, _classnames["default"])(linkClass, isActive && activeLinkClass);
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: css,
        onClick: this.handleClick.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: linkCss,
        href: href,
        "aria-label": ariaLabel,
        "aria-current": isActive ? "page" : undefined,
        "aria-disabled": isDisabled ? "true" : undefined
      }, pageText));
    }
  }]);
}(_react.Component);
_defineProperty(Page, "propTypes", {
  pageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  pageNumber: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  isActive: _propTypes["default"].bool.isRequired,
  isDisabled: _propTypes["default"].bool,
  activeClass: _propTypes["default"].string,
  activeLinkClass: _propTypes["default"].string,
  itemClass: _propTypes["default"].string,
  linkClass: _propTypes["default"].string,
  disabledClass: _propTypes["default"].string,
  href: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string
});
_defineProperty(Page, "defaultProps", {
  activeClass: "active",
  disabledClass: "disabled",
  itemClass: undefined,
  linkClass: undefined,
  activeLinkClass: undefined,
  isActive: false,
  isDisabled: false,
  href: "#"
});