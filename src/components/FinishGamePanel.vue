<template>
	<div id="panel">
		<h1>Gewonnen!</h1>
		<p>
			Gefeliciteerd {{ name }}! Je hebt het spel gewonnen met
			<strong> {{ tries }} </strong> worpen en een score van
			<strong>{{ score }}</strong> punten. Je deed in totaal
			<strong>{{ minutes }}</strong> minuten over
		</p>
		<a class="btn" @click="click()">Bekijk de hoogste scores!</a>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		computed: {
			...mapGetters(["tries", "score", "finishTime", "startTime", "name"]),
			minutes() {
				return ((this.finishTime - this.startTime) / 1000 / 60).toFixed(2);
			},
		},
		methods: {
			click() {
				this.$store.commit("highscorePanel", true);
				clickSound.play();
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
