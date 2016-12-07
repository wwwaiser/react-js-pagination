import React, { Component, PropTypes } from "react";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        overrideElement: PropTypes.bool,
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired
    }

    render() {
        const text = this.props.pageText || this.props.pageNumber;
        const activeClass = this.props.activeClass || "active";

        if (React.isValidElement(text) && this.props.overrideElement) {
            return text;
        }

        return (
            <li className={cx({ [activeClass]: this.props.isActive })}>
                <a onClick={ (e) => {
                    e.preventDefault();
                    this.props.onClick(this.props.pageNumber);
                }} href="#">
                    { text }
                </a>
            </li>
        );
    }
}
