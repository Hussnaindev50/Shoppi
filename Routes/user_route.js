const express = require("express");
const router = express.Router();
const getSingleUser=require("../Controllers/admin_controller")
const { registerUser,signIn,getUsers } = require("../Controllers/user_controller");
const { isAuthenticatedUser, authorizeRoles } = require("../Middlewares/auth");
//User Route

router.post("/signup", registerUser);
router.post("/login",signIn)
router.get("/getuser", getUsers)
//Admin Route
router.get(isAuthenticatedUser, authorizeRoles("/admin/user"), getUsers);
router.get( "/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),getSingleUser);
  // .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  // .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;
