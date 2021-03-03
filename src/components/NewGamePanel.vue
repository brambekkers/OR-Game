<template>
	<div id="panel">
		<h1>OR Jaar(verslag)spel</h1>
		<p>
			Welkom bij het OR-Jaarverslag spel. Met dit spel willen we jullie op
			een leuke manier mee terug nemen naar het or-jaar 2020. Het was een
			roerig jaar door Corona waar we het allemaal zwaar mee hebben gehad.
			Tijdens dit spel kom je achter alle OR-onderwerpen die dit jaar
			hebben gespeeld.
		</p>
		<p class="mb-1">Wat is jouw naam:</p>
		<input id="name" v-model="name" type="text" /><br />

		<p>Speel het spel en probeer 2020 te verslaan.</p>
		<a class="btn" @click="click()">Start het spel</a>
	</div>
</template>

<script>
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		computed: {
			name: {
				// getters
				get() {
					return this.$store.getters.name;
				},
				// setter
				set(val) {
					this.$store.commit("name", val);
				},
			},
		},
		methods: {
			click() {
				clickSound.play();
				this.$store.commit("gameStarted", true);
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
