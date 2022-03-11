const yup = require('yup');
const contactValidator = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required()
    // email: yup.string().string().email('must be valid email').required(),

});

module.exports = {
    contactValidator
};