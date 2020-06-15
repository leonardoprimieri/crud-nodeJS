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
};
exports.createAction = async (req, res) => {
  req.body.languages = req.body.languages.split(",").map((l) => l.trim());

  const user = new User(req.body);
  console.log(req.body);
  await user.save();

  return res.render("success");
};

exports.edit = async (req, res) => {
  const { _id } = req.params;

  const user = await User.findOne({ _id });

  return res.render("edit", user);
};

exports.editAction = async (req, res) => {
  req.body.languages = req.body.languages.split(",").map((l) => l.trim());

  await User.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  });

  return res.render("success", { edit: true });
};

exports.show = async (req, res) => {
  const { _id } = req.params;

  const user = await User.findOne({ _id });
  return res.render("show", user);
};

exports.delete = async (req, res) => {
  const { _id } = req.params;
  const user = new User(req.body);
  await User.findOneAndDelete({ _id });

  return res.redirect("/");
};
