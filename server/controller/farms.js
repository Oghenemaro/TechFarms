import db from '../models/index';

const farms = db.farms;
const product = db.products;
const userInvestment = db.investments;

class Farms {
    static viewFarms(req, res) {
        if (farms === undefined) {
            return res.status(400).send({ Status: 'failed', message: "Can't load farms, please try again" });
        }
        farms.findAll({
            attributes: ['id', 'farmname', 'productID', 'address', 'size', 'insuranceStatus'],
        }).then((farm) => {
            res.status(200).send({ Status: 'successful', Farms: farm });
        })
            .catch((err) => res.status(400).send({ Status: 'failed', message: err }));
    }

    static viewFarm(req, res) {
        const farmSelected = req.params.id;
        farms.findOne({
            include: [product],
            attributes: ['id', 'farmname', 'productID', 'address', 'size', 'insuranceStatus'],
            where: {
                id: farmSelected
            }
        }).then((farmFound) => {
            const { livestock, minimumInvestment, percentageReturn, duration } = farmFound.product;
            const farmRecord = {
                farmID: farmFound.id,
                livestock,
                minimumInvestment,
                percentageReturn,
                duration
            }
            console.log(farmRecord);
            res.status(200).send({ Status: 'successful', Farms: farmRecord });
        }).catch((err) => res.status(400).send({ Status: 'failed', Farms: 'A problem occured, cannot loadd all farms at this moment' }));
    }

    static determineReturns(amountPaid, minimumInvestment, percentageROI) {
        const totalAmount = parseInt(minimumInvestment) + parseInt(amountPaid);
        if (totalAmount < minimumInvestment) {
            return 'Investment must be larger than minimum value';
        }
        const percentageEarnings = totalAmount * (parseInt(percentageROI) / 100);
        const totalEarnings = totalAmount + percentageEarnings;
        return totalEarnings;
    }

    //     static findFarm(farmSelected) {
    //         return farms.findOne({
    //             // include: [product],
    //             attributes: ['id', 'farmname', 'productID', 'address', 'size', 'insuranceStatus'],
    //             where: {
    //                 id: 2
    //             }
    //         });
    // }

    static createInvestment(req, res) {
        const farmID = req.params.id;
        const { investment } = req.body;
        if (farmID === undefined) {
            return res.status(400).send({ Status: 'failed', message: 'farm not selected' });
        }
        if (investment === undefined) {
            return res.status(400).send({ Status: 'failed', message: 'Enter an investment value' });
        }
        farms.findOne({
            include: [product],
            attributes: ['id', 'farmname', 'productID', 'address', 'size', 'insuranceStatus'],
            where: {
                id: farmID
            }
        }).then((farmFound) => {
            const { livestock, minimumInvestment, percentageReturn, duration } = farmFound.product;
            if (livestock && minimumInvestment && percentageReturn && duration === undefined){
                return res.status(400).send({ Status: 'failed', message: 'farm not found' });
            }
            const totalEarnings = Farms.determineReturns(investment, minimumInvestment, percentageReturn);
            if (totalEarnings === undefined) {
                return res.status(400).send({ Status: 'failed', message: 'earnings not determined' });
            }
            return userInvestment.create({
                userID: req.body.userID,
                farmID: farmFound.id, 
                amountPaid: investment,
                ROI: percentageReturn,
                totalEarnings
            }).then(() => res.status(200).send({ Status: 'successful', mesage: 'Your investment is complete, happy earnings!' }))
                .catch((err) => res.status(400).send({ Status: 'failed', message: err }));
        })
    }
}

export default Farms;