const super_admin = require('../../models/superadmin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const subadmin = require('../../models/subadmin');

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
const id = req.params.id;

const  result =await subadmin.findByPk(id);
res.status(200).send(result);


}

 

// Controller function for editing subadmin permissions
const editPermission = async (req, res) => {
  const admin_id = req.params.id;
  const {
    addProduct,
    manageProduct,
    addOffers,
    addFreeGift,
    manageSpecification,
    productPermission,
    manageBanner,
    manageOrders,
    handleSeller
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
      addProduct,
      manageProduct,
      addOffers,
      addFreeGift,
      manageSpecification,
      productPermission,
      manageBanner,
      manageOrders,
      handleSeller
    });

    // Respond with the updated subadmin
    res.status(200).json({ message: 'Subadmin permissions updated successfully', subadmin });
  } catch (error) {
    console.error('Error updating subadmin permissions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the controller function

module.exports = {
    createadmin,
    superadminlogin,
allsubadminget,
 editPermission,

subadmingetById
}
