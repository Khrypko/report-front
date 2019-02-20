import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class NavItem extends Component {

    render() {
        const { item, location } = this.props;
        const { name, path } = item;
        return (
            <li className={item.path === location.pathname ? 'active' : null}>
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

NavLink.propTypes = {
    item: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
};

export default withRouter(NavItem);


