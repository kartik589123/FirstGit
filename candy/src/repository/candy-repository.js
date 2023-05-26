const { Candy } = require("../models/index");

class CandyRepository {
  async createdata({ candyname, description, price, quantity }) {
    try {
      const postcandy = await Candy.create({
        candyname,
        description,
        price,
        quantity,
      });
      return postcandy;
    } catch (error) {
      console.log(error);
      console.log("Something went wrongp");
    }
  }

  async getdata() {
    try {
      const get = await Candy.findAll();
      return get;
    } catch (error) {
      console.log(error);
      console.log("something went wrongg");
    }
  }

  async updatedata(userid, userbody) {
    try {
      //   const resourceId = req.params.id;
      //   const updates = req.body;
      console.log(userid, userbody);
      const resource = await Candy.findByPk(userid);
      await resource.update(userbody);
      console.log(resource);
    } catch (error) {
      console.log(error);
      console.log("Something went wrongu");
    }
  }

  async deletedata(userid) {
    try {
      await Candy.destroy({
        where: {
          id: userid,
        },
      });
    } catch (error) {
      console.log(error);
      console.log("Something went wrongd");
    }
  }
}

module.exports = CandyRepository;
