import { Router } from "express";
import { allUser, userByname, userById } from "../controllers/users/read.js";
// import userReadController, { allUser } from "../controllers/users/read.js";
import create from "../controllers/users/create.js";

const routerUsers = Router();

// routerUsers.get("/allUsers", userReadController);
routerUsers.get('/allUsers', allUser);
routerUsers.get('/name/:nameParams', userByname);
routerUsers.get('/id/:idParams', userById);
routerUsers.post('/userCreate', create);




export default routerUsers;