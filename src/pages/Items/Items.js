import React, { Component } from 'react';
import ApiItems from 'services/Items';
import Modal from 'components/Modal';
import Alert from 'components/Alert';

class Items extends Component {

    _apiItems = new ApiItems();
    state = {
        items: null,
        modalOpen: false
    };

    componentDidMount() {
        this.getData();
    };

    postItem = (item) => {
        this._apiItems
            .addItem(item)
            .then(res => this.setState(prevState => ({ items: [...prevState.items, res] })))
            .catch(err => console.log('error---------------------------------', err))

        this.toggleModal();
    };

    getData = () => {
        this._apiItems
            .getItems()
            .then(res => this.setState({ items: res }))
            .catch(err => console.log('error---------------------------------', err))
    };

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        const { items, modalOpen } = this.state;
        const { toggleModal, postItem } = this;

        return (
            <div className="row">
                {modalOpen ? <Modal toggleModal={toggleModal} postCategory={postItem} title="item"/> : null}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-primary" onClick={toggleModal}>Add Item</button>
                    <div className="normal-table-list mg-t-30">
                        <div className="basic-tb-hd">

                        </div>
                        <div className="bsc-tbl-st">
                            {items ? <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {items.map(({ id, name, active }) => (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{active ? 'active' : 'inactive'}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table> : <Alert text={'There are no categories yet.'} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;