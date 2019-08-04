import Machine from '../../../entities/Machine';

export default {
  Query: {
    MachinePublish: async (_: any, __: any, { pubSub }) => {
      const machines = await Machine.find();
      pubSub.publish('machineInfo', { machines });
      return machines;
    },
  },
};
