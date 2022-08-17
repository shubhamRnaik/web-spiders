const{listen,mongoConnect, app ,multer} = require("./config")
const storage = require("./middlewares/multer")







mongoConnect()
listen(process.env.PORT)