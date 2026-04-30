import express, { request, response } from "express";
import { PORT,mongodbURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import route from "./routes/index.js";
import cors from "cors";


const app = express();

//Middlewere for parsing request body
app.use(express.json());

//middleWare for handling CORS POLICY
//opthion1: ALLOW ALL ORIGINS WITH DEFAULT OF CORS(*)

app.use(cors());

//option2 : ALLOW CUSTOM ORIGINS
// app.use(cors({
//     origin: 'http//localhost:3000',
//     methods :['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.use("/",route);

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial')
})

 
mongoose.connect(mongodbURL).then(()=>{
    console.log("App is connected to database")
    app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`)
 })
})
.catch((Error)=>{
    console.log(Error)
})

