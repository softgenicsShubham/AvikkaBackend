// const mydb = require('mysql2');
// const fast2sms = require('fast-two-sms')
// const  dbConfig= require('../config/db')
// const jwt = require('jsonwebtoken');

const FAST2SMS_API_KEY='jr3OEi8MvxyBd5FeNPGW91Qm0XcgfpHoIbDu4YCLAKawh6Jq2VX29IdZVegDY1iGwKtujmQErPSRA3xN'
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

// Your existing code...
const generateJWT = (mobilenumber, otp) => {
  const payload = { mobilenumber, otp };
  const secretKey = 'Diwkar@321'; // Replace with your secret key
  const token = jwt.sign(payload, secretKey, { expiresIn: '15m' }); // You can adjust the expiration time
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
    const existingUser = await Registration.findOne({ where: { mobile_num: mobilenumber } });

    if (!existingUser) {
      // User does not exist in the database; generate OTP, JWT, and send OTP
      const otp = generateOTP();
      const token = generateJWT(mobilenumber, otp);

      // Save the new user in the database
      await registration.create({
        name: 'GUEST',
        mobile_num: mobilenumber,
        email_id: null,
        gender: null,
        dob: null,
      });

      const smsResponse = await sendOTP(mobilenumber, otp);

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
    } else {
      // User already exists; send OTP only
      const otp = generateOTP();
      const token = generateJWT(mobilenumber, otp);
      const smsResponse = await sendOTP(mobilenumber, otp);

      if (smsResponse) {
        // OTP sent successfully
        console.log('OTP is successfully sent', otp);

        return res.status(201).send({
          success: 'success',
          otp: otp,
          token: token,
        });
      } else {
        // Failed to send OTP via SMS
        res.status(500).json({ message: 'Failed to send OTP via SMS' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getverifyotp=async (req, res)=>{



  const { token, verificationCode } = req.body;
  const secretKey = 'Diwkar@321'; // Replace with your secret key

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, secretKey);

    // Extract the OTP from the decoded token
    const { otp } = decoded;

    if (otp === verificationCode) {
      // OTP is correct
      console.log('OTP is correct')
      res.status(200).json({ success: true, message: 'OTP is correct' });
    } else {
      // OTP is incorrect
      console.log('OTP is incorrect')

      res.status(200).json({ success: false, message: 'OTP is incorrect' });
    }
  } catch (error) {
    // Token verification failed or other errors occurred
    console.error(error);
    res.status(500).json({ success: false, message: 'Token verification failed or an error occurred' });
  }


}

module.exports = {
  getAuthentication,
  getverifyotp
};


