const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
     const authHeader = req.get('Authorization');
     if(!authHeader){
         const error = new Error('Not authenticated');
         error.statusCode = 401;
         throw error;
     }

const token = authHeader.split(' ')[1];

console.log(token);
let decodedToken;
try{
    decodedToken = jwt.verify(token, 'sjfromhood');
}catch(err) {
    err.statusCode = 500;
    throw err;
}
if(!decodedToken) {
    const error = new Error('Not authentiated.');
    error.statusCode = 401;
    throw error;
}
console.log(decodedToken)
req.id = decodedToken.id;
next();
}