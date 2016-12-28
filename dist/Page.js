"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
    _inherits(Page, _Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: "handleClick",
        value: function handleClick(e) {
            var _props = this.props,
                isDisabled = _props.isDisabled,
                pageNumber = _props.pageNumber;

            e.preventDefault();
            if (isDisabled) {
                return;
            }
            this.props.onClick(pageNumber);
        }
    }, {
        key: "render",
        value: function render() {
            var _cx;

            var _props2 = this.props,
                pageText = _props2.pageText,
                pageNumber = _props2.pageNumber,
                activeClass = _props2.activeClass,
                disabledClass = _props2.disabledClass,
                isActive = _props2.isActive,
                isDisabled = _props2.isDisabled;


            var css = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, activeClass, isActive), _defineProperty(_cx, disabledClass, isDisabled), _cx));

            return _react2.default.createElement(
                "li",
                { className: css, onClick: this.handleClick.bind(this) },
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    pageText
                )
            );
        }
    }]);

    return Page;
}(_react.Component);

Page.propTypes = {
    pageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    pageNumber: _react.PropTypes.number.isRequired,
    onClick: _react.PropTypes.func.isRequired,
    isActive: _react.PropTypes.bool.isRequired,
    isDisabled: _react.PropTypes.bool,
    activeClass: _react.PropTypes.string,
    disabledClass: _react.PropTypes.string
};
Page.defaultProps = {
    activeClass: "active",
    disabledClass: "disabled",
    isActive: false,
    isDisabled: false
};
var _default = Page;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Page, "Page", "src/components/Page.js");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/Page.js");
}();

;