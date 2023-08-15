require("dotenv").config()
const jwt = require("jsonwebtoken")
const isAuthenticatedUser = async (req, res, next) => {
	const token = req.cookies;

	if (!token) {
		return next("Please Login to access this resource", 401);
	}
	try {
		const decodedData = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decodedData.id
		next();
	}
	catch (error) {
		console.error(error);
		return res.status(403).json({ error: "Forbidden. Invalid token." });
	}
}
module.exports=isAuthenticatedUser







// exports.authorizeRoles = (...roles) => {
// 	return (req, res, next) => {
// 		if (!roles.includes(req.user.role)) {
// 			return next(
				
// 					`Role: ${req.user.role} is not allowed to access this resouce `,
// 					403
// 				)
// 		}
// 	}
// }
		
