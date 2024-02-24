const {body, query, param} = require('express-validator');

exports.insertClassValidation = [
    body('_id').isInt({min:1}).withMessage('ID must be a number'),
    body('name').isString().isLength({min: 3, max: 20}).withMessage('Name must be a string and between 3 to 20 characters')
        .isAlpha().withMessage('Name must be alphabets only'),
    body('teacher').isNumeric().withMessage('Teacher must be a number'),
    body('students').isArray().withMessage('Students must be an array of numbers'),
    body('image').isString().isLength({min: 4, max: 100}).withMessage('insert a valid image name with extension')
];

exports.updateClassValidation = [
    body("_id").isNumeric().withMessage('ID must be a number'),
    body('name').isString().isLength({min: 3, max: 20}).withMessage('Name must be a string and between 3 to 20 characters')
        .isAlpha().withMessage('Name must be alphabets only'),
    body('teacher').isNumeric().withMessage('Teacher must be a number'),
    body('students').isArray().withMessage('Students must be an array of numbers'),
    body('image').isString().isLength({min: 4, max: 100}).withMessage('insert a valid image name with extension')
];

exports.deleteClassValidation = [
    param('_id').isInt({min:1}).withMessage('ID must be a number')
];