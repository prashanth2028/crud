import express from "express";

import { create, moviedelete, movieIndex, update } from "../controllers/movie-controller";

const route = express.Router();

//crud operation for movies booking

//read
route.get('/',movieIndex);

//create 
route.post('/' , create);

//update
route.put('/:id' , update);

//delete
route.delete('/:id' ,moviedelete);


export default route;