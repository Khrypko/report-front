import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavItem extends Component {


    render() {
        const { name, path } = this.props.item;
        return (
            <li key={name}>
                <NavLink
                    activeClassName="active"
                    data-toggle="tab"
                    to={path}
                >
                    <i className="notika-icon notika-house"></i>
                    {name}
                </NavLink>
            </li>
        )
    }
}
