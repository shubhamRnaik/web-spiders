
const{multer} = require("../config")


const storage = multer.diskStorage({

    destination:function(req,file,cb){
       return cb(null , 'public/images')
    },
    filename:function(req,file,cb){
        return cb(null , Date.now() +  file.originalname)
    }
})


module.exports = storage