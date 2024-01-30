import React from 'react';
		import {View, Text, TextInput, TouchableOpacity} from 'react-native';
		import {connect, useDispatch} from 'react-redux';
		import {style_01} from '../styles/style_01';

		import {useState} from 'react';
		import {addTaskAction} from '../components/actions/TaskAction';

		const TaskRegister = () => {
			const [txtTask, setTxtTask] = useState('Mi primer tarea');

			const dispatch = useDispatch();
			const onPressTask = taskDescription => {
				dispatch(addTaskAction(txtTask));
				setTxtTask('');
			};

			return (
				<View>
					<View style={style_01.titleBar}>
						<Text style={style_01.title}>Tasks List</Text>
					</View>
					<View style={style_01.row}>
						<TextInput
							style={style_01.entries}
							value={txtTask}
							placeholder={'Task todo...'}
							onChangeText={newValue => {
								setTxtTask(newValue);
							}}
						/>
						<TouchableOpacity
							style={style_01.btn_AddTask}
							onPress={() => onPressTask()}>
							<Text style={style_01.btn_label}> + </Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		};

		const mapStateToProps = state => {
			return {
				Tasks: state.Tasks,
			};
		};

		export default connect(mapStateToProps)(TaskRegister);