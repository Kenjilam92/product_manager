const port = 8000;
const express = require("express")
const cors = require("cors")
const app =express();

//connect data base
require("./server/config/mongodb.config")
//CRUD function && routes
app.use( express.json());
app.use( express.urlencoded({extended:true}));
app.use( cors())

require("./server/routes/product.routes")(app)
app.listen(port,()=> console.log(`running backend at port${port}`))


