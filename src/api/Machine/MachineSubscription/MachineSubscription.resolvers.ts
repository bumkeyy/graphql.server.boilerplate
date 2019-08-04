export default {
  Subscription: {
    MachineSubscription: {
      subscribe: (_: any, __: any, { pubSub }) => {
        return pubSub.asyncIterator('machineInfo');
      },
    },
  },
};
