const {model,Schema} = require("../config")

const CourseSchema = new Schema({


    course_name:{
        type:String,
        required:[true,"course name is required"]
    },
    course_id:{
        type:String,
        required:[true,"course id  is required"]
    },
    course_trainer:{
        type:String,
        required:[true,"course trainer name is required"]
    },
    course_duration:{
        type:Number,
        required:[true,"course name is required"]
    },
    course_category:{
        type:String,
        enum:[
            "web development",
            'java development',
            'python development',
            'full stack development',
            'backend developmegt',
            'ui development',
            "automation development"

        ],
        required:[true,"course name is required"]
    },
    course_date:{
        type:Date,
        required:[true, "course data is required"],
        default:Date.now()
    },
    course_image:{
        type:[''],
        required:[true, "course image is required"],
        default:'https://st2.depositphotos.com/1350793/8441/i/600/depositphotos_84416316-stock-photo-hand-pointing-to-online-course.jpg'
    },
    course_video:{
        type:[''],
    
    },
    course_branch:{
        type:String,
        enum:[
            "basavangudi",
            "rajajinagar",
            "btm layout",
            "old airport"
        ],
        required:[true, "course data is required"],
        
    },
    course_timings:{
        type:Date,
        required:[true, "course timing is required"],
        default:Date.now()
    },
    course_subjects:{
        type:String,
        enum:[
            "web ",
            'java ',
            'python ',
            'MERN',
            'Nodejs',
            'Express',
            "NEXTjs",
            "Salenium",
            "postman",
            "swagger",
            "socket.io",
            "WEBRTC"

        ],
        required:[true,"course subject is required"]
    },
    course_description:{
        type:String,
        required:[true ," description is required"],
        minlength:100,
        maxlength:500,
    },




},{timestamps:true})


module.exports = model("courses",CourseSchema)