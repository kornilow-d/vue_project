<template>
	<div id="app">
		<!-- First Modal -->
		<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show First Modal</button>
		<modals title="First modals" v-show="modalFirst" @close="modalFirst = false">
			<div slot="body">
				<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show First Modal</button>
			</div>
		</modals>

		<!-- Second Modal -->
		<button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show First Modal</button>
		<modals title="Modal with form" v-show="modalSecond.show" @close="modalSecond.show = false">
			<div slot="body">
				<form @submit.prevent="submitSecondForm">
					<label>Name:</label>
					<input required type="text" v-model="modalSecond.name" />
					<label>Email:</label>
					<input required type="email" v-model="modalSecond.email" />
					<button class="btn btnPrimary">Submit</button>
				</form>
			</div>
		</modals>

		<!-- Modal with Validate -->
		<button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with form + validate</button>
		<modalValidate v-show="modalValidate" @close="modalValidate = false" />
	</div>
</template>

<script>
import modals from './components/UI/Modal.vue';
import modalValidate from './components/ModalValidate.vue';

export default {
	components: {
		modals,
		modalValidate,
	},
	data() {
		return {
			modalFirst: false,
			modalSecond: {
				show: false,
				name: '',
				email: '',
			},
			modalValidate: false,
		};
	},
	methods: {
		submitSecondForm() {
			console.log({
				name: this.modalSecond.name,
				email: this.modalSecond.email,
			});
			this.modalSecond.name = '';
			this.modalSecond.email = '';
			this.modalSecond.show = false;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
