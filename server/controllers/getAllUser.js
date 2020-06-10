import model from '../models';

// eslint-disable-next-line consistent-return
const getAllUsers = async (req, res) => {
  try {
    const data = await model.Clients.findAll();
    return res.send({
      data,
      message: 'List of all Clients',
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export default getAllUsers;
