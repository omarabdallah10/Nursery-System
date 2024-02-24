const jwr = require("jsonwebtoken");

const api_key = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
  try {
    let token = req.get("authorization").split(" ")[1];
    let decodedToken = jwt.verify(token, Key);
    req.token = decodedToken;
    next();
  } catch (error) {
    error.message = "Not Authenticated";
    error.statusCode = 403;
    next(error);
  }
};

module.exports.isTeacher = (req, res, next) => {
  if (req.token.role == "Teacher") {
    next();
  } else {
    let error = new Error("Not Authorized");
    error.statusCode = 403;
    next(error);
  }
};

//only one admin with fixed username and password
module.exports.isAdmin = (req, res, next) => {
    if (req.token.role == "Admin") {
        next();
    } else {
        let error = new Error("Not Authorized");
        error.statusCode = 403;
        next(error);
    }
};
