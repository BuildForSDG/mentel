import express from 'express';
import model from '../models';

export default {
  postappointment: async (req, res) => {
    // console.log('my user', req.user);
    // console.log('health', req.body.Healthprofessional);
    try {
      const postAppoint = await model.Appointments.create({
        message: req.body.message,
        ClientId: req.user.clientData.id,
        Healthprofessional: req.body.Healthprofessional,
      });
      //   console.log('appoint', postAppoint);
      res.send({
        postAppoint,
        message: 'your appointment was successful',
      });
    } catch (error) {
      // console.log(error);
      //   return res.status(500).send({ message: error.message });
    }
  },

  // eslint-disable-next-line consistent-return
  getAllAppointment: async (req, res) => {
    try {
      const getall = await model.Appointments.findAll({
        include: [model.Clients],
      });
      return res.send({
        getall,
        message: 'List of all appointments',
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  // eslint-disable-next-line consistent-return
  getOneAppointment: async (req, res) => {
    try {
      // eslint-disable-next-line prefer-const
      let Appointments = await model.Appointments.findOne({
        where: {
          id: req.params.id,
        },
      });
      console.log('single appointment', Appointments);
      console.log('appoint', Appointments.dataValues.Healthprofessional);
      // grab the healthprofessional details relating to the ID of the healthprofessional
      // eslint-disable-next-line prefer-const
      let Healthprofessionals = await model.Healthprofessionals.findOne({
        where: {
          id: Appointments.dataValues.Healthprofessional,
        },
      });
      /* eslint operator-linebreak: off */
      Appointments.dataValues.Healthprofessional =
        Healthprofessionals.dataValues;
      //   console.log('my object', Appointments.dataValues);
      return res.send(Appointments.dataValues);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
