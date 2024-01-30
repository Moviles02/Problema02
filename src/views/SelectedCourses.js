import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeCourseAction } from '../components/actions/TaskAction';
import { style_01 } from '../styles/style_01';

const SelectedCourseList = () => {
  const dispatch = useDispatch();
  const selectedCourses = useSelector(state => state.Tasks.selectedCourses);

  return (
    <View style={style_01.body}>
      {selectedCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[style_01.taskText, { backgroundColor: 'lightgreen' }]}
          onPress={() => dispatch(removeCourseAction(course))}
        >
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
        
      ))}
    </View>
    
  );
};

export default SelectedCourseList;
