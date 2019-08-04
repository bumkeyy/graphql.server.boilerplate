import Machine from '../../../entities/Machine';

export default {
  Query: {
    getMachines: async () => {
      const machines = await Machine.find();
      console.log(machines);
      return machines;
    },
  },
};
