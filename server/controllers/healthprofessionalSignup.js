import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models';

/** /register:
   post:
      description: health professional can register
      responses: "200"
       description: A successful registration
 */

// eslint-disable-next-line consistent-return
const healthRegister = async (req, res) => {
  try {
    const emailCheck = await model.Healthprofessionals.findOne({
      where: {
        email: req.body.email,
      },
    });
    const checkMedicalId = await model.Healthprofessionals.findOne({
      where: {
        medicalId: req.body.medicalId,
      },
    });
    if (emailCheck) {
      res.send({
        message: 'Email already in use',
      });
    } else {
      if (checkMedicalId) {
        return res.send({
          message: ' oopsss!  Medical ID already in use',
        });
      }
      const Data = await model.Healthprofessionals.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phoneNumber: req.body.phoneNumber,
        medicalId: req.body.medicalId,
        image: req.file.path,
        address: req.body.address,
      });
      const token = jwt.sign({ Data }, process.env.TOKEN_SECRET, {
        expiresIn: 86400,
      });
      const data = {
        id: Data.id,
        firstName: Data.firstName,
        lastName: Data.lastName,
        email: Data.email,
        phoneNumber: Data.phoneNumber,
        medicalId: Data.medicalId,
        image: Data.image,
        address: Data.address,
      };
      data.token = token;
      res.cookie('token', token);
      res.header('Authorization', token).status(200).send({
        data,
        message: 'Registered successfully!',
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default healthRegister;
