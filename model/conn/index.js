const mongoose = require("mongoose"); 

async function Conn(){
    await mongoose.connect(`mongodb+srv://M03ProjFinal:123123@cluster0.kfeqx.mongodb.net/test`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB está conectado");
    }).catch((err) => { 
        console.error(err);
    });
}

module.exports = Conn;