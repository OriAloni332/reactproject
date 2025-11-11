const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    releeseyear: { type: Number, required: true },
}); 

module.exports = mongoose.model("Movie", movieSchema);