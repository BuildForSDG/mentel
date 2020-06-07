import model from '../models';

// eslint-disable-next-line consistent-return
const deleteUsers = async (req, res) => {
  try {
    const data = await model.Clients.destroy({
      where: {},
      truncate: false,
    });
    if (data) {
      res.send({
        data,
        message: 'Clients was deleted successfully',
      });
    } else {
      res.send({
        message: 'Cannot delete Clients',
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default deleteUsers;
