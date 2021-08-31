const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    ingredients: {type: Array, required: true},
    preparation: {type: Array, required: true}
});


module.exports=mongoose.model("Meal",mealSchema);