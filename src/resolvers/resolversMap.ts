import { IResolvers } from 'graphql-tools';
import 'graphql-import-node';
import query from './query';
import types from './types';
import mutation from './mutation';

const resolvers: IResolvers = {
    ...query,
    ...mutation,
    ...types
}

export default resolvers;