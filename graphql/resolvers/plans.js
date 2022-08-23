const Plan = require('../../models/plan');

const { transformPlan } = require('./merge');

module.exports = {
  plans: async () => {
    try {
      const plans = await Plan.find();
      return plans.map(plan => {
        return transformPlan(plan);
      });
    } catch (err) {
      throw err;
    }
  },
  createPlan: async (args, req) => {
    
    const plan = new Plan({
      title: args.planInput.title,
      description: args.planInput.description,
      price: +args.planInput.price,
      details:args.planInput.details,
    });
    let createdPlan;
    try {
      const result = await plan.save();
      createdPlan = transformPlan(result);
      console.log("createdPlan!!!");
      console.log(createdPlan);
     
      return createdPlan;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
