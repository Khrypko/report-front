import React, { Component } from 'react';
import ApiCategories from 'services/Categories';
import Modal from 'components/Modal';

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
            .then(res => this.setState(prevState => ({ categories: [...prevState.categories, res] })));

        this.toggleModal();
    };

    getData = () => {
        this._apiCategories
            .getCategories()
            .then(res => this.setState({ categories: res }));
    };

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        const { categories, modalOpen } = this.state;
        const { toggleModal, postCategory } = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={toggleModal}>Add Category</button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories ? categories.map(({ id, name, active }) => (
                            <tr className="table-active" key={id}>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{active ? 'active' : 'inactive'}</td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
                {modalOpen ? <Modal toggleModal={toggleModal} postCategory={postCategory} /> : null}
            </div>
        )
    }
}

export default Categories;