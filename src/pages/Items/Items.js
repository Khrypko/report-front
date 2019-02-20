import React, { Component } from 'react';

class Items extends Component {

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="normal-table-list mg-t-30">
                    <div className="bsc-tbl-st">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Alexandra</td>
                                    <td>Christopher</td>
                                    <td>@makinton</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Madeleine</td>
                                    <td>Hollaway</td>
                                    <td>@hollway</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sebastian</td>
                                    <td>Johnston</td>
                                    <td>@sebastian</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mitchell</td>
                                    <td>Christin</td>
                                    <td>@mitchell4u</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;