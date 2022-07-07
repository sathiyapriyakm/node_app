const fs=require("fs");
const [ , ,num]=process.argv;
const quote2= "Live more, worry Less 😀"
for(let i=1;i<=num;i++){
fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
    console.log(err);
    console.log("completed writing");
})}