const CandyRepository = require("../repository/candy-repository");

exports.getCandy = async (req, res) => {
  console.log(req.body);
  const getc = await new CandyRepository();
  const a = await getc.getdata();
  res.send(a);
};

exports.postCandy = async (req, res) => {
  const postc = await new CandyRepository();
  postc.createdata(req.body);
};

exports.updateCandy = async (req, res) => {
  const userid = req.params.id;
  const userbody = req.body;
  console.log(userbody);
  const updatec = await new CandyRepository();
  await updatec.updatedata(userid, userbody);
};

exports.deleteCandy = async (req, res) => {
  const userid = req.params;
  console.log(userid.id);
  const del = await new CandyRepository();
  del.deletedata(userid.id);
};
