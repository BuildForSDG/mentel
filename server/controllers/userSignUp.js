import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const models = require('../models');

/** /register:
   post:
      description: client can register
      responses: "200"
       description: A successful registration
*/
const signUp = async (req, res) => {
  try {
    const clientData = await models.Clients.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      isAdmin: req.body.isAdmin,
    });
    await models.Clients.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!clientData) {
      res.send({
        message: 'client not found',
      });
    } else {
      const token = jwt.sign({ clientData }, process.env.TOKEN_SECRET, {
        expiresIn: 86400, // 24 hours
      });
      const data = {
        id: clientData.id,
        firstName: clientData.firstName,
        lastName: clientData.lastName,
        email: clientData.email,
        phoneNumber: clientData.phoneNumber,
        address: clientData.address,
        isAdmin: clientData.isAdmin,
      };
      data.token = token;
      res.cookie('token', token);
      res.header('Authorization', token).status(200).send({
        data,
        message: 'Client was registered successfully!',
      });
    }
  } catch (err) {
    res.status(err.status || 500);
    res.render('error');
  }
};

module.exports = signUp;
