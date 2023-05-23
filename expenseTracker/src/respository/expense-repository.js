const { Expense } = require("../models/index");

class ExpenseRepository {
  async createdata({ amount, description, category }) {
    try {
      const track = await Expense.create({
        amount,
        description,
        category,
      });

      return track;
    } catch (error) {
      console.log(error);
      console.log("Something went wrongc");
    }
  }

  async deletedata(expid) {
    try {
      await Expense.destroy({
        where: {
          id: expid,
        },
      });
      console.log(expid);
    } catch (error) {
      console.log(error);
      console.log("Something went wrongd");
    }
  }

  async getdata() {
    try {
      const get = await Expense.findAll();
      return get;
    } catch (error) {
      console.log(error);
      console.log("Something went wrongg");
    }
  }
}

module.exports = ExpenseRepository;
