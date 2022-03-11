<<<<<<< HEAD
const yup = require('yup');
const contactValidator = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required()
    // email: yup.string().string().email('must be valid email').required(),

});

module.exports = {
    contactValidator
=======
const yup = require('yup');
const contactValidator = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required()
    // email: yup.string().string().email('must be valid email').required(),

});

module.exports = {
    contactValidator
>>>>>>> 4042c3454bc69c012e2f87491e36eb95ed05045f
};