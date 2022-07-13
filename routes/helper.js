import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createNewMovies(data) {
    return await client.db("guvi-node-app").collection("movies").insertMany(data);
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
