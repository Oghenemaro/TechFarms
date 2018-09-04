class CheckInputs {
  static checkCreateInputs(req, res, next) {
    const {
      username, password, firstname, lastname, email, cell
    } = req.body;
    const result =  (username && password && firstname && lastname && email && cell !== undefined) ? 1 : 0;
    if (result === 0) {
      return res.status(400).send({ status: 'failed', message: 'All values must be entered' });
    }
    next();
  }

  static checkLoginInputs(req, res, next) {
    const {
      username, password
    } = req.body;
    const inputs = (username && password !== undefined) ? 1 : 0;
    console.log(password);
    if (inputs === 0) {
      return res.status(400).send({ status: 'failed', message: 'Username & password must be entered' });
    }
    next();
  }
}

export default CheckInputs;