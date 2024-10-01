import express from "express";

import { create, Detail, moviedelete, movieIndex, update } from "../controllers/movie-controller.js";

const route = express.Router();

//crud operation for movies booking

//read
route.get('/',movieIndex);

//create 
route.post('/' , create);

//show
route.get('/:id' , Detail);
//update
route.put('/:id' , update);

//delete
route.delete('/:id' ,moviedelete);


export default route;