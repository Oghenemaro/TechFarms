import db from '../models/index';

const farms = db.farms;

class Farms{
    static viewFarms(req, res){
        if (farms === undefined){
            return res.status(400).send({Status: 'failed', message: "Can't load farms, please try again"});
        }
        farms.findAll({
            attributes: ['id', 'farmname', 'farmType', 'size', 'insuranceStatus']
        }).then((farm) => res.status(200).send({Status: 'successful', Farms: farm}))
        .catch((err) => res.status(400).send({Status: 'failed', message: 'A problem occured, please try again'}));
    }
}

export default Farms;