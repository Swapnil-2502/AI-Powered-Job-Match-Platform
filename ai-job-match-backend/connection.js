const mongoose = require('mongoose')

async function ConnectMongoDB(url) {
    return mongoose.connect(url)
    .then(() =>  console.log("MongoDB connected"))
    .catch((err) => console.log("Error: ",err));
}

module.exports = {
    ConnectMongoDB
};