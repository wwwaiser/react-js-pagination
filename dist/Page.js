"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Page = (function (_Component) {
    _inherits(Page, _Component);

    function Page() {
        _classCallCheck(this, Page);

        _get(Object.getPrototypeOf(Page.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            var className = (0, _classnames2["default"])({
                "active": this.props.isActive
            });

            var text = this.props.pageText || this.props.pageNumber;
            if (_react2["default"].isValidElement(text)) return text;

            return _react2["default"].createElement(
                "li",
                { className: className },
                _react2["default"].createElement(
                    "a",
                    { onClick: this.props.onClick.bind(this, this.props.pageNumber), href: "#" },
                    text
                )
            );
        }
    }], [{
        key: "propTypes",
        value: {
            pageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            pageNumber: _react.PropTypes.number.isRequired,
            onClick: _react.PropTypes.func.isRequired,
            isActive: _react.PropTypes.bool.isRequired
        },
        enumerable: true
    }]);

    return Page;
})(_react.Component);

exports["default"] = Page;
module.exports = exports["default"];