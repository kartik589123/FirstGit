const { appointment } = require("../models/index");

class AppointmentRepository {
  async createdata({ username, email, phone }) {
    try {
      console.log(username);
      const data = await appointment.create({
        name: username,
        email: email,
        phone: phone,
      });
      console.log(username);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deletedata(userid) {
    try {
      console.log(userid + "5");
      await appointment.destroy({
        where: {
          id: userid,
        },
      });
    } catch (error) {
      console.log("something went wrongd");
    }
  }

  async getdata() {
    try {
      // const data = await appointment.findByPk(userid);
      const data = await appointment.findAll();
      return data;
    } catch (error) {
      console.log(error);
      console.log("something went wrongg");
    }
    // return appointment.findAll().then((response) => response);
  }

  async updatedata(userid, data) {
    try {
      const data = await appointment.update(data, {
        where: {
          id: userid,
        },
      });
    } catch (error) {
      console.log("something went wrongu");
    }
  }
}

module.exports = AppointmentRepository;
