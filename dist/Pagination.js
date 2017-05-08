"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

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
                itemClass = _props.itemClass,
                linkClass = _props.linkClass,
                disabledClass = _props.disabledClass,
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
                        itemClass: itemClass,
                        linkClass: linkClass,
                        activeClass: activeClass
                    }));
                }
            }

            hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(_Page2.default, {
                key: "prev" + paginationInfo.previous_page,
                pageNumber: paginationInfo.previous_page,
                onClick: onChange,
                pageText: prevPageText,
                isDisabled: !paginationInfo.has_previous_page,
                itemClass: itemClass,
                linkClass: linkClass,
                disabledClass: disabledClass
            }));

            hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(_Page2.default, {
                key: "first",
                pageNumber: 1,
                onClick: onChange,
                pageText: firstPageText,
                isDisabled: paginationInfo.current_page === paginationInfo.first_page,
                itemClass: itemClass,
                linkClass: linkClass,
                disabledClass: disabledClass
            }));

            hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(_Page2.default, {
                key: "next" + paginationInfo.next_page,
                pageNumber: paginationInfo.next_page,
                onClick: onChange,
                pageText: nextPageText,
                isDisabled: !paginationInfo.has_next_page,
                itemClass: itemClass,
                linkClass: linkClass,
                disabledClass: disabledClass
            }));

            hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(_Page2.default, {
                key: "last",
                pageNumber: paginationInfo.total_pages,
                onClick: onChange,
                pageText: lastPageText,
                isDisabled: paginationInfo.current_page === paginationInfo.total_pages,
                itemClass: itemClass,
                linkClass: linkClass,
                disabledClass: disabledClass
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
    totalItemsCount: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    activePage: _propTypes2.default.number,
    itemsCountPerPage: _propTypes2.default.number,
    pageRangeDisplayed: _propTypes2.default.number,
    prevPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    nextPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    lastPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    firstPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    innerClass: _propTypes2.default.string,
    itemClass: _propTypes2.default.string,
    linkClass: _propTypes2.default.string,
    activeClass: _propTypes2.default.string,
    disabledClass: _propTypes2.default.string,
    hideDisabled: _propTypes2.default.bool
};
Pagination.defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: "⟨",
    firstPageText: "«",
    nextPageText: "⟩",
    lastPageText: "»",
    innerClass: "pagination",
    itemClass: undefined,
    linkClass: undefined
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