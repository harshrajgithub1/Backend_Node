
const jwt = require("jsonwebtoken");
const User = require("../models/User"); 

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new UnauthenticatedError('Invalid credentials');
    }

    const isValidUser = await comparePassword(req.body.password, user.password);

    if (!isValidUser) {
      throw new UnauthenticatedError('Invalid credentials');
    }

    const token = createJWT({ userId: user._id, role: user.role });

    res.json({ token });
  } catch (error) {
 
    console.error(error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};
