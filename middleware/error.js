const errorHandler = (err, req, res, next)=>{
    console.log(err.message)
    res.status(404).json({msg: err.message });
};

module.exports = errorHandler;