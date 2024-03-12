// Basic Library Import
import express from "express"
import router from "./src/route/api.js"
const app = express();
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors"
import mongoose from "mongoose";

// Cors Origin Enable
app.use(cors());

// Security Implementation
app.use(helmet());
app.use(hpp());
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'You have exceeded the 100 requests in 24 hrs limit! Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

//MongoDB Connection

let mongoURL = "mongodb+srv://motallebrahman:153153@cluster0.flkevem.mongodb.net/ToDo"
let OPTION = {autoIndex:true}

mongoose.connect(mongoURL,OPTION).then((res) => {
  console.log("MongoDB Connected")
  }).catch((err) => {
    console.log(err)
  })


// Route Implementation
app.use("/api/v1", router);
app.use("*",(req, res)=>{
    res.status(404).json({data:"Error Code 404 | Not found data"})
});

export default app;



