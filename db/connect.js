const mongoose = require('mongoose');
// const connectionString = "mongodb+srv://saadeh:abcd@cluster0.fb3yau9.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
    
}
module.exports = connectDB