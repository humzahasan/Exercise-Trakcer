const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
    console.log('Invoked')
    try {
        await mongoose.connect(uri , {
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true
        })
        console.log("Connected to the Databse....")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}; 

connectDB();

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)


app.listen(port , () => {
    console.log(`Server running at port: ${port} `);
});
