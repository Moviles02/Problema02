import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import CourseList from './src/views/CourseList';
import SelectedCourseList from './src/views/SelectedCourses';
import ConfigureStore from './src/components/Store';

const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View>
        <CourseList />
        <SelectedCourseList />
      </View>
    </Provider>
  );
};

export default App;
