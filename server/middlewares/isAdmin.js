const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(401).json({
      status: 401,
      message: 'you are not an Admin',
    });
  }
  next();
};

export default isAdmin;
