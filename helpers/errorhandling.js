



exports.errorHandler = function(err,req,res,next){
    let err = new Error();
    console.log(err.stack)
    res.status(500).send("something broke")
}