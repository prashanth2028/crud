import express from "express";

const route = express.Router();

//crud operation for movies booking

//read
route.get('/',(req,res) => {
    res.send("get all movies list");
});

//create 
route.post('/' , (req,res) => {
    res.send("create a movie");
});

//update
route.put('/:id' , () => {
    res.send("update a movie");
});

//delete
route.delete('/:id' , () => {
    res.send("delete movie");
});


export default route;