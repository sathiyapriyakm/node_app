import express from "express";
import {createUser,getUserByName} from "./helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router =express.Router();

async function generateHashedPassword(password){
  const NO_OF_ROUNDS = 10 ; //Number of rounds of salting
  const salt=await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword=await bcrypt.hash(password,salt);
  return hashedPassword;
}
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/signup',async function (request, response) {
    const {username,password}=request.body;
    const userFromDB = await getUserByName(username);

    if(userFromDB){
      response.status(400).send({message:"Username already exists"});
    }
    else if(password.length<8){
      response.status(400).send({message:"password must be atleast 8 characters"});
    }
    else{
    const hashedPassword=await generateHashedPassword(password)
    //db.users.insertOne(data);
    const result=await createUser({
      username:username,
      password:hashedPassword,
    });
      response.send(result);
    } })

    router.post('/login',async function (request, response) {
      const {username,password}=request.body;
      const userFromDB = await getUserByName(username);
  
      if(!userFromDB){
        response.status(400).send({message:"Invalid Credential"});
      }
      else{ 
        // check password
        const storedPassword = userFromDB.password;
        const isPasswordMatch=await bcrypt.compare(password,storedPassword);
        if(isPasswordMatch){
          const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY);
          console.log(token);
          response.send({message:"successful login",token:token});
        }
        else{
          response.status(400).send({message:"Invalid Credential"});
        }
      }
  })
  export const usersRouter=router;
 