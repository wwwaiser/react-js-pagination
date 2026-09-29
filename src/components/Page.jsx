import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
        isDisabled: PropTypes.bool,
        activeClass: PropTypes.string,
        activeLinkClass: PropTypes.string,
        itemClass: PropTypes.string,
        linkClass: PropTypes.string,
        disabledClass: PropTypes.string,
        href: PropTypes.string,
        ariaLabel: PropTypes.string
    };

    static defaultProps = {
        activeClass: "active",
        disabledClass: "disabled",
        itemClass: undefined,
        linkClass: undefined,
        activeLinkClass: undefined,
        isActive: false,
        isDisabled: false,
        href: "#"
    };

    handleClick(e) {
        const { isDisabled, pageNumber, href } = this.props;
        // Let the browser open real page URLs in a new tab or window.
        const opensElsewhere = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
        if (opensElsewhere && href && href !== "#" && !isDisabled) {
            return;
        }
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        this.props.onClick(pageNumber);
    }

    render() {
        const {
            pageText,
            activeClass,
            itemClass,
            linkClass,
            activeLinkClass,
            disabledClass,
            isActive,
            isDisabled,
            href,
            ariaLabel
        } = this.props;

        const css = cx(itemClass, isActive && activeClass, isDisabled && disabledClass);
        const linkCss = cx(linkClass, isActive && activeLinkClass);

        return (
            <li className={css} onClick={this.handleClick.bind(this)}>
                <a
                    className={linkCss}
                    href={href}
                    aria-label={ariaLabel}
                    aria-current={isActive ? "page" : undefined}
                    aria-disabled={isDisabled ? "true" : undefined}
                >
                    {pageText}
                </a>
            </li>
        );
    }
}
