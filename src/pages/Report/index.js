import React, { Component } from 'react';
import Tree from 'components/Tree';
import Search from 'components/Search';

export default class Report extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-t-30">
                <Tree />
                <Search />
            </div>
        )
    }
}