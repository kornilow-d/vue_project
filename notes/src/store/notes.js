import store from '.';

export default {
	state: {
		notes: [
			{
				title: 'First Note',
				descr: 'awdawd awd awd awd awd',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'low',
			},
			{
				title: 'First Note',
				descr: 'awdawd awd awd awd awd',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'middle',
			},
		],
	},
	mutations: {
		addNote(state, note) {
			state.notes.push(note);
		},
		removeNote(state, index) {
			state.notes.splice(index, 1);
		},
	},
	actions: {
		addNote({ commit }, note) {
			commit('addNote', note);
		},
		removeNote({ commit }, index) {
			commit('removeNote', index);
		},
	},
	getters: {
		getNotes(state) {
			return state.notes;
		},
	},
};
