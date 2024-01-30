import { ADD_COURSE, REMOVE_COURSE } from '../actions/TaskActionTypes';

const INITIAL_STATE = {
  availableCourses: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5'],
  selectedCourses: [],
};

const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        availableCourses: state.availableCourses.filter(c => c !== action.payload),
        selectedCourses: [...state.selectedCourses, action.payload],
      };

    case REMOVE_COURSE:
      return {
        ...state,
        availableCourses: [...state.availableCourses, action.payload],
        selectedCourses: state.selectedCourses.filter(c => c !== action.payload),
      };

    default:
      return state;
  }
};

export default TaskReducer;
