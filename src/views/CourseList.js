import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../components/actions/TaskAction';
import { style_01 } from '../styles/style_01';

const CourseList = () => {
  const dispatch = useDispatch();
  const availableCourses = useSelector(state => state.Tasks.availableCourses);

  return (
    <View style={style_01.body}>
      {availableCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[style_01.taskText, { backgroundColor: 'lightblue' }]}
          onPress={() => dispatch(addCourseAction(course))}
        >
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CourseList;
