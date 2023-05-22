const AppointmentRepository = require("../repository/appointment");

exports.getname = async (req, res) => {
  const getuser = new AppointmentRepository();
  const a = await getuser.getdata();
  //console.log(a);
  res.send(a);
};

exports.userpost = (req, res) => {
  console.log(req.body);
  //const { username, email, phone } = req.body;

  const createuser = new AppointmentRepository();
  createuser.createdata(req.body);
  //res.redirect("/admin");
};

exports.deletepost = (req, res) => {
  const userid = req.params;
  console.log(userid.id);
  const deleteuser = new AppointmentRepository();
  deleteuser.deletedata(userid.id);
};
