class ApiItems {
    _baseUrl = 'http://localhost:8080/api';

    getItems = async () => {
        const res = await fetch(`${this._baseUrl}/item/template`);
        return res.json();
    }

    addItem = async (item) => {
        const res = await fetch(`${this._baseUrl}/item/template`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return res.json();
    }
}

export default ApiItems;