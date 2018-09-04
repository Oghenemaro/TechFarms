import jwt from 'jsonwebtoken';
import db from '../models/index';


const secretkey = 'farmsconnect-members';
const user = db.users;

class LoginStatus {
    static locateToken(req, res, next) {
        const { token } = req.header;
        if (token === undefined) {
            return res.status(400).send({ Status: 'failed', Message: 'Please login again' });
        }
    }
    static verifyToken(req, res, next) {
        const { token } = req.header;
        if (token === ' ') {
            return res.status(400).send({ Status: 'failed', Message: 'Session expired, login again' })
        }
        try {
            const tokenVerification = jwt.verify(token, secretkey);
        } catch (error) {
            return res.status(400).send({ Status: 'failed', Message: 'A problem occured, please try again' });
        }
        if (tokenVerification === ' ') {
            return res.status(400).send({ Status: 'failed', Message: 'Session Expired, Login again' });
        }
        const tokenDecoded = jwt.decode(token, ({ complete: true }));
        const userID = tokenDecoded.payload.id;
        user.findOne({
            attributes: [id, username, firstname, lastname, email, cell],
            where: { id: userID }
        }).then((userFound) => {
            if (userFound === ' ') { return res.status(400).send({ Status: 'failed', Message: 'Account not found, please signup' }) }
            else if (userFound !== undefined) {
                req.body.userID = userID;
                next();
            }
        }).catch(() => res.status(400).send({Status: 'failed', Message: 'A  problem occured, please try again'}));
    }
}

export default LoginStatus;