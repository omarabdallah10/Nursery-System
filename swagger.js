const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Nursery System",
    description: "Description",
  },
  host: "localhost:8080",
};

const outputFile = "./swagger-output.json";
const routes = ["./Route/childRoute.js", "./Route/classRoute.js", "./Route/teacherRoute.js" ,"./Route/authenticationRoute.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
