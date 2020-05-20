import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models';
import signinValidation from '../validation/userSignin';

/** /Login:
   post:
      description: client can login
      responses: "200"
       description: A successful Login
*/

const signin = async (req, res) => {
  const { error } = signinValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { email, password } = req.body;
  try {
    const client = await model.Clients.findOne({
      where: {
        email,
      },
    });
    if (!client) {
      return res.status(404).send({
        message: 'Client Not found.',
      });
    }
    const passwordIsValid = bcrypt.compareSync(password, client.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        token: null,
        message: 'Invalid Password!',
      });
    }
    const token = jwt.sign({ client }, process.env.TOKEN_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    const data = {
      id: client.id,
      email: client.email,
      password: client.password,
    };
    data.token = token;
    res.cookie('token', token);
    return res.header('Authorization', token).status(200).send({
      data,
      message: 'Client is successfully logged in!',
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default signin;
