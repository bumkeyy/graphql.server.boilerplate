const {
  NatsPubSub
} = require('graphql-nats-subscriptions');
const pubsub = new NatsPubSub(); // connecting to nats://localhost on default
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
  setupFunctions: {},
});