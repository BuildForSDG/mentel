import model from '../models';

// eslint-disable-next-line consistent-return
const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.Clients.destroy({
      where: {
        id,
      },
    });
    if (data) {
      res.send({
        data,
        message: 'Client was deleted successfully',
      });
    } else {
      res.send({
        message: `Cannot delete Client with id=${id}`,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default deleteSingleUser;
