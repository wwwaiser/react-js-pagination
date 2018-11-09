import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Ellipsis extends Component {
    static propTypes = {
        ellipsisText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        disabledClass: PropTypes.string,
        itemClass: PropTypes.string,
        linkClass: PropTypes.string
    };

    static defaultProps = {
        ellipsisText: "…",
        disabledClass: "disabled",
        itemClass: undefined,
        linkClass: undefined
    };

    render() {
        let {
            ellipsisText,
            itemClass,
            disabledClass,
            linkClass
        } = this.props;

        const css = cx(itemClass, disabledClass);
        const linkCss = cx(linkClass);

        return (
            <li className={css}>
                <a className={linkCss} href="#" onClick={(event) => event.preventDefault()}>
                    {ellipsisText}
                </a>
            </li>
        );
    }
}
