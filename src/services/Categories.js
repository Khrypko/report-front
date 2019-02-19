class ApiCategories {
    _baseUrl = 'http://localhost:8080/api';

    getCategories = async () => {
        const res = await fetch(`${this._baseUrl}/category/template`);
        return res.json();
    }

    addCategory = async (category) => {
        const res = await fetch(`${this._baseUrl}/category/template`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        });
        return res.json();
    }
}

export default ApiCategories;