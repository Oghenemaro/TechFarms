import express from 'express';
import Middleware from '../middleware/CheckInputs';
import Users from '../controller/users';

const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'welcome to farms connect'
})); 

router.post('/api/v1/auth/signup', Users.createUser);
// router.post('/api/v1/auth/signin', Middleware.checkCreateInputs, Users.login);

module.exports = router;