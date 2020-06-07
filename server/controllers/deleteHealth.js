import model from '../models';

export default {
  // eslint-disable-next-line consistent-return
  deleteSingleHealth: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await model.Healthprofessionals.destroy({
        where: {
          id,
        },
      });
      if (data) {
        res.send({
          data,
          message: 'Health professional was deleted successfully',
        });
      } else {
        res.send({
          message: `Cannot delete Health professional with id=${id}`,
        });
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },

  // eslint-disable-next-line consistent-return
  deleteHealth: async (req, res) => {
    try {
      const data = await model.Healthprofessionals.destroy({
        where: {},
        truncate: false,
      });
      if (data) {
        res.send({
          data,
          message: 'Health professionals was deleted successfully',
        });
      } else {
        res.send({
          message: 'Cannot delete Health professionals',
        });
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
};
