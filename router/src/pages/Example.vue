<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1>Example</h1>
				<p>{{ getMessage }}</p>
				<input type="text" v-model="message" />
				<button class="btn btnPrimary" @click="setMessage">Change message</button>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: null,
		};
	},
	computed: {
		getMessage() {
			return this.$store.getters.getMessage;
		},
	},
	methods: {
		setMessage() {
			this.$store.dispatch('setMessage', this.message);
		},
	},
};
</script>