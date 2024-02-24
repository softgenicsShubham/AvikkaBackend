const super_admin = require('../../models/subadmin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const subadmin = require('../../models/subadmin');

//super admin login
const createadmin = async (req, res) => {
    console.log('INFO -> admin api called')

    const {name,
category,
        email,
        password
    } = req.body;

    if (!name ||
        !category ||
        !email ||
        !password

    ) {
        return res.status(400).json({ error: 'All required fields must be provided.' });
    }

    try {
        const cripted_password = bcrypt.hashSync(password, 8);


        const result = await subadmin.create({name:name,
category:category,admin_email:email,password:cripted_password});
        console.log(result,'created ')
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}
//super admin login
const subadminlogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const admin = await subadmin.findOne({ where: { admin_email: email } });
        
        console.log(admin.admin_email, "admin email");
        
        if (admin) {
            bcrypt.compare(password, admin.password, function (err, result) {
                if (result) {
                    let jwtSecretKey = process.env.JWT_SECRET_KEY;
                    let data = {
                        time: Date(),
                        userId: admin.admin_id,
                        admintype: 'subadmin'
                    }
                    const token = jwt.sign(data, jwtSecretKey);

                    res.status(200).send({
                        status: "true",
                        token: token,
                        UserType: "sub admin",
                        UserId:admin.admin_id
                    });
                } else {
                    res.status(400).json({ error: "Invalid Password" })
                }
            });
        } else {
            res.status(400).json({ error: "Invalid Email" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const forget=async(req,res)=>{
const email=req.body.email;

let otp=Math.floor( Math.random() * (999999 - 100000 + 1) + 100000);
console.log(otp, email,"admin forget");
const result=await subadmin.findOne({where:{admin_email:email}});
if(result){

res.send({otp:otp,email:email});
}
else{
res.status(400).send("error");
}
}

const passwordedit=async(req,res)=>{
console.log("api edit password call")
    const email=req.body.email;
    const password=req.body.newpassword;
    try{
const cripted_password = bcrypt.hashSync(password, 8);

    const admindata=await subadmin.findOne({where:{admin_email:email}})
    
    admindata.password=cripted_password;
    const result=admindata.update();
    res.send(result);
    
    }
    catch(errror){
    
    console.log(errror);
    }
    
    }


module.exports = {
    createadmin,
    subadminlogin,
forget,
passwordedit

}
