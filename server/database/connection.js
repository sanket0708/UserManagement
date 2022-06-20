const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //mongodb connection string

        const con = process.env.MONGO_URI;
        mongoose.connect(con,
            err => {
                if (err) throw err;
                console.log('MongoDB connected');
            });

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB;


