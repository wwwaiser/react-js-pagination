import React, {Component, PropTypes} from "react";
import classNames from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired
    }

    render() {
        const className = classNames({
            "active": this.props.isActive
        });

        const text = this.props.pageText || this.props.pageNumber;
        if (React.isValidElement(text)) return text;

        return (
            <li className={className}>
                <a onClick={this.props.onClick.bind(this, this.props.pageNumber)} href="#">
                    { text }
                </a>
            </li>
        );
    }
}
