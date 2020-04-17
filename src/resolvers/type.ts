import { IResolvers } from 'graphql-tools';
import 'graphql-import-node'
import _ from 'lodash';
import {database} from './../data/data.store';

const types: IResolvers = {
    Student: {
        courses : (parent) => {
            const list: Array<any> = [];
            parent.courses.map( (course: string) => {
                list.push(_.filter(database.courses,['id', course])[0]);
            });
            return list;
        }
    }
}

export default types;