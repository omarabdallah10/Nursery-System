const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Teacher = require('../Model/teacherSchema');

const api_key = process.env.SECRET_KEY;

exports.login = (request, response, next) => {
    Teacher.findOne({ name: request.body.name, password: request.body.password })
        .then(data=>{
            if(!data) {
                const error = new Error('Invalid username or password');
                error.statusCode = 401;
                throw error;
            }
            else{   
                const token = jwt.sign({name: data.name, id: data._id}, api_key, {expiresIn: '1h'});
                response.status(200).json({message: 'Login successfully', token});
            }
        })
        .catch(error=>next(error));
}

exports.hashedLogin = (request, response, next) => {
    let password = request.body.password;
    Teacher.findOne({ name: request.body.name })
        .then(teacher=>{
            if(!teacher) {
                const error = new Error('Invalid username');
                error.statusCode = 401;
                throw error;
            }
            else{   
                bcrypt.compare(request.body.password)
                    .then(auth => {
                        if(auth) {
                            const token = jwt.sign({name: data.name, id: data._id}, api_key, {expiresIn: '1h'});
                            response.status(200).json({message: 'Login successfully', token});
                        }
                        else {
                            const error = new Error('Invalid password');
                            error.statusCode = 401;
                            throw error;
                        }
                    })
                    .catch(error=>next(error));
            }
        })
        .catch(error=>next(error));
}
