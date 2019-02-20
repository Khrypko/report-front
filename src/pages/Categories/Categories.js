import React, { Component } from 'react';
import ApiCategories from 'services/Categories';
import Modal from 'components/Modal';
import Alert from 'components/Alert';

class Categories extends Component {
    _apiCategories = new ApiCategories();
    state = {
        categories: null,
        modalOpen: false
    };

    componentDidMount() {
        this.getData();
    };

    postCategory = (category) => {
        this._apiCategories
            .addCategory(category)
            .then(res => this.setState(prevState => ({ categories: [...prevState.categories, res] })))
            .catch(err => console.log('error---------------------------------', err))

        this.toggleModal();
    };

    getData = () => {
        this._apiCategories
            .getCategories()
            .then(res => this.setState({ categories: res }))
            .catch(err => console.log('error---------------------------------', err))
    };

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        const { categories, modalOpen } = this.state;
        const { toggleModal, postCategory } = this;

        return (
            <div className="row">
                {modalOpen ? <Modal toggleModal={toggleModal} postCategory={postCategory} /> : null}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-primary" onClick={toggleModal}>Add Category</button>
                    <div className="normal-table-list mg-t-30">
                        <div className="basic-tb-hd">

                        </div>
                        <div className="bsc-tbl-st">
                            {categories ? <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(({ id, name, active }) => (
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

export default Categories;