import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['user','admin'],
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verificationToken:{
        type:String,
    },
    verificationExpiry:{
        type:Date
    },
    resetPasswordToken:{
        type:String,
    },
    ResetPasswordExpiry:{
        type:Date
    }
},
{timestamps:true}
);

const User=mongoose.model("User",userSchema);
export default User;