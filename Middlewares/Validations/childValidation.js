const {body, query, param} = require('express-validator');

exports.insertChildValidation = [
    body('_id').isInt({min:1}).withMessage('ID must be a number'),
    body('name').isString().isLength({min: 3, max: 20}).withMessage('Name must be a string and between 3 to 20 characters')
        .isAlpha().withMessage('Name must be alphabets only'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('level').isString().isIn(['PreKG', 'KG1', 'KG2']).withMessage('Level must be PreKG, KG1 or KG2'),
    body('image').isString().isLength({min: 4, max: 100}).withMessage('insert a valid image name with extension')
];

exports.updateChildValidation = [
    body("_id").isNumeric().withMessage('ID must be a number'),
    body('name').isString().isLength({min: 3, max: 20}).withMessage('Name must be a string and between 3 to 20 characters')
        .isAlpha().withMessage('Name must be alphabets only'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('class').isNumeric().withMessage('Class must be a number'),
    body('level').isString().isIn(['PreKG', 'KG1', 'KG2']).withMessage('Level must be PreKG, KG1 or KG2'),
    body('image').isString().isLength({min: 4, max: 100}).withMessage('insert a valid image name with extension')
];

exports.deleteChildValidation = [
    param('_id').isInt({min:1}).withMessage('ID must be a number')
];

