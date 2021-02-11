<template>
	<div class="tile" :style="tileStyle(tile)">
		<img src="@/assets/player.png" class="player" v-if="playerPos === i" />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		props: ["tile", "i"],
		computed: {
			...mapGetters(["playerPos"]),
		},
		methods: {
			tileStyle(tile) {
				return {
					top: `${tile.pos.y}%`,
					left: `${tile.pos.x}%`,
					height: `${tile.size.y}%`,
					width: `${tile.size.x}%`,
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	.tile {
		position: absolute;
		// background: red;

		.player {
			position: absolute;
			height: calc(10vw * 9 / 16);
			max-height: 10vh;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>