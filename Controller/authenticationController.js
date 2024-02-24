const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Teacher = require('../Model/teacherSchema');

const api_key = process.env.SECRET_KEY;

exports.login = (req, res) => {
    let token = jwt.sign({ name: req.body.name, role: "Teacher" }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token: token });
}
