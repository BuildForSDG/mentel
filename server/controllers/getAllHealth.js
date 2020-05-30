import express from 'express';
import model from '../models';

/** /Get all professional :
   post:
      description: Get all health professional
      responses: "200"
       description:  successful
 */

export default {
  // eslint-disable-next-line consistent-return
  getAllHealth: async (req, res) => {
    try {
      const getHealth = await model.Healthprofessionals.findAll();
      return res.send({
        getHealth,
        message: 'List of all health professional',
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
