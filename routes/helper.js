import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createNewMovies(data) {
    return await client.db("guvi-node-app").collection("movies").insertMany(data);
}
export async function createOneNewMovie(data) {
    return await client.db("guvi-node-app").collection("movies").insertOne(data);
}
export async function updateMovieById(id, data) {
    return await client.db("guvi-node-app").collection("movies").updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("guvi-node-app").collection("movies").deleteOne({ _id: ObjectId(id) });
}
export async function getMovieById(id) {
    return await client.db("guvi-node-app").collection("movies").findOne({ _id: ObjectId(id) });
}
export async function getAllMovies(request) {
    return await client.db("guvi-node-app").collection("movies").find(request.query).toArray();
}
export async function createUser(data) {
      //db.users.insertOne(data);
    return await client.db("guvi-node-app").collection("users").insertOne(data);
}
export async function getUserByName(username) {
      //db.users.findOne({username: username });
    return await client.db("guvi-node-app").collection("users").findOne({ username: username });
}
