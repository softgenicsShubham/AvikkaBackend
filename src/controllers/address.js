const Address = require('../models/addresses')


const createAddress = async (req, res) => {
    console.log('INFO -> createAddress INFO API CALLED')

    const {
        pincode,
        city,
        state,
        house_flat_office_no,
        address,
        contact_name,
        contact_number,
        address_type,
        landmark, // Include landmark in the request body
    } = req.body;
console.log(req.body,'rebnnjxn')
    // Check if any required field is missing
    if (
        !pincode ||
        !city ||
        !state ||
        !house_flat_office_no ||
        !address ||
        !contact_name ||
        !contact_number ||
        !address_type
    ) {
        return res.status(400).json({ error: 'All required fields must be provided.' });
    }

    // Validate specific fields as needed
    if (typeof pincode !== 'number') {
        return res.status(400).json({ error: 'Pincode must be a number.' });
    }

    if (typeof contact_number !== 'number') {
        return res.status(400).json({ error: 'Contact number must be a number.' });
    }

    try {
        // All validation passed, proceed to create the address
        const user_id = req.userData.user_id; // Adjust this based on your authentication mechanism

        const addressData = {
            pincode,
            city,
            state,

            house_flat_office_no,
            address,

            contact_name,
            contact_number,
            address_type,
            user_id
            
        };

        // Include the optional landmark field if it's provided
        if (landmark) {
            addressData.landmark = landmark;
        }

        const addressresult = await Address.create(addressData);
        console.log(addressresult,'addressresultaddressresult')
        res.status(201).json(addressresult);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}


const getalladdressinfo= async( req,res)=>{
    console.log('INFO -> getalladdressinfo INFO API CALLED')


    try{
        const userId = req.userData.user_id; // Adjust this based on your authentication mechanism

        const addressinfo=await Address.findAll({
            where:{
                user_id:userId
            }
        })
        if(!addressinfo){
            res.state(203).json({message:'record not found'})
        }
        // console.log(addressinfo,'addressinfoaddressinfo')
        res.status(200).json(addressinfo)

    }catch(error){
     console.error(error)
     res.status(500).json({ message: 'Internal server error' });
    }

}

const editaddress = async (req, res) => {
    console.log('INFO -> updateAddress API CALLED');
  
    const {
        addresses_id, // The ID of the address to update
      pincode,
      city,
      state,
      house_flat_office_no,
      address,
      contact_name,
      contact_number,
      address_type,
      landmark, // Include landmark in the request body
    } = req.body;
  console.log(req.body)
    // Check if addressId is provided
    if (!addresses_id) {
      return res.status(400).json({ error: 'Address ID must be provided.' });
    }
  
    // Validate specific fields as needed
    if (typeof pincode !== 'number') {
      return res.status(400).json({ error: 'Pincode must be a number.' });
    }
  
    if (typeof contact_number !== 'number') {
      return res.status(400).json({ error: 'Contact number must be a number.' });
    }
  
    try {
      // All validation passed, proceed to update the address
      const user_id = req.userData.user_id; // Adjust this based on your authentication mechanism
  
      const updateData = {
        pincode,
        city,
        state,
        house_flat_office_no,
        address,
        contact_name,
        contact_number,
        address_type,
      };
  
      // Include the optional landmark field if it's provided
      if (landmark) {
        updateData.landmark = landmark;
      }
  
      // Find and update the address in the database
      const updatedAddress = await Address.findOne(
        { 
            where:{
                addresses_id: addresses_id, 
                user_id: user_id
            }
         }, // You might want to include user_id to ensure the address belongs to the user
        // updateData,
        // { new: true }
      );
  
      if (!updatedAddress) {
        return res.status(404).json({ error: 'Address not found or you do not have permission to update it.' });
      }
      updatedAddress.set(updateData);
    //   Object.assign(updatedAddress,updateData);

      // Save the updated address to the database
      await updatedAddress.save();
  

      console.log(updatedAddress, 'updatedAddress');
      res.status(200).json(updatedAddress);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update the address.' });
    }
  };
  
  const removeaddress=async(req,res)=>{
    console.log('INFO -> removeaddress INFO API CALLED')

    try{
      const id=req.params.id
console.log(id,'ididid')
        const user_id = req.userData.user_id; // Adjust this based on your authentication mechanism
        const deleteresult=await Address.destroy({
            where:{
                user_id:user_id,
                addresses_id:id
            }
        })
        if (deleteresult === 0) {
            return res.status(404).json({ error: 'Address not found or you do not have permission to delete it.' });
          }
      
console.log(deleteresult,'deleteresult')
res.status(200).json(deleteresult)
    }catch(error){
res.status(500).json({error: 'Failed to delete the address.'})
    }
  }
module.exports = {
    createAddress,
    getalladdressinfo,
    editaddress,
    removeaddress
}