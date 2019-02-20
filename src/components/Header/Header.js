import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavItem from 'components/NavItem';
import routes from 'routes';

class Header extends Component {

    renderLinks = (items) => {
        return items.map((item) => <NavItem key={item.name} item={item} />)
    }
    componentDidMount() {
        console.log(this.context.router);
    }

    render() {
        return (
            <div className="main-menu-area mg-tb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                                {this.renderLinks(routes)}
                            </ul>
                            <div className="tab-content custom-menu-content">
                                {/* gonna be used for sub categories */}
                                {/*<div id="mailbox" className="tab-pane notika-tab-menu-bg animated flipInX"> // className='active'
                                    <ul className="notika-main-menu-dropdown">
                                        <li><a href="inbox.html">Inbox</a>
                                        </li>
                                        <li><a href="view-email.html">View Email</a>
                                        </li>
                                        <li><a href="compose-email.html">Compose Email</a>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;