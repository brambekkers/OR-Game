<template>
	<div class="tile" :style="tileStyle(tile)" />
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
	}
</style>