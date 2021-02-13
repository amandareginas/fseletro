const mongoose = require("mongoose");


function conn() {
    mongoose.connect("mongodb://localhost/fscoment", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conexão bem sucedida!")
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports=conn();
