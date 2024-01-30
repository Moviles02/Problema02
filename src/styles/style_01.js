import {StyleSheet} from 'react-native';

		const principal = '#1B2E66';
		const naranja = '#FF9900';
		const blanco = '#FFFFFF';
		const gris_1 = '#B2BDD5';

		export const style_01 = StyleSheet.create({
			body: {
				margin: 7,
				padding: 5,
			},
			text: {
				fontSize: 16,
				fontWeight: 'bold',
				color: principal,
			},
			taskText: {
				alignItems: 'center',
				backgroundColor: blanco,
				borderRadius: 10,
				margin: 5,
				padding: 10,
			},
			btn_AddTask: {
				borderColor: principal,
				borderWidth: 1,
				borderRadius: 20,
				height: 40,
				width: 40,
				justifyContent: 'center',
				alignItems: 'center',
			},
			btn_label: {
				alignSelf: 'center',
				fontSize: 25,
				fontWeight: 'bold',
			},
			entries: {
				borderColor: principal,
				borderWidth: 1,
				borderRadius: 10,
				marginTop: 5,
				width: '85%',
				height: 40,
			},
			row: {
				alignItems: 'center',
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginLeft: 'auto',
				marginRight: 'auto',
				position: 'relative',
				width: '96%',
			},
			titleBar: {
				backgroundColor: principal,
				padding: 5,
				flexDirection: 'row',
				flexWrap: 'wrap',
			},
			title: {
				marginLeft: 25,
				marginTop: 15,
				fontSize: 28,
				fontWeight: 'bold',
				color: naranja,
			},
			
		});
		