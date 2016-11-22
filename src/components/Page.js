import React, { Component, PropTypes } from "react";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
        isDisabled: PropTypes.bool,
        activeClass: PropTypes.string,
        disabledClass: PropTypes.string
    }

    static defaultProps = {
        activeClass: "active",
        disabledClass: "disabled",
        isActive: false,
        isDisabled: false
    }

    render() {
        const {
          pageText,
          pageNumber,
          activeClass,
          disabledClass,
          isActive,
          isDisabled
        } = this.props;

        const text = pageText || pageNumber;
        const css = cx({
          [activeClass]: isActive,
          [disabledClass]: isDisabled
        });

        if (React.isValidElement(text)) {
            return text;
        }

        return (
            <li className={css}>
                <a onClick={ (e) => {
                    e.preventDefault();
                    this.props.onClick(pageNumber);
                }} href="#">
                    { text }
                </a>
            </li>
        );
    }
}
