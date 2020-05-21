const mongoose = require("mongoose")

mongoose.connect ('mongodb://localhost/product_manager',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log('database connected'))
    .catch(err=>console.log('failed to connect database',err));