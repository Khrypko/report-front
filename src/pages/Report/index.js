import React, { Component } from 'react';
import Tree from '../../components/Tree';
import Search from '../../components/Search';

export default class Report extends Component {
    render() {
        return (
            <div className="row">
                <div className=" col-xl-9">
                    <div className="l-report">
                        <Tree />
                    </div>
                </div>
                <div className="l-report col-xl-3">
                    <div className="l-report">
                        <Search />
                    </div>
                </div>
            </div>
        )
    }
}