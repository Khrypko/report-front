const schema = {
    "type": "object",
    "properties": {
        "categories": {
            "type": "array",
            "minItems": 3,
            "maxItems": 50,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "faker": "commerce.department"
                    },
                    "active": {
                        "type": "boolean"
                    }
                },
                "required": ["id", "name", "active"]
            }
        },
        "items": {
            "type": "array",
            "minItems": 3,
            "maxItems": 50,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "faker": "commerce.product"
                    }
                },
                "required": ["id", "name"]
            }
        }
    },
    "required": ["categories", "items"]
}


module.exports = schema;