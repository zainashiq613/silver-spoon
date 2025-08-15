const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const ContactRoute = require("./Routes/ContactRoute");
const ProjectRoute = require("./Routes/ProjectRoute");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', ContactRoute);
app.use('/api', ProjectRoute);
//mong-connection
const connectDB = async () => {
 try {
 const connect = await mongoose.connect(process.env.MONGODB_URI, {
 
 });
console.log("monogDB connected successfully");
} catch (error) {
 console.log(error);
}
};
 connectDB();
const PORT = process.env.PORT || 3000;


//port connection
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});