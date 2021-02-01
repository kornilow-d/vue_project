<template>
	<div class="wrapper">
		<div class="wrapper-content">
			<section>
				<div class="container">
					<message v-if="message" :message="message" />

					<newNote :note="note" :priority="priority" @addNote="addNote" />

					<div class="note-header">
						<h1>{{ title }}</h1>

						<search :search="search" placeholder="Find your note" @search="search = $event" />
					</div>

					<notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { priority } from './const.js';

import message from '@/components/Message.vue';
import newNote from '@/components/NewNote.vue';
import notes from '@/components/Notes.vue';
import search from '@/components/Search.vue';

export default {
	components: {
		message,
		newNote,
		notes,
		search,
	},
	data() {
		return {
			title: 'Notes App',
			message: null,
			search: '',
			grid: true,
			priority,
			note: {
				title: '',
				descr: '',
				priority: 'low',
			},
			notes: []
		};
	},
	created() {
		this.notes = this.$store.getters.getNotes;
	},
	computed: {
		notesFilter() {
			let array = this.notes,
				search = this.search;

			if (!search) return array;

			search = search.trim().toLowerCase();

			array = array.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			});

			// Error
			return array;
		},
	},
	methods: {
		addNote() {
			let { title, descr, priority } = this.note;

			if (title === '') {
				this.message = 'title cant be blank!';
				return false;
			}

			this.$store.dispatch('addNote', {
				title,
				descr,
				date: new Date(Date.now()).toLocaleString(),
				priority,
			});

			this.message = null;
			this.note.title = '';
			this.note.descr = '';
			this.note.priority = 'low';
		},
		removeNote(index) {
			this.$store.dispatch('removeNote', index);
		},
	},
};
</script>