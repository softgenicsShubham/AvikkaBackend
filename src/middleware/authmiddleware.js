const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;
const { registration} = require("../models/registration");

exports.userAuth = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);


    let userData = await registration.findOne({
      where: { mobile_num: decoded.mobilenumber, username: decoded.user_id }
    });
    userData = JSON.parse(JSON.stringify(userData));

    if (!userData) throw errorHandler("Token expired!", "unAuthorized");

    req.userData = userData;
    next();
  } catch (error) {
    logger.error(error);

    return next(error);
  } 
};

