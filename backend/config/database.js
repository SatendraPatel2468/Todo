const mongoose=require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/todo", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log('Database is connected')
    } catch (error) {
        console.log("Database is not connected")
        process.exit(1)
    }

}

module.exports = connectDB
