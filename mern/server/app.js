//module
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//db
mongoose.connect("mongodb+srv://khanhnguyen2552002:1108011408@cluster0.csyi8fb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB error", err));

//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

//routes
const testRoutes = require("./routes/test");
app.use("/", testRoutes); 

//port
const port = 8080;

//listener
const server = app.listen(port, () => {
    console.log(`Server ${port}`);
});