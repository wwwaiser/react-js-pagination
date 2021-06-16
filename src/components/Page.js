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
        href: PropTypes.string
    };

    static defaultProps = {
        activeClass: "active",
        disabledClass: "disabled",
        itemClass: undefined,
        linkClass: undefined,
        activeLinkCLass: undefined,
        isActive: false,
        isDisabled: false,
        href: "#"
    };

    handleClick(e) {
        const {
            isDisabled,
            pageNumber,
            key,
            onNext,
            onPrev,
            onFirst,
            onLast,
            onClick
        } = this.props;
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        onClick(pageNumber);
        if (key.indexOf('prev') > -1) {
            onPrev && onPrev(e, pageNumber)
        } else if (key.indexOf('next') > -1) {
            onNext && onNext(e, pageNumber)
        } else if (key.indexOf('first') > -1) {
            onFirst && onFirst(e, pageNumber)
        } else if (key.indexOf('last') > -1) {
            onLast && onLast(e, pageNumber)
        }
    }

    render() {
        let {
            pageText,
            pageNumber,
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

        const css = cx(itemClass, {
            [activeClass]: isActive,
            [disabledClass]: isDisabled
        });

        const linkCss = cx(linkClass, {
            [activeLinkClass]: isActive
        });

        return (
            <li className={css} onClick={this.handleClick.bind(this)}>
                <a className={linkCss} href={href} aria-label={ariaLabel}>
                    {pageText}
                </a>
            </li>
        );
    }
}
