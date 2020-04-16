import { IResolvers } from 'graphql-tools';
import 'graphql-import-node'

import {database} from './../data/data.store';

const query: IResolvers = {
    Query: {
        students(): any  {
            return database.students;
        }
    }
}

export default query;