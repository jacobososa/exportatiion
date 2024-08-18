const {model, Schema} = require('mongoose');

const exportationSchema =  new Schema({
    nameProduct: {
        type: String, 
        required: [true, 'The product name is required'],
        minlength: [3, 'Min 3 characters']
    },
    price: {
        type: Number,
        required: [true, 'The price is required'],
        min: [0, 'The price must be a positive number']
    },
    weight: {
        type: Number,
        required: [true, 'The weight is required'],
    }
})

module.exports = model("Exportation", exportationSchema, "exportation") 