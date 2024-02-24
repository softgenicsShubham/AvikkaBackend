const super_admin = require('../../models/superadmin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const subadmin = require('../../models/subadmin');
const nodemailer = require('nodemailer');
//super admin login
const createadmin = async (req, res) => {
    console.log('INFO -> admin api called')

    const {
        email,
        password
    } = req.body;

    if (
        !email ||
        !password
        
    ) {
        return res.status(400).json({ error: 'All required fields must be provided.' });
    }

    try {
        const cripted_password = bcrypt.hashSync(password, 8);
       

        const result = await super_admin.create({admin_email:email,password:cripted_password});
        console.log(result,'created ')
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}
//super admin login
const superadminlogin=async(req,res)=>{
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
            admintype:'superadmin'
            }
            const token = jwt.sign(data, jwtSecretKey);

            //srequest.session.token = token;
            res.status(200).send({
  
              status: "true",
              token: token,
              UserType:"super admin",
              
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
const allsubadminget=async(req,res)=>{
const  result =await subadmin.findAll();
res.status(200).send(result);


} 
const subadmingetById=async(req,res)=>{
try{
const id = req.params.id;

const  result =await subadmin.findByPk(id);
console.log(result,"user data");
res.status(200).send(result);
}
catch (error){
res.status(500).json({ error: 'Failed to create an address.' });
}

}

 

// Controller function for editing subadmin permissions
const editPermission = async (req, res) => {
  const admin_id = req.params.id;
  const {
       addProduct, manageProduct, addOffers, addFreeGift, manageSpecification, productPermission, manageBanner, manageOrders,
 handleSeller, categorisState, itemState, brandState, addVideoState, specificationDetailsState, manageThumbnailState, productEditState
  } = req.body;
console.log(req.body,"body edit data");
  try {
    // Find the subadmin by ID
    const Subadmin = await subadmin.findByPk(admin_id);

    if (!subadmin) {
      return res.status(404).json({ message: 'Subadmin not found' });
    }

    // Update the subadmin permissions
    await Subadmin.update({
      addProduct, manageProduct, addOffers, addFreeGift, manageSpecification, productPermission, manageBanner, manageOrders,
 handleSeller, categorisState, itemState, brandState, addVideoState, specificationDetailsState, manageThumbnailState, productEditState

    });

    // Respond with the updated subadmin
    res.status(200).json({ message: 'Subadmin permissions updated successfully', subadmin });
  } catch (error) {
    console.error('Error updating subadmin permissions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
//delete admin
const subadmindelete=async(req,res)=>{
 const admin_id = req.params.id;
 try {
    // Find the subadmin by ID
    const Subadmin = await subadmin.findByPk(admin_id);

    if (!subadmin) {
      return res.status(404).json({ message: 'Subadmin not found' });
    }else{


    const result= await Subadmin.destroy();
    res.status(200).json({ message: 'Subadmin permissions delete  successfully', subadmin });
} 
 } catch (error) {
    console.error('Error updating subadmin permissions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }





}
// Export the controller function
const  sendopt=async(request,response)=>{
const  {otp,email}=request.body;
console.log(otp,"user otp")
         let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: 'softgenics.neeraj@gmail.com', // Admin Gmail ID
                  pass: 'hfigzmlmjtvvklmn', // Admin Gmail Password
                },
              })
              //  Send Email
              let info =await transporter.sendMail({
                from: 'softgenics.neeraj@gmail.com',
                to: `${email}`,
                subject: "Avvika - Change Password",
                html: `<h1> OPT:${otp}</h1>`
              })
if(info){
  return response.status(200).send({

    status: "true",
    message: "send otp successfully",
    email:email


  });
}
      else{
        return response.status(400).send({

          status: "false",
          message: error


        });

      }


}
const forget=async(req,res)=>{
const email=req.body.email;
let otp=Math.floor(
    Math.random() * (999999 - 100000 + 1) + 100000);
const result=await super_admin.findOne({where:{'admin_email':email}});
if(result){

res.status(200).send({otp:otp,email:email});
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
    superadminlogin,
allsubadminget,
 editPermission,
subadmindelete,

subadmingetById,
sendopt,
forget,
passwordedit
}
