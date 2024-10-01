import {Schema , model}  from "mongoose";

//write schema
const schema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true, 
    },
});

//create model
const movieschema = model("movie",schema);

export default movieschema;