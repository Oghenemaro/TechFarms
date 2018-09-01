import db from '../models/index';
import jwt from 'jsonwebtoken';

const user = db.users;
const secretkey = 'farmsconnect-members';

class users {
    static createUser(req, res) {
        const {
            username, password, firstname, lastname, email, cell
        } = req.body;

        if (password.length < 6) {
            return res.status(400).send({ status: 'failed', message: 'Password must me more than 6 characters' });
        }
        return user.create({
            username, password, firstname, lastname, email, cell
        }).then(() => res.status(200).send({ Status: 'successful', message: 'Account created, login to access profile' }))
            .catch(() => res.status(400).send({ Status: 'failed', message: 'A problem occured, please try again' }));
    }
    static login(req, res){
        const {
            email, password
        } = req.body;
        user.findOne({
            attributes: ['id', 'username', 'password', 'email '],
            where: {
                email: email
            }
        }).then((userFound) => {
            if(userFound === ' '){
                return res.status(400).send({Status: 'failed', message: 'Account not found, signup to create an account'});
            } else if (userFound.password !== password){
                return res.status(401).send({Status: 'failed', message: 'Incorrect username or password'});
            }
            const token = jwt.sign({id: userFound.id, email: userFound.email, username: userFound.username}, secretkey, {expiresIn: 2000});
            return res.status(401).send({Status: 'failed', message: 'Incorrect username or password'});
        }).catch(() => res.status(401).send({Status: 'failed', message: 'A problem occured, please try again later'}));
    }
}

export default users;