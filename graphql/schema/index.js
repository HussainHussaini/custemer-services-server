const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Plan {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  details: String!
}


input PlanInput {
  title: String!
  description: String!
  price: Float!
  details: String!
}



type RootQuery {
    plans: [Plan!]!
    
}

type RootMutation {
    createPlan(planInput: PlanInput): Plan
   
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
