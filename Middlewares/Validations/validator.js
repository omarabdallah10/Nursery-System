const {validationResult} = require('express-validator');

module.exports = (request, response, next) => {
    let result = validationResult(request);
    if(result.errors.length >= 1) 
    {
        let erroe_msg = result.errors.reduce((current, errorObj) => current + errorObj.msg + "\n" , "");
        let error = new Error(erroe_msg);
        error.status = 422;
        next(error);
    }
    else
    {
        next();
    }
}