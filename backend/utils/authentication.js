const jwt = require('jsonwebtoken');
const config = require('../config');

exports.authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, config.jwtSecret);

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
