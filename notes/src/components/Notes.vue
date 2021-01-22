<template>
	<div class="notes">
		<div class="note" :class="note.priority" v-for="(note, index) in notes" :key="index">
			<div class="note-header">
				<p>{{ note.title }}</p>
				<p style="cursor: pointer" @click="removeNote(index)">x</p>
			</div>
			<div class="note-body">
				<p>{{ note.descr }}</p>
				<span>{{ note.date }}</span>
				<br />
				<span>Приоритет: {{ note.priority }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		notes: {
			type: Array,
			required: true,
		},
		grid: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		removeNote(index) {
			this.$emit('remove', index);
		},
	},
};
</script>

<style lang="scss">
.notes {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 40px 0;
}

.note {
	width: 48%;
	padding: 18px 20px;
	margin-bottom: 20px;
	background-color: #fff;
	transition: box-shadow 0.3s ease-in-out;
	&:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}
	&.high {
		background-color: #ff3c38;
	}
	&.middle {
		background-color: #f9fbb2;
	}
}
.note-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	h1 {
		font-size: 32px;
	}
	p {
		color: #402caf;
		font-size: 22px;
	}
	svg {
		color: #999;
		margin-right: 12px;
		cursor: pointer;
		&.active {
			color: #402caf;
		}
		&:last-child {
			margin-right: 0px;
		}
	}
}
.note-body {
	p {
		margin: 20px 0;
	}
	span {
		font-size: 14px;
		color: #999;
	}
}
</style>