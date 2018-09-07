import jwt from 'jsonwebtoken';
import db from '../models/index';


const secretkey = 'farmsconnect-members';
const user = db.users;

class LoginStatus {
    static locateToken(req, res, next) {
        req.token = req.headers.token;
        if (req.token === undefined) {
            return res.status(400).send({ Status: 'failed', Message: 'Please login again' });
        }
        next();
    }
    static verifyToken(req, res, next) {
        const tokens = req.headers.token;
        if (tokens === undefined) {
            return res.status(400).send({ Status: 'failed', Message: 'Session expired, login again' })
        }
        let tokenVerification;
        try {
            tokenVerification = jwt.verify(tokens, secretkey);
        } catch (error) {
            return res.status(400).send({ Status: 'failed', Message: 'Token error' });
        }
        if (tokenVerification === undefined) {
            return res.status(400).send({ Status: 'failed', Message: 'Session Expired, Login again' });
        }
        const tokenDecoded = jwt.decode(tokens, ({ complete: true }));
        const userID = tokenDecoded.payload.id;
        user.findOne({
            attributes: ['id', 'username', 'firstname', 'lastname', 'email', 'cell'],
            where: { id: userID }
        }).then((userFound) => {
            if (userFound === undefined) { return res.status(400).send({ Status: 'failed', Message: 'Account not found, please signup' }) }
            else if (userFound !== undefined) {
                req.body.userID = userID;
                next();
            }
        }).catch((err) => res.status(400).send({ Status: 'failed', Message: 'A problem occured' }));
    }
}

export default LoginStatus;