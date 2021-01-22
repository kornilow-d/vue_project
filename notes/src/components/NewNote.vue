<template>
	<div class="new-note">
		<div class="new-note__block">
			<div class="new-note__item">
				<label>Title</label>
				<input v-model="note.title" type="text" />
			</div>
			<div class="new-note__item">
				<label>Приоритет</label>
				<select name="priority_list" v-model="note.priority">
					<option :value="item.class" v-for="(item, index) in priority" :key="index">{{ item.title }}</option>
				</select>
			</div>
		</div>

		<label>Description</label>
		<textarea v-model="note.descr"></textarea>

		<button class="btn btnPrimary" @click="addNote">New note</button>
	</div>
</template>

<script>
export default {
	props: {
		priority: {
			type: Array,
			required: true,
		},
		note: {
			type: Object,
			required: true,
		},
	},
	methods: {
		addNote() {
			this.$emit('addNote', this.note);
		},
	},
};
</script>

<style lang="scss" scoped>
.new-note {
	text-align: center;
	margin-bottom: 30px;
	&__block {
		display: flex;
		align-items: center;
		align-content: stretch;
	}
	&__item {
		width: 50%;
		padding: 0 15px;
	}
}
.priority {
	display: flex;
}
textarea {
	margin-bottom: 20px;
}
select {
	width: 100%;
}
</style>