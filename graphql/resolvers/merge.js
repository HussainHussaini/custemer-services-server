const DataLoader = require('dataloader');

const Plan = require('../../models/plan');

const planLoader = new DataLoader(planIds => {
  return plans(planIds);
});


const plans = async planIds => {
  try {
    const plans = await Plan.find({ _id: { $in: planIds } });
    plans.sort((a, b) => {
      return (
        planIds.indexOf(a._id.toString()) - planIds.indexOf(b._id.toString())
      );
    });
    return plans.map(plan => {
      return transformPlan(plan);
    });
  } catch (err) {
    throw err;
  }
};

const singlePlan = async planId => {
  try {
    const plan = await planLoader.load(planId.toString());
    return plan;
  } catch (err) {
    throw err;
  }
};


const transformPlan = plan => {
  return {
    ...plan._doc,
    _id: plan.id
  }
};


exports.transformPlan = transformPlan;

exports.plans = plans;
exports.singlePlan = singlePlan;
