import React, { Component } from 'react';
import './report.css';

class ReportForm extends Component {

    state = {
        reports: []
    };

    itemDragstart = (e) => {
        e.dataTransfer.setData("element", e.target);
    };
    itemDragover = (e) => {
        e.preventDefault();
        // console.log(target);
    };
    itemDrop = (e) => {
        e.preventDefault();
        this.setState({ reports: [e.dataTransfer.getData("element")] });
    }

    render() {
        return (
            <div className="row">
                <div className=" col-xl-9">
                    <div className="l-report" style={{ height: '100px' }} onDrop={this.itemDrop} onDragOver={this.itemDragover}>
                        {this.state.reports.map(report => <span key={report}> fgfgfg</span>)}
                    </div>
                </div>
                <div className="l-report col-xl-3">
                    <div className="l-report">

                        <span id="test" className="draggable" onDragStart={this.itemDragstart} draggable>test1</span>

                    </div>
                </div>
            </div>
        );
    }

}

export default ReportForm;