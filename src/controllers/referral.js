const Referral = require('../models/Referral')
const registration = require('../models/registration')
const createreferral = async (req, res) => {


    const {

        sender_id,
        reciever_id,
        referral_code,
    } = req.body;
    console.log(req.body, 'rebnnjxn')
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
        console.log(referralresult, 'referralresult')
        res.status(201).json(referralresult);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create an address.' });
    }
}
const getallreferral = async (req, res) => {
    try {

        const allreviewdata = await Referral.findAll()
        console.log(allreviewdata, 'Referral')
        res.status(200).json({ allreviewdata });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

    }
}

const checkreferal = async (req, res) => {
    console.log('Referral API called');

    try {
        const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
        const { applyReferal } = req.body;

        // Check if the referral code exists in the database
        const referalTrueOrNot = await registration.findOne({
            where: {
                referal_code: applyReferal,
            },
        });

        if (referalTrueOrNot) {
            const senderId = referalTrueOrNot.user_id;
            await referalCheck(senderId);
        } else {
            res.status(400).json({ message: 'Referral code not validdd' });
        }

        async function referalCheck(senderId) {
            // Check if the referral code has already been used by the current user
            const checkReferalResult = await Referral.findOne({
                where: {
                    referral_code: applyReferal,
                    reciever_id: userId,
                },
            });

            if (checkReferalResult && checkReferalResult['status']===true) {
                res.status(400).json({ message: 'Referral code already used' });
            }else if(checkReferalResult){
                res.status(200).json({
                    message: 'Successfully applied',
                    discountAmount: 100,
                });
            }else{
                // Apply the referral code
                
                const addReferal = await Referral.create({
                    sender_id: senderId,
                    reciever_id: userId,
                    referral_code: applyReferal,
                });

                res.status(200).json({
                    message: 'Successfully applied',
                    addReferal,
                    discountAmount: 100,
                });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    createreferral,
    getallreferral,
    checkreferal
}