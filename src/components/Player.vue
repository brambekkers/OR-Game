<template>
	<div class="playerContainer" :style="containerStyle">
		<img
			src="@/assets/man/Man1.png"
			class="player"
			v-if="animation === 1"
		/>
		<img
			src="@/assets/man/Man2.png"
			class="player"
			v-if="animation === 2"
		/>
		<img
			src="@/assets/man/Man3.png"
			class="player"
			v-if="animation === 3"
		/>
		<img
			src="@/assets/man/Man4.png"
			class="player"
			v-if="animation === 4"
		/>
		<img
			src="@/assets/man/Man5.png"
			class="player"
			v-if="animation === 5"
		/>
		<img
			src="@/assets/man/Man6.png"
			class="player"
			v-if="animation === 6"
		/>
		<img
			src="@/assets/man/Man7.png"
			class="player"
			v-if="animation === 7"
		/>
	</div>
</template>

<script>
	import TilesConfig from "@/config/tiles";
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				tiles: TilesConfig,
				animation: 1,
			};
		},
		computed: {
			...mapGetters(["playerPos"]),
			containerStyle() {
				const tile = this.tiles[this.playerPos];
				this.updateAnimation();
				return {
					top: `${tile.pos.y}%`,
					left: `${tile.pos.x}%`,
					height: `${tile.size.y}%`,
					width: `${tile.size.x}%`,
				};
			},
		},
		methods: {
			updateAnimation() {
				this.animation = (this.animation % 7) + 1;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.playerContainer {
		position: absolute;
		transition: all 400ms;
		// background: red;

		.player {
			position: absolute;
			height: calc(10vw * 9 / 12);
			max-height: 20vh;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>