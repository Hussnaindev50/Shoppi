const User=require("../Models/userSchema")
const getSingleUser = async (req, res) => {
		const id = new mongoose.Types.ObjectId(req.params);
const user = await User.findById(id);

res.status(200).json({
  success: true,
  user,
});	
}
module.exports=getSingleUser