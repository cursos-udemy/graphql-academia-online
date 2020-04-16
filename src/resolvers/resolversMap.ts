import { IResolvers } from 'graphql-tools';
import 'graphql-import-node';
import query from './query';

const resolvers: IResolvers = {
    ...query
}

export default resolvers;