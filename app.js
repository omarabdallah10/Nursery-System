/*---------------------------------Express Server---------------------------------*/
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
require("dotenv").config();
const authenticationMW = require("./Middlewares/authenticationMW");
const multerMW = require("./Middlewares//multer");
const teacherRouter = require("./Route/teacherRoute");
const childRouter = require("./Route/childRoute");
const classRouter = require("./Route/classRoute");

//run the express server default function
const server = express();

const port = process.env.PORT || 8080; //to de dynamic during future hosting
const databaseURL = process.env.DATABASE_URL;

//connect to the database
mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Connected to the database...");

    //make the server start listening
    server.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database: " + error);
  });

server.use(cors());
server.use(morgan("dev"));
/*---------------------------------Middlewares---------------------------------*/

// //1- Middleware for starting the server
// server.use((request, response, next) => {
//   console.log("First Use Function", request.url, request.method);
//   next();
// });

/*---------------------------------Testing---------------------------------*/

server.use(multerMW.single("image")); //middleware for parsing the body of the request
server.use(express.json()); //middleware for parsing the body of the request
server.use(express.urlencoded({ extended: true })); //middleware for parsing the body of the request

//swagger
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//- Routers
server.use(authenticationMW);
server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter);

//3- Middleware for Not Found Case
server.use((request, response, next) => {
  response.status(404).json({ message: "Not Found" }); //server response -- No need for next()
});

//4- Middleware for Error Handling
server.use((error, request, response, next) => {
  // console.log("Error Handling Middleware");
  let status = error.status || 500;
  response.status(status).json({ message: "Internal Server Error: " + error });
});
