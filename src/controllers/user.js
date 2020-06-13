const mogoose = require("mongoose");
const User = mogoose.model("User");
exports.index = async (req, res) => {
  const users = await User.find();

  data = {
    users: [],
  };

  data.users = users;

  res.render("home", data);
};
exports.create = (req, res) => {
  return res.render("create");
  req.body.languages = req.body.languages.split(",").map((l) => l.trim());
};
exports.createAction = async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  await user.save();

  return res.render("success");
};

exports.edit = async (req, res) => {
  const { _id } = req.params;

  const user = await User.findOne({ _id });
  return res.render("edit", user);
};

exports.editAction = async (req, res) => {
  await User.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  });

  return res.render("success", { edit: true });
};
