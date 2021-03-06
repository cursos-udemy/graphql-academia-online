import { IResolvers } from 'graphql-tools';
import 'graphql-import-node'

import { database } from './../data/data.store';

const query: IResolvers = {
    Query: {
        students(): any {
            return database.students;
        },
        student(__: void, { id }): any {
            return database.students.find(student => student.id === id);
        },
        courses(): any {
            return database.courses;
        },
        course( __: void, {id}): any {
            return database.courses.find(course => course.id === id);
        }
    }
}

export default query;