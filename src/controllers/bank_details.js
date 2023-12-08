const Bank_detail = require('../models/bank_detail');
const Registration = require('../models/registration');

const add_bank_details = async (req, res) => {
    console.log('add bank details API called');

    const userId = req.userData.user_id; // Assuming userData is defined elsewhere in your code
    const { accountNumber, accountHolderName, ifscCode } = req.body;
console.log(req.body,'req.bodyreq.body')
    try {
        if (!accountNumber || !accountHolderName || !ifscCode) {
            return res.status(400).json({ message: 'All bank details fields are required' });
        }

        const userinfo = await Registration.findOne({
            where: {
                user_id: userId,
            },
        });

        const result = await Bank_detail.create({
            user_id: userId,
            Account_number: accountNumber,
            Account_holder_name: accountHolderName,
            ifsc_code: ifscCode,
        });

        res.status(201).json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getbankdetail=async(req,res)=>{
    console.log('get bank details API called');

    const userId = req.userData.user_id; // Assuming userData is defined elsewhere in your code
try{
    const result=await Bank_detail.findAll({
        where:{
            user_id:userId
        }
    })
    res.status(200).json(result)

}catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });

}
}


const deletebankdetail=async(req,res)=>{
    console.log('INFO -> removebank detail INFO API CALLED')

    try{
      const id=req.params.id
console.log(id,'ididid')
        const user_id = req.userData.user_id; // Adjust this based on your authentication mechanism
        const deleteresult=await Bank_detail.destroy({
            where:{
                user_id:user_id,
                bank_detail_id:id
            }
        })
        if (deleteresult === 0) {
            return res.status(404).json({ error: 'bank detailnot found or you do not have permission to delete it.' });
          }
      
console.log(deleteresult,'deleteresult')
res.status(200).json(deleteresult)
    }catch(error){
res.status(500).json({error: 'Failed to delete the bank detail.'})
    }

}
module.exports = {
    add_bank_details,
    getbankdetail,
    deletebankdetail
};
