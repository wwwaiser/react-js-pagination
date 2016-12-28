"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _paginator = require("paginator");

var _paginator2 = _interopRequireDefault(_paginator);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: "buildPages",
        value: function buildPages() {
            var pages = [];
            var _props = this.props,
                itemsCountPerPage = _props.itemsCountPerPage,
                pageRangeDisplayed = _props.pageRangeDisplayed,
                activePage = _props.activePage,
                prevPageText = _props.prevPageText,
                nextPageText = _props.nextPageText,
                firstPageText = _props.firstPageText,
                lastPageText = _props.lastPageText,
                totalItemsCount = _props.totalItemsCount,
                onChange = _props.onChange,
                activeClass = _props.activeClass,
                hideDisabled = _props.hideDisabled;


            var paginationInfo = new _paginator2.default(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

            if (paginationInfo.first_page !== paginationInfo.last_page) {
                for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                    pages.push(_react2.default.createElement(_Page2.default, {
                        isActive: i === activePage,
                        key: i,
                        pageNumber: i,
                        pageText: i + "",
                        onClick: onChange,
                        activeClass: activeClass
                    }));
                }
            }

            hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(_Page2.default, {
                key: "prev" + paginationInfo.previous_page,
                pageNumber: paginationInfo.previous_page,
                onClick: onChange,
                pageText: prevPageText,
                isDisabled: !paginationInfo.has_previous_page
            }));

            hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(_Page2.default, {
                key: "first",
                pageNumber: 1,
                onClick: onChange,
                pageText: firstPageText,
                isDisabled: paginationInfo.current_page === paginationInfo.first_page
            }));

            hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(_Page2.default, {
                key: "next" + paginationInfo.next_page,
                pageNumber: paginationInfo.next_page,
                onClick: onChange,
                pageText: nextPageText,
                isDisabled: !paginationInfo.has_next_page
            }));

            hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(_Page2.default, {
                key: "last",
                pageNumber: paginationInfo.total_pages,
                onClick: onChange,
                pageText: lastPageText,
                isDisabled: paginationInfo.current_page === paginationInfo.total_pages
            }));

            return pages;
        }
    }, {
        key: "render",
        value: function render() {
            var pages = this.buildPages();
            return _react2.default.createElement(
                "ul",
                { className: this.props.innerClass },
                pages
            );
        }
    }]);

    return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
    totalItemsCount: _react.PropTypes.number.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    activePage: _react.PropTypes.number,
    itemsCountPerPage: _react.PropTypes.number,
    pageRangeDisplayed: _react.PropTypes.number,
    prevPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    nextPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    lastPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    firstPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    innerClass: _react.PropTypes.string,
    activeClass: _react.PropTypes.string,
    hideDisabled: _react.PropTypes.bool
};
Pagination.defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: "⟨",
    firstPageText: "«",
    nextPageText: "⟩",
    lastPageText: "»",
    innerClass: "pagination"
};
var _default = Pagination;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Pagination, "Pagination", "src/components/Pagination.js");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/Pagination.js");
}();

;