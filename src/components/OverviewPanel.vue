<template>
	<div id="panel">
		<h1>Overzicht van alle acties</h1>

		<div id="scoreContainer">
			<div v-for="(tile, i) of tiles" :key="i">
				<h1>{{ i }} - {{ tile.title }}</h1>
				<p>
					{{ tile.description }}
				</p>
			</div>
		</div>
		<a class="btn" @click="click">Terug</a>
	</div>
</template>

<script>
	import TilesConfig from "@/config/tiles";
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		computed: {
			tiles() {
				return TilesConfig;
			},
		},
		methods: {
			click() {
				clickSound.play();
				this.$store.commit("overviewPanel", false);
				this.$store.commit("highscorePanel", true);
			},
		},
	};
</script>

<style lang="scss" scoped>
	#scoreContainer {
		padding: 1rem;
		text-align: left;
	}
</style>
