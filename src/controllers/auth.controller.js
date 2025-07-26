
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res)=>{
    const {fullname, email, password} = req.body;
    try {
        if(!fullname || !email || !password){
            return res.status(400).json({message : "All fields are required.."})
        }

        if(password.length < 6){
            return res.status(400).json({message : "Password must be of at least 6 characters"})
        }
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: "Email already exist"})
        const salt =await  bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        })

        if (newUser){
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilepic
            });
        }else{
            res.status(400).json({message: "Invalid User Data"})
            res.status(500).json({message: "Internal Server Error"})
        }
    }
    catch(error){
        console.log("Error in Signup Controller..", error.message)
    }
}

export const signin = async (req, res)=>{
    const {email, password} = req.body
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const isPasswordcorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordcorrect){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilePic: user.profilepic,

        })
        

    }
    catch(error){
        console.log("Error in Login Controller", error.message)
    }
}

export const logout = async (req, res)=>{
    try{
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message: "Logout Successfully"})
    }
    catch(error){
        console.log("Error in Logout Controller", error.message)
    }
}

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilepic: uploadResponse.secure_url },
      { new: true }

    )
    
    ;

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth =  (req, res)=>{
    try{
        res.status(200).json(req.user)
    }
    catch(error){
        console.log("Error in Auth Controller", error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}