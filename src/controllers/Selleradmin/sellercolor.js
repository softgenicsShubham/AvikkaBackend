const color=require('../../models/color')


const Addcolor=async(req,res)=>{
    console.log('INFO -> Addcolor INFO API CALLED')

    const { colorname,colorcode} = req.body;

    try{

        const addcolor=await color.create({

            color_name:colorname,
            color_code:colorcode
        })
      return res.json(addcolor);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error creating color and linking products' });
    }
}



const getcolor=async(req,res)=>{
    console.log('INFO -> getcolor INFO API CALLED')

    // const { colorname,colorcode} = req.body;

    try{

        const getcolor=await color.findAll()
      return res.json(getcolor);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error getcolor color and linking products' });
    }
}



const Deletecolor = async (req, res) => {
  console.log('Deletecolor api called')
    try {
    //   const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
      const color_id = req.params.color_id;
  console.log(color_id,'color_id')
      const existingcolorItem = await color.findOne({
        where: {
          color_id: color_id,
        },
      });
  
      if (!existingcolorItem) {
        return res.status(404).json({ message: 'color not found ' });
      }
  
      await existingcolorItem.destroy();
      console.log(existingcolorItem,'existingcolorItem')
  
      res.status(200).json({ message: 'color removed from the color successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generated while processing your request', error });
    }
  };
  
  // const editcolor=async(req,res)=>{

  //   try{


  //   }catch(error){
  //     console.error(error);
  //     res.status(500).json({ message: 'Error generated while processing your request', error });
  //   }

  // }




  const editcolor =async(req, res)=>{
    console.log('INFO -> editcolor API CALLED');
  
    const {
      color_name,color_code ,color_id
    } = req.body;
  console.log(req.body)
    // Check if addressId is provided
    if (!color_id) {
      return res.status(400).json({ error: 'color_id must be provided.' });
    }
  
   
  
   
  
    try {
      // All validation passed, proceed to update the address
      
  
      const updateData = {
        color_name,color_code 
      };
  
      // Include the optional landmark field if it's provided
    
  
      // Find and update the address in the database
      const updatedcolor = await color.findOne(
        { 
            where:{
              color_id:color_id, 
               
            }
         }, // You might want to include user_id to ensure the address belongs to the user
        // updateData,
        // { new: true }
      );
  
      if (!updatedcolor) {
        return res.status(404).json({ error: 'color not found or you do not have permission to update it.' });
      }
      updatedcolor.set(updateData);
    //   Object.assign(updatedAddress,updateData);

      // Save the updated address to the database
      await updatedcolor.save();
  

      console.log(updatedcolor, 'updatedcolor');
      res.status(200).json(updatedcolor);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update the address.' });
    }
  };
  
module.exports={
    Addcolor,
    getcolor,
    Deletecolor,
    editcolor
}