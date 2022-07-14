import express from "express";
import { auth } from "../middleware/auth.js";
import { getAllMovies, getMovieById, deleteMovieById, updateMovieById, createNewMovies } from "./helper.js";
const router =express.Router();

router.get('/',/* auth ,*/ async function (request, response) {
    //db.movies.find({});
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    const movies= await getAllMovies(request);
    response.send(movies);
    })
  
  router.get('/:id', async function (request, response) {
  const {id} = request.params;
  console.log("id is : ", id);
        // const movie=movies.find((mv)=>mv.id===id);
  const movie= await getMovieById(id);
  console.log(movie);
  movie?response.send(movie):response.status(404).send({msg:"movie not found"});
    })
  
    router.delete('/:id', async function (request, response) {
      const {id} = request.params;
            // const movie=movies.find((mv)=>mv.id===id);
      const result= await deleteMovieById(id);
      result.deletedCount>0?response.send({msg:"movie deleted successfully"}):response.status(404).send({msg:"movie not found"});
        })
  
  router.put('/:id', async function (request, response) {
    const {id} = request.params;
    const data=request.body;
          // const movie=movies.find((mv)=>mv.id===id);
    const result= await updateMovieById(id, data);
    response.send(result);
      })
  
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/',async function (request, response) {
    const data=request.body;
    console.log(data);
    //db.movies.insertMany(data);
    const result=await createNewMovies(data);
    response.send(result);
    })

    export const moviesRouter=router;
  

