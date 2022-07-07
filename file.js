const fs=require("fs");
const quote= "No beauty shines brighter than that of a good heart 😀"
fs.writeFile("./awsome.html",quote,(err)=>{
    console.log(err);
    console.log("completed writing");
})