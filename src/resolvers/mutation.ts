import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const mutation: IResolvers = {
    Mutation: {
        addCourse(_: void, { course }): any {
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
        updateCourse(_: void, { course }): any {
            const indexCourse = database.courses.findIndex(c => c.id === course.id);
            if (indexCourse < 0) {
                console.warn("No existe el curso " + course.id)
                return null;
            }
            const { reviews } = database.courses[indexCourse];
            database.courses[indexCourse] = { ...course, reviews }
            return database.courses[indexCourse];
        },
        deleteCourse(_:void, {id} ): any {
            const indexCourse = database.courses.findIndex(c => c.id === id);
            if (indexCourse < 0) {
                console.warn("No existe el curso ID " + id)
                return null;
            }
            const courseDeleted = database.courses[indexCourse];
            database.courses.splice(indexCourse, 1);
            return courseDeleted;
        }
    }
};

export default mutation;