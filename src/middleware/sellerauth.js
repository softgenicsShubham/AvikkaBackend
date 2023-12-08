const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;
const seller = require("../models/sellers");

exports.loginsellerauth = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);

    console.log(decoded.seller_id, 'decodeddecoded')
    let userData = await seller.findOne({
      where: { seller_id: decoded }
    });
    userData = JSON.parse(JSON.stringify(userData));

    if (!userData) {
      console.log("Token expired!", "unAuthorized")
      // logger.error(error);

    }

    req.userData = userData;
    next();
  } catch (error) {
    // logger.error(error);
    console.log(error)

    return next(error);
  }
};

