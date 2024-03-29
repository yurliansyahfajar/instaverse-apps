import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import StoriesRoute from "./routes/stories.js";
import UserRoute from "./routes/users.js";
import dotenv from "dotenv";

// Use Express and add to variable
const app = express();
dotenv.config();

// Use body-parser to get json from body request
app.use(bodyParser.json(
    {limit : "32mb", extended: true}
));

// Use body-parser to get body request
app.use(bodyParser.urlencoded(
    {limit: "32mb", extended: true}
));

app.use(cors());
app.options('*', cors());

// Set Routes for apps
app.use('/stories', StoriesRoute);
app.use('/user', UserRoute);

// Use Cors
app.use(cors());

//Add global variable for mongo cloud connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

//create async function to connect to DB
const connect_DB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`));
    } catch (err) {
        console.error("Connection to MongoDB failed", err.message);
    }
} 

//run the connect to database function.
connect_DB();

//run message if connection is "open" or "error" 
mongoose.connection.on("open", ()=> console.log("Connection to database is successfull"));
mongoose.connection.on("error", (err)=> console.error(err.message));