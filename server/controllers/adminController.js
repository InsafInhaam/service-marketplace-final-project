const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  let admin;

  if (email) {
    admin = await Admin.findOne({ where: { email: req.body.email } });
  }
  if (!admin) {
    return res.status(404).send({ error: "Incorrect admin or password" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).send({ error: "Incorrect admin or password" });
  }

  const token = jwt.sign(
    { id: admin.id, name: admin.name, email },
    process.env.JWT_SECERT_KEY
  );
  const { id, name } = admin;
  res.json({
    message: "successfully signed in",
    token,
    admin: { id, name, email },
  });
};

// exports.createAdmin = async (req, res) => {
//   const admin = new Admin(req.body);

//   if (!req.body.name || !req.body.email || !req.body.password || !req.body.userType) {
//     console.log("please add all the fields");
//   }

//   let existingEmail;

//   try {
//     existingEmail = await Admin.findOne({ where: { email: req.body.email } });
//   } catch (error) {
//     console.log(error);
//   }

//   if (existingEmail) {
//     return res.status(422).json({ error: "This email already exists" });
//   }

//   // password hashing
//   const salt = bcrypt.genSaltSync(10);
//   const hashedPassword = bcrypt.hashSync(req.body.password, salt);
//   admin.password = hashedPassword;

//   try {
//     const newAdmin = await admin.save();

//     return res
//       .status(201)
//       .json({ message: "Admin created successfully", newAdmin });
//   } catch (error) {
//     return res.status(422).json({ error: "Admin created unsuccessfully" });
//   }
// };

// exports.updateAdmin = async (req, res) => {
//   let updateData = req.body;
  
//   // Hash the password if it exists in the request body
//   if (updateData.password) {
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = await bcrypt.hashSync(updateData.password, salt);
//     updateData.password = hashedPassword;
//   }

//   const updateAdmin = await Admin.update(updateData, { where: { id: req.params.id } });

//   try {
//     res.status(201).json({message: "Post updated successfully", updateAdmin});
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// };

// exports.deleteAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.findOne({ where: { id: req.params.id } });
//     if (!admin) {
//       return res.status(422).json({ error: "Admin not found" });
//     }
//     await admin.destroy();
//     res.status(201).json({ message: "Successfully deleted" });
//   } catch (err) {
//     console.log(err);
//     res
//       .status(500)
//       .json({ error: "An error occurred while deleting the admin" });
//   }
// };

// exports.getAdmin = async (req, res) => {
//   const admin = await Admin.findAll();

//   try {
//     res.status(201).json(admin);
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// };

// exports.getAdminById = async (req, res) => {
//   const admin = await Admin.findAll({ where: { id: req.params.id } });

//   try {
//     res.status(201).json(admin);
//   } catch (error) {
//     res.status(422).json({
//       error: error,
//     });
//   }
// };

exports.editProfile = async (req, res) => {
  let updateData = req.body;
  
  // Hash the password if it exists in the request body
  if (updateData.password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(updateData.password, salt);
    updateData.password = hashedPassword;
  }

  const updateAdmin = await Admin.update(updateData, { where: { id: req.user.id } });

  try {
    res.status(201).json({message: "Post updated successfully", updateAdmin});
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};