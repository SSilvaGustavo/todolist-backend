const mongoose = require("mongoose");

function Conn(url, user, pass, banco){
    mongoose.connect(`${url}/${banco}`,{
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB Connected")
    }).catch((err => {
        console.error(err);
    }))
}

module.exports = Conn;