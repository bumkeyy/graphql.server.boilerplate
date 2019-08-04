import cors from 'cors';
import { NatsPubSub } from 'graphql-nats-subscriptions';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import morgan from 'morgan';
import schema from './schema';

class App {
  public app: GraphQLServer;
  public pubSub: any;
  constructor() {
    this.pubSub = new NatsPubSub();
    this.app = new GraphQLServer({
      schema,
      context: () => {
        return {
          pubSub: this.pubSub,
        };
      },
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(morgan('dev'));
    this.app.express.use(helmet());
  }
}

export default new App().app;
