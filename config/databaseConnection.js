const mongoose = require("mongoose")

const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION, {
        dbName: "eCommerce2"
    }).then((data) => {
        console.log(`server is connected to ${data.connection.host}`);
    })
}

module.exports = databaseConnection