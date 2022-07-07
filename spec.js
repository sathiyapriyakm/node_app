const os=require("os");
console.log("Free memory",os.freemem()/1024/1024/1024);// free RAM converted to GB
console.log("Total memory",os.totalmem()/1024/1024/1024);// total RAM converted to GB
console.log("Version",os.version()); //os version
console.log("Cpus",os.cpus());  // all cpu details