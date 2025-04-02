import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto"

const userSchema = new Schema({
    avatar: {
        type: {
            url: String,
            localpath: String
        },
        default: {
            url: 'https://i.pravatar.cc/200',
            localpath: ''
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: String,
    forgotPasswordToken: String,
    forgotPasswordExpiry: Datetime,
    emailVerificationToken: String,
    emailVerificationExpiry: Datetime,
}, { timestamps: true });

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}
userSchema.methods.generateTemporaryToken = function () {
    const unHashedToken = crypto.randomBytes(32).toString('hex')
    const hashedToken = crypto.createHash('sha256').update(unHashedToken).digest('hex')
    const tokenExpiry = Date.now() + (20 * 60 * 1000) //20min

    return { hashedToken, unHashedToken, tokenExpiry }
}


const User = mongoose.model("User", userSchema);
export default User;