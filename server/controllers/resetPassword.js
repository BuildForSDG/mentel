import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models';

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    console.log('id', id);
    const { password } = req.body;
    const result = await model.Clients.findOne({
      where: {
        id,
      },
    });
    const secret = result.password;
    const payload = jwt.decode(token, secret);
    if (payload.client.id) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return;
        bcrypt.hash(password, salt, (error, hash) => {
          if (error) return;
          model.Clients.update(
            { password: hash },
            {
              where: {
                id,
              },
              // eslint-disable-next-line comma-dangle
            }
          );
        });
        res.status(200).json({
          message: 'Password changed accepted',
        });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default resetPassword;
