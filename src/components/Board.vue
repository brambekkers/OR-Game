<template>
	<div id="board">
		<Title v-if="gameStarted" />
		<Tile v-for="(tile, i) of tiles" :i="i" :tile="tile" :key="i" />
		<Player />
	</div>
</template>

<script>
	import TilesConfig from "@/config/tiles";
	import Title from "@/components/Title";
	import Tile from "@/components/Tile";
	import Player from "@/components/Player";

	import { mapGetters } from "vuex";

	export default {
		components: { Title, Tile, Player },
		data() {
			return {
				tiles: TilesConfig,
			};
		},
		computed: {
			...mapGetters(["gameStarted"]),
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#board {
		// Set Size
		width: 100vw;
		max-width: calc(100vh * 16 / 9);
		height: calc(100vw * 9 / 16);
		max-height: 100vh;

		// Background
		background: url("../assets/background.png");
		background-size: cover;

		// position
		position: relative;
	}
</style>
