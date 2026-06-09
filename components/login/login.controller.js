import { userSchema } from "./login.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const name=async(req,res)=>{
  try{
    const name=await userSchema.find({},{
    email: 1,
    _id: 1,
  });
    res.status(200).json(name); 
  }
  catch(err){ 
    res.status(500).json(err);
  }

}

export const createUser = async (req, res) => {
  try {
    const post = new userSchema(req.body);
     await post.save();
    res.status(200).json(post);
  }
   catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


export const editUser=  async (req, res) => {
  try {
    const post = await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteUser=async(req,res)=>{
  try{
    const deleteuser=await userSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteuser);
  }catch(err){
    res.status(500).json({
      message:err.message,
    });
  }
}