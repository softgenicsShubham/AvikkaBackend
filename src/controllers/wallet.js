const wallet = require('../models/wallet');
const transection=require('../models/transaction');
const referal=require('../models/Referral')
const path = require('path');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs=require('fs');

// create wallat
const createWallet=async(req,res)=>{
    console.log("create wallet api called")
    // const amount=0;
    const user_id=req.userData.user_id;
    //seach account detail

    // console.log(req.body,'req.body')
    // console.log(user_id,'user_id')

    const walletinfo=await wallet.findOne({
        where:{user_id:user_id}
    })
   

    //get balance & add balance
    
    if(!walletinfo){
        const balance=req.body.balance;
        const currency_type="INR";
        const updateData={
            balance,
            user_id:user_id,
            currency_type,
           }
           const addressResult = await wallet.create(updateData); 
           console.log(addressResult,'addressResult')
        if(addressResult){
            res.status(201).send({
                success: 'success',
                result: addressResult,
                
              });
        }
      else{
        res.send("something wrong in wallet");
      }
      
     }



}
//add balance
const addBalance=async(req,res)=>{
    const amount=req.body.amount;
    const user_id=req.userData.user_id;
    //seach account detail
    const wallet=await wallet.findOne({
        where:{user_id:user_id}
    })
   

    //get balance & add balance
    
    if(wallet){
        const balance=wallet.balance+amount;
        const updateData={
            balance
           }
           wallet.set(updateData);
        
      await wallet.save();
      res.send(`${amount}$ credited successfully  `);
     }

    //update balance

}
const withdraw=async(req,res)=>{
    const amount=req.body.amount;
    const user_id=req.userData.user_id;
    //seach account detail
    const wallet=await wallet.findOne({
        where:{user_id:user_id}
    })
if(wallet.balance>0 && wallet.balance>amount){
    const balance=wallet.balance-amount;
        const updateData={
            balance
           }
           wallet.set(updateData)
      await wallet.save();
      res.send(`${amount}$ debited successfully `);
}else{
    res.send("Insufficient");
}








}

const getwalletbalance=async(req,res)=>{
  console.log('getwalletbalance api called')  

  try {
    const user_id=req.userData.user_id;

    const walletbalance=await wallet.findOne({
        where :{
            user_id: user_id
        }
    })
   
    
    return res.status(200).send(walletbalance);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


// const addamount_wallet=async(req,res)=>{
//     console.log('addamount_wallet api called')

//     try{
//         const user_id=req.userData.user_id;

//         const checkreferal=await referal.findAll({
//             sender_id: user_id
//         })
//         const wallet=await wallet.findOne({
//             where:{user_id:user_id}
//         })
//         console.log(checkreferal,'checkreferal')
//         if(checkreferal){
//             checkreferal.map((item)=>{
//                 const balance=wallet.balance+amount;
                
//             })
//             const updateData={
//                 balance
//                }
//                wallet.set(updateData);
            
//           await wallet.save();
//         }

//     }catch(error){
//         console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//     }
// }


// const addamount_wallet = async (req, res) => {
//     console.log('addAmountToWallet API called');

//     try {
//         const user_id = req.userData.user_id;
        
//         // Assuming Sequelize models are properly defined for 'referal' and 'wallet'
//         const checkReferral = await referal.findAll({
//             where: { sender_id: user_id }
//         });

//         if (checkReferral.length > 0) {
//             const wallet = await wallet.findOne({
//                 where: { user_id: user_id }
//             });

//             if (wallet) {
//                 let totalAmountToAdd = 0;

//                 // Assuming 'amount' is the property you want to sum from checkReferral
//                 checkReferral.forEach((item) => {
//                     totalAmountToAdd += item.amount;
//                 });

//                 const updatedBalance = wallet.balance + totalAmountToAdd;

//                 const updateData = {
//                     balance: updatedBalance
//                 };

//                 await wallet.update(updateData);

//                 return res.status(200).json({ message: 'Amount added to wallet successfully' });
//             } else {
//                 return res.status(404).json({ message: 'Wallet not found for the user' });
//             }
//         } else {
//             return res.status(404).json({ message: 'No referrals found for the user' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

module.exports = {
    addBalance,
    createWallet,
    withdraw,
    getwalletbalance,
    // addamount_wallet
}
