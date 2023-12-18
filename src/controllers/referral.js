const Referral = require('../models/Referral')

const createreferral=async(req,res)=>{
    

    const {
     
          sender_id,
          reciever_id,
          referral_code,
    } = req.body;
console.log(req.body,'rebnnjxn')
    // Check if any required field is missing
    if (
        !sender_id ||
        !reciever_id ||
        !referral_code
    ) {
        return res.status(400).json({ error: 'All required fields must be provided.' });
    }

   
       try {
       

        const referralData = {
            sender_id,
            reciever_id,
            referral_code, 
        };

        

        const referralresult = await Referral.create(referralData);
        console.log(referralresult,'referralresult')
        res.status(201).json(referralresult);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}
const getallreferral=async(req,res)=>{
    try{
   
      const allreviewdata=await Referral.findAll()
      console.log(allreviewdata,'Referral')
      res.status(200).json({ allreviewdata });
    
    }catch(error){
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    
    }
    }

module.exports = {
    createreferral,
    getallreferral
}