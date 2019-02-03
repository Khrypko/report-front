/**
 * Created by Maks on 28.01.2019.
 */
import React, {Component} from 'react';
import './modal.css';

class Modal extends Component {
    state = {
        name: ''
    };

    getName = (e) => this.setState({name: e.target.value});

    render() {
        const {toggleModal, postCategory} = this.props;
        const {name} = this.state;
        const categoryData = {name};
        return (
            <div className="modal show" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onChange={this.getName} value={this.state.name} type="email" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => postCategory(categoryData)}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;