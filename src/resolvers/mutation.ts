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
        },
        updateCourse(__: void, { course }): any {
            const indexCourse = database.courses.findIndex(c => c.id === course.id);
            if (indexCourse < 0) {
                console.warn("No existe el curso " + course.id)
                return null;
            }
            const { reviews } = database.courses[indexCourse];
            database.courses[indexCourse] = { ...course, reviews }
            return database.courses[indexCourse];
        }
    }
};

export default mutation;