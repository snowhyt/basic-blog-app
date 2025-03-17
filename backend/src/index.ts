import express from "express";
import db from "./utils/database.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js";

import { ErrorRequestHandler } from "express";



const app = express();







//other things
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//addressing cors issue
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "GET, POST, PUT, DELETE");
    next (); 
})



//routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

//CRUD test_routes
app.get('/users', userRoutes);


//error handling
app.use((err: ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.error(err);
	res.status(500).send('Something broke!');
});



//check db connection
try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    await db.sync();
    console.log("Database has been synced successfully.");


    //app will start
    app.listen(6000, () => {
        console.log("Server is running on port 6000");
    });
} catch (error) {
    console.log(error, "Unable to connect to the database.");
    process.exit(1);
}






