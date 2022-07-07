const fs=require("fs");

// fs.readFile("./read.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// const quote3="make everyday a little less ordinary "

// fs.appendFile(`./nice.txt`,"\n"+quote3,(err)=>{
//     console.log(err);
//     console.log("completed writing");
// })

fs.unlink("./delete.css",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("completed deleting!!!");
    }
    });