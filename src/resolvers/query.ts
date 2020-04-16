import { IResolvers } from 'graphql-tools';
import 'graphql-import-node'

import {database} from './../data/data.store';

const query: IResolvers = {
    Query: {
        students(): string  {
            return database.students[0].name;
        }
    }
}

export default query;