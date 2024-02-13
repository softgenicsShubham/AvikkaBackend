const super_admin = require('../../models/subadmin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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


        const result = await super_admin.create({name:name,
category:category,admin_email:email,password:cripted_password});
        console.log(result,'created ')
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}
//super admin login
const subadminlogin=async(req,res)=>{
    const {email, password}=req.body;
console.log(email,"admin email");
    const admin=await super_admin.findOne({
where:{admin_email:email}});

console.log(admin.password,"admin email");

    if (admin) {
        bcrypt.compare(password, admin.password, function (err, result) {
          if (result) {
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
              time: Date(),
              userId: admin.id,
              admintype:'subadmin'      
            }
            const token = jwt.sign(data, jwtSecretKey);

            //srequest.session.token = token;
            res.status(200).send({

              status: "true",
              token: token,
              UserType:"sub admin",

            });

        }else{
           res.status(400).json({error:"Invilide Password"})
        }
    }
            )
}
else{
    res.status(400).json({error:"Invilide Email"})
}
}


module.exports = {
    createadmin,
    subadminlogin

}
