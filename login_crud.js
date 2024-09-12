const mongoose = require("mongoose")
const login_schema = require("./Login_schema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const process = require('process');


const secKey = "mona"
// const get_login = async(req, res)=>{
//     try {
//         const token = req.headers["authorization"];
//         jwt.verify(token, secKey, async (err, decoded) => {
//             if (err) {
//                 return res.status(403).json({ error: 'Invalid token' });
//             } else {
//                 const find = await login_schema.find().select(["-password"]);
//                 res.send(find)
//                 res.json(`Welcome ${req.user.email}`);
//             }
//         });
//     } catch (error) {
//         console.error('Error retrieving login data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// const get_username = async(req, res)=>{
//     try{
//     const find = await login_schema.findOne({name: req.query.name })
//     res.json({ exists: !!find });
//     }catch (error) {
//         console.error('Error checking username:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }
// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (token == null) {
//         console.log('No token provided');
//         return res.sendStatus(401); // Unauthorized
//     }

//     jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//             console.log('Token verification failed:', err.message);
//             return res.sendStatus(403); // Forbidden
//         }
//         req.user = user; // Attach user info to request object
//         next();
//     });
// };
  
  
const get_login = async(req, res)=>{
    const fin_data= await login_schema.find({})
    res.json(fin_data)
}
const get_loginEmail = async (req, res) => {
    try {
      const { email } = req.query;
  
      if (!email) {
        return res.status(400).json({ message: 'Email parameter is required' });
      }
  
      // Fetch user by email
      const user = await login_schema.findOne({ email });
  
      if (user) {
        res.json({
          email: user.email,
          userName: user.userName
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
const get_email = async(req, res)=>{
    try{
    const find = await login_schema.findOne({email: req.query.email })
    res.json({ exists: !!find });
    }catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const post_login = async (req, res) => {
    try {
        const existingEmail = await login_schema.findOne({ email: req.body.email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const hashpassword = await bcrypt.hash(req.body.password, 7)
            const data = login_schema({
               
                email:req.body.email,
                userName:req.body.userName,
                password:hashpassword
            })
            const savedata = await data.save()
            res.json(savedata)
    } 
   
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const update_login = async (req, res) => {
    try {
        const { password } = req.body;

        // Hash the new password if provided
        let hashedPassword;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        } else {
            return res.status(400).json({ error: 'Password is required for update' });
        }

        // Update the password field only
        const updatedUser = await login_schema.findByIdAndUpdate(req.params.id, { password: hashedPassword }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            msg: 'Password updated successfully',
            updatedUser: updatedUser
        });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const delete_login = async (req, res)=>{
    const delete_data = await login_schema.findByIdAndDelete(req.params.id,{$set:req.body},{new:true})
    res.json({
        msg:"deleted Successfully",
        delete_data_1: delete_data
    })
}
const userDetail = async(req, res)=>{
    try{

    const userEmail = await login_schema.findOne({email:req.body.email})
    
    if(!userEmail) return res.json("Invalid email id")
   
    const userPassword = await bcrypt.compare(
        req.body.password, 
        userEmail.password
        )
    if(!userPassword) return res.json("Invaid password")
        
const token = jwt.sign({email:userEmail.email}, secKey)
res.json({token})

}
catch(err){
    console.error('Error logging in:', err);
    res.status(500).json({ error: 'Internal server error' });
}
}



module.exports = {get_login,get_email, post_login, update_login, delete_login, userDetail,get_loginEmail }