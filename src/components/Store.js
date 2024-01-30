import {combineReducers, legacy_createStore} from 'redux';
		import TaskReducer from './reducers/TaskReducer';

		const ConfigureStore = () => {
			const reducers = combineReducers({Tasks: TaskReducer});
			const store = legacy_createStore(reducers);
			return store;
		};

		export default ConfigureStore;