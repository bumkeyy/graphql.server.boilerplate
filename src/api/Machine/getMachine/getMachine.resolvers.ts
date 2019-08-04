import Machine from '../../../entities/Machine';

export default {
  Query: {
    getMachine: async (_, args) => {
      const { id } = args;
      const machine = await Machine.findOne({ id });
      return machine;
    },
  },
};
