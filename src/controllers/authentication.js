// const mydb = require('mysql2');
// const fast2sms = require('fast-two-sms')
// const  dbConfig= require('../config/db')
// const jwt = require('jsonwebtoken');

const FAST2SMS_API_KEY = 'jr3OEi8MvxyBd5FeNPGW91Qm0XcgfpHoIbDu4YCLAKawh6Jq2VX29IdZVegDY1iGwKtujmQErPSRA3xN'
// const getAuthentication = async (req, res) => {
//   const  {mobilenumber}  = req.body;
//   // console.log('numberrrr',mobilenumber)
//   const generateJWT = (mobilenumber, otp) => {
//     const payload = { mobilenumber, otp };
//     const secretKey = 'Diwkar@321'; // Replace with your secret key
//     const token = jwt.sign(payload, secretKey, ); // You can adjust the expiration time
//     return token;
//   };
//   const generateOTP = () => {
//     // Generate a random 6-digit OTP
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const sendOTP = async (mobilenumber, otp) => {
//     const message = `Your OTP for registration is: ${otp}`;
//     const response = await fast2sms.sendMessage({ authorization: FAST2SMS_API_KEY, message, numbers: [mobilenumber] });
//     return response;
//   };

//   try {
//     // Check if the user already exists in the database

//     const [rows] = await dbConfig.execute('SELECT * FROM registration WHERE mobile_num = ?', [mobilenumber]);

//     if (rows.length === 0) {
//       // User does not exist in the database; generate OTP, JWT, and send OTP
//       const otp = generateOTP();
//       const token = generateJWT(mobilenumber, otp);

//       // Save the new user in the database
//       await dbConfig.execute('INSERT INTO registration (name, mobile_num, email_id, gender, dob) VALUES (?, ?, ?, ?, ?)', ['GUEST', mobilenumber, null, null, null]);

//       const smsResponse = await sendOTP(mobilenumber, otp);

//       if (smsResponse) {
//         // OTP sent successfully
//         console.log('otp is succefuly send',otp,token)
//         // otp= JSON.parse(JSON.stringify(otp))
//         // token= JSON.parse(JSON.stringify(token))


//         return res.status(201).send({
//           success: 'success',
//           otp: otp,
//           token:token,
//         })

//         // res.json({ otp });
//       } else {
//         // Failed to send OTP via SMS
//         console.log('Failed to send OTP via SMS')
//         res.status(500).json({ message: 'Failed to send OTP via SMS' });
//       }
//     } else {
//       // User already exists; send OTP only
//       const otp = generateOTP();
//       const token = generateJWT(mobilenumber, otp);
//       const smsResponse = await sendOTP(mobilenumber, otp);

//       if (smsResponse) {
//         // OTP sent successfully
//         console.log('otp is succefuly send',otp)

//         // otp= JSON.parse(JSON.stringify(otp))
//         // token= JSON.parse(JSON.stringify(token))


//         return res.status(201).send({
//           success: 'success',
//           otp: otp,
//           token:token,
//         })
//       } else {
//         // Failed to send OTP via SMS
//         res.status(500).json({ message: 'Failed to send OTP via SMS' });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


// const getverifyotp=async (req, res)=>{



//   const { token, verificationCode } = req.body;
//   const secretKey = 'Diwkar@321'; // Replace with your secret key

//   try {
//     // Verify the JWT token
//     const decoded = jwt.verify(token, secretKey);

//     // Extract the OTP from the decoded token
//     const { otp } = decoded;

//     if (otp === verificationCode) {
//       // OTP is correct
//       console.log('OTP is correct')
//       res.status(200).json({ success: true, message: 'OTP is correct' });
//     } else {
//       // OTP is incorrect
//       console.log('OTP is incorrect')

//       res.status(200).json({ success: false, message: 'OTP is incorrect' });
//     }
//   } catch (error) {
//     // Token verification failed or other errors occurred
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Token verification failed or an error occurred' });
//   }


// }
// module.exports = {
//   getAuthentication,
//   getverifyotp
// };


const registration = require('../models/registration');
const jwt = require('jsonwebtoken');
const fast2sms = require('fast-two-sms');
require('dotenv').config()

// Your existing code...
const generateJWT = (mobilenumber, otp) => {
  const payload = { mobilenumber, otp };
  const token = jwt.sign(payload, process.env.JWT_KEY,); // You can adjust the expiration time
  return token;
};

const generateOTP = () => {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTP = async (mobilenumber, otp) => {
  const message = `Your OTP for registration is: ${otp}`;
  const response = await fast2sms.sendMessage({ authorization: FAST2SMS_API_KEY, message, numbers: [mobilenumber] });
  return response;
};

const getAuthentication = async (req, res) => {
  const { mobilenumber } = req.body;

  try {
    // Check if the user already exists in the database
    const otp = generateOTP();
    const token = generateJWT(mobilenumber, otp);
    console.log(otp)
    const smsResponse = await sendOTP(mobilenumber, otp);

    // console.log(token)


    if (smsResponse) {
      // OTP sent successfully
      console.log('OTP is successfully sent', otp, token);

      return res.status(201).send({
        success: 'success',
        otp: otp,
        token: token,
      });
    } else {
      // Failed to send OTP via SMS
      console.log('Failed to send OTP via SMS');
      res.status(500).json({ message: 'Failed to send OTP via SMS' });
    }

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getverifyotp = async (req, res) => {
  const { token, verificationCode } = req.body;
  try {
    // Verify the JWT token
    const { otp, mobilenumber } = jwt.verify(token, process.env.JWT_KEY);
    if (otp === verificationCode) {

      // Check if the user already exists in the database
      let existingUser = await registration.findOne({ where: { mobile_num: mobilenumber } });


      if (!existingUser) {
        // User does not exist; create a new user and log them in
        let user = await registration.create({
          name: 'GUEST',
          mobile_num: mobilenumber,
          email_id: null,
          gender: null,
          dob: null,
        });
        user = JSON.parse(JSON.stringify(user))
        const payload = { mobile_num: user?.mobile_num, user_id: user?.user_id };
        const token = jwt.sign(payload, process.env.JWT_KEY);
        user.auth_token = token;

        res.status(200).json({
          success: true,
          message: 'New user created and logged in',
          user: user
        });

      } else {
        existingUser = JSON.parse(JSON.stringify(existingUser))
        const payload = { mobile_num: existingUser?.mobile_num, user_id: existingUser?.user_id };
        const token = jwt.sign(payload, process.env.JWT_KEY);
        existingUser.auth_token = token;
        res.status(200).json({
          success: true,
          message: 'New user created and logged in',
          user: existingUser
        })
      }

    } else {
      res.status(203).json({ message: 'Invalid Credentials' })
    }
  } catch (error) {
    // Token verification failed or other errors occurred
    console.error(error);
    res.status(500).json({ success: false, message: 'Token verification failed or an error occurred' });
  }
};


const userInfo = async (req, res, next) => {

  console.log('INFO -> USER INFO API CALLED')
  try {
    let { user_id, mobile_num } = req.userData;
    console.log(user_id, mobile_num, 'mobile_nummobile_num')
    let user = await registration.findOne({
      where: { user_id, mobile_num }
    });

    user = JSON.parse(JSON.stringify(user))
    if (!user)
      return res.status(401).json({ error: "User not found" });

    return res.status(200).json({
      success: true,
      message: "User info fetched successfully!",
      payload: {
        ...user,
        auth_token: jwt.sign({ mobile_num: user.mobile_num, user_id: user.user_id }, process.env.JWT_KEY),
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });

  }
};

const updateprofile=async(req,res)=>{
    console.log('INFO -> updateuserinfo API CALLED');
  
    const {
      email_id, // The ID of the address to update
      name,
      mobile_num,
      gender,
      dob,
    } = req.body;
  console.log(req.body)
    // Check if addressId is provided
  
  
    try {
      // All validation passed, proceed to update the address
      const user_id = req.userData.user_id; // Adjust this based on your authentication mechanism
    //   const parts = dob.split('-');
    // const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

      const updateData = {
        email_id, 
        name,
        mobile_num,
        gender,
        dob:dob
        };
  
  
      // Find and update the address in the database
      const updatedprofile = await registration.findOne(
        { 
            where:{
                user_id: user_id
            }
         }, // You might want to include user_id to ensure the address belongs to the user
        // updateData,
        // { new: true }
      );
  
      if (!updatedprofile) {
        return res.status(404).json({ error: 'userid not found or you do not have permission to update it.' });
      }
      updatedprofile.set(updateData);
    //   Object.assign(updatedAddress,updateData);

      // Save the updated address to the database
      await updatedprofile.save();
  

      console.log(updatedprofile, 'updatedAddress');
      res.status(200).json(updatedprofile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update the userinfo.' });
    }
  };


module.exports = {
  getAuthentication,
  getverifyotp,
  userInfo,
  updateprofile
};


