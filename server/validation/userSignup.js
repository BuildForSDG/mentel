import Joi from 'joi';

const signupValidation = (data) => {
  const schema = {
    firstName: Joi.string().min(4).max(150).required(),
    lastName: Joi.string().min(4).max(150).required(),
    email: Joi.string().email().min(3).max(150),
    password: Joi.string()
      .trim()
      .max(100)
      .required()
      .regex(/^[0-9]{7,15}$/),
    phoneNumber: Joi.string().min(11).required(),
    address: Joi.string().trim().max(350),
    isAdmin: Joi.number().integer().max(1),
  };
  return Joi.validate(data, schema);
};

export default signupValidation;
