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

    handleClick(e) {
        const { isDisabled, pageNumber } = this.props;
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        this.props.onClick(pageNumber);
    }

    render() {
        let {
          pageText,
          pageNumber,
          activeClass,
          disabledClass,
          isActive,
          isDisabled,
        } = this.props;

        const css = cx({
          [activeClass]: isActive,
          [disabledClass]: isDisabled
        });

        return (
            <li className={css} onClick={::this.handleClick}>
                <a href="#">
                    { pageText }
                </a>
            </li>
        );
    }
}
