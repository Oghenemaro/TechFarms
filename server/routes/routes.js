import express from 'express';
import CheckInputs from '../middleware/CheckInputs';
import LoginStatus from '../middleware/LoginStatus';
import Users from '../controller/users';
import Farms from '../controller/farms';

const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'welcome to farms connect'
})); 

router.post('/api/v1/auth/signup',  CheckInputs.checkCreateInputs, Users.createUser);
router.post('/api/v1/auth/signin', CheckInputs.checkLoginInputs, Users.login);
router.get('/api/v1/farms', Farms.viewFarms);
router.get('/api/v1/farm/:id', Farms.viewFarm);
router.post('/api/v1/farms/:id', LoginStatus.locateToken, LoginStatus.verifyToken, Farms.createInvestment);

module.exports = router;