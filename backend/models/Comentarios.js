const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema ({
    nome: {
        type: String
    },
    produto: {
        type: String
    },
    descricao: {
        type: String
    }
})

const modelo=model("Comentarios", ComentarioSchema)

module.exports=modelo;