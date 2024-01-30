import { ADD_COURSE, REMOVE_COURSE } from './TaskActionTypes';

export const addCourseAction = course => ({
  type: ADD_COURSE,
  payload: course,
});

export const removeCourseAction = course => ({
  type: REMOVE_COURSE,
  payload: course,
});
