//const {StatusCodes} = require('http-status-codes')

const info = (req, res)=>{
  return res.json({
    success : true,
    msg : 'Api is alive',
    err : {},
    data:{}

  });
};
module.exports = {
  info :info
}