import React, {Component, PropTypes} from "react";
import classNames from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.string,
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired
    }

    render() {
        const className = classNames({
            "active": this.props.isActive
        });
        
        return (
            <li className={className}>
                <a onClick={this.props.onClick.bind(this, this.props.pageNumber)} href="#">
                    {this.props.pageText || this.props.pageNumber}
                </a>
            </li>
        );
    }
}

