const ExpenseRepository = require("../respository/expense-repository");

exports.getexpense = async (req, res) => {
  const getexp = await new ExpenseRepository();
  const a = await getexp.getdata();
  res.send(a);
};

exports.postexpense = async (req, res) => {
  const postexp = await new ExpenseRepository();
  console.log("a");
  postexp.createdata(req.body);
};

exports.deleteexpense = async (req, res) => {
  const userid = req.params;
  console.log(userid);
  const deleteuser = await new ExpenseRepository();
  deleteuser.deletedata(userid.id);
};
