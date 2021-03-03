<template>
	<div id="panel">
		<h1>Gewonnen!</h1>
		<p>
			Gefeliciteerd {{ name }}! Je hebt het spel gewonnen met
			{{ tries }} worpen en een score van {{ score }} punten. Je deed in
			totaal {{ minutes }} minuten over
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
				clickSound.play();
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
