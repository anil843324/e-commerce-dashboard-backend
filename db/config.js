const mongoose = require("mongoose")
class mongo {
    constructor() {
        this.CreateDatabaseConnection();
    }
    CreateDatabaseConnection() {
        mongoose.connect(`mongodb+srv://root:root@cluster0.sj56kau.mongodb.net/?retryWrites=true&w=majority`);

        mongoose.connection.once("open", () => {
            console.log("MongoDB Connected");
        })

        mongoose.connection.on("error", () => {
            console.log("Error Occured in Connection");
        })
    }
}

module.exports = mongo;