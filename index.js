
const dbConnect = require("./db/dbConnect");
const createServer = require("./server");

createServer();
// execute database connection 
dbConnect();