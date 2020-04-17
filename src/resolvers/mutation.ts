import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const mutation: IResolvers = {
    Mutation: {
        addCourse(__: void, { course }): any {

            const existCourse = database.courses.find(c => c.title === course.title);
            if (existCourse) {
                console.warn("Ya existe el curso " + course.title)
                return existCourse;
            } 

            const newCourse = { ...course }
            newCourse.id = String(database.courses.length + 1);
            newCourse.reviews = [];
            newCourse.students = [];    

            database.courses.push(newCourse);
            return newCourse;
        }
    }
};

export default mutation;