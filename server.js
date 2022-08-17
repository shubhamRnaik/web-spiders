const{listen,mongoConnect} = require("./config")







mongoConnect()
listen(process.env.PORT)