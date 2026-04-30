import express from "express"
import { createAnewBook,getAllBooks,getOneBook,updaABook,deleteABook} from "../controller/bookController.js";

const route =express.Router();

route.post("/book",createAnewBook);
route.get("/books",getAllBooks);
route.get("/book/:id",getOneBook);
route.put("/books/:id",updaABook);
route.delete("/books/:id",deleteABook)

export default route;
